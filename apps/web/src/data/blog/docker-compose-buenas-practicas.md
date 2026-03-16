---
title: "Docker Compose en 2026: buenas prácticas que sí importan"
description: Más allá del docker-compose up básico. Configuraciones de producción, secretos, healthchecks, perfiles y multi-stage builds que marcan la diferencia.
pubDatetime: 2026-02-05T10:00:00Z
tags:
  - docker
  - devops
  - contenedores
  - backend
draft: false
---

`docker-compose up` es el primer comando que aprendes. Lo que viene después — networking, secretos, healthchecks, perfiles para distintos entornos — es lo que separa una configuración funcional de una lista para producción.

## Table of contents

## Estructura base limpia

```yaml file=compose.yml
name: mi-app

services:
  api:
    build:
      context: .
      dockerfile: Dockerfile
      target: production # multi-stage target // [!code highlight]
    environment:
      NODE_ENV: production
    env_file: .env.production # nunca hardcodees credenciales // [!code highlight]
    ports:
      - "3000:3000"
    depends_on:
      db:
        condition: service_healthy # espera a que DB esté lista // [!code highlight]
    restart: unless-stopped

  db:
    image: postgres:17-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      POSTGRES_PASSWORD_FILE: /run/secrets/db_password
    secrets:
      - db_password
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s
      timeout: 5s
      retries: 5
    restart: unless-stopped

volumes:
  postgres_data:

secrets:
  db_password:
    file: ./secrets/db_password.txt
```

## Multi-stage builds: menos MB, más seguridad

Un Dockerfile de producción nunca debería incluir las herramientas de desarrollo:

```dockerfile file=Dockerfile
# Stage 1: dependencias y build
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci                    # [!code highlight]
COPY . .
RUN npm run build

# Stage 2: imagen final mínima
FROM node:22-alpine AS production  # [!code ++]
WORKDIR /app                       # [!code ++]
                                   # [!code ++]
# Solo copiamos lo necesario       # [!code ++]
COPY --from=builder /app/dist ./dist  # [!code ++]
COPY --from=builder /app/node_modules ./node_modules  # [!code ++]
                                   # [!code ++]
USER node                          # no corras como root // [!code ++]
EXPOSE 3000
CMD ["node", "dist/server.js"]
```

La diferencia en tamaño puede ser de **600 MB → 80 MB**.

## Perfiles para distintos entornos

Con `profiles` puedes activar servicios según el contexto sin mantener múltiples archivos Compose:

```yaml file=compose.yml
services:
  api:
    # sin profile = siempre activo
    build: .

  adminer:
    image: adminer
    profiles: [dev, debug] # solo en dev // [!code highlight]
    ports:
      - "8080:8080"

  prometheus:
    image: prom/prometheus
    profiles: [monitoring] # solo cuando lo necesites // [!code highlight]
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
```

```bash
# Solo levantar API + DB
docker compose up

# Levantar con herramientas de dev
docker compose --profile dev up

# Todo el stack de monitoreo
docker compose --profile monitoring up
```

## Healthchecks que realmente funcionan

El `depends_on` básico sólo espera a que el contenedor **arranque**, no a que el servicio esté **listo**. La diferencia importa:

```yaml file=compose.yml
services:
  redis:
    image: redis:7-alpine
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 5s
      timeout: 3s
      retries: 10
      start_period: 10s # tiempo de gracia inicial // [!code highlight]

  worker:
    build: .
    depends_on:
      redis:
        condition: service_healthy # espera el healthcheck verde // [!code highlight]
```

## Networking: aislamiento por defecto

Cada `compose.yml` crea una red propia. Para comunicar stacks separados:

```yaml file=compose.yml
networks:
  frontend:
    driver: bridge
  backend:
    driver: bridge
    internal: true # sin acceso a internet // [!code highlight]

services:
  nginx:
    networks: [frontend, backend] # el único que toca ambas redes

  api:
    networks: [backend] # aislado del exterior // [!code highlight]

  db:
    networks: [backend] # idem
```

## Lista de verificación antes de producción

- [ ] Variables sensibles en `secrets` o `.env` fuera del repositorio
- [ ] Multi-stage build activo
- [ ] `restart: unless-stopped` en todos los servicios críticos
- [ ] Healthchecks configurados con `start_period` adecuado
- [ ] `depends_on` con `condition: service_healthy`
- [ ] Usuarios no-root en los contenedores (`USER node`, `USER app`)
- [ ] Volúmenes nombrados para datos persistentes (no bind mounts en prod)
- [ ] `--max-old-space-size` configurado según la memoria del contenedor

> La diferencia entre un `compose.yml` de tutorial y uno de producción no está en el número de líneas — está en saber qué puede fallar y haberlo contemplado.
