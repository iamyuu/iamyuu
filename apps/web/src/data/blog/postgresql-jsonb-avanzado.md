---
title: "PostgreSQL y JSONB: el poder de una base relacional con flexibilidad documental"
description: PostgreSQL no es un sustituto de MongoDB — es algo mejor. Aprende a usar JSONB, índices GIN, funciones de extracción y operadores de consulta para el mejor de ambos mundos.
pubDatetime: 2026-01-22T10:00:00Z
tags:
  - postgresql
  - bases-de-datos
  - backend
  - sql
draft: false
---

La pregunta "¿SQL o NoSQL?" perdió relevancia cuando PostgreSQL adquirió soporte robusto para documentos JSON. Con `JSONB` tienes esquema estricto donde lo necesitas y flexibilidad documental donde lo necesitas, en la misma base de datos.

## Table of contents

## `JSON` vs `JSONB`: usa siempre JSONB

```sql
-- JSON: almacena el texto literal tal cual
-- JSONB: almacena en formato binario procesado

-- Ventajas de JSONB:
-- ✓ Soporta índices GIN (consultas ultrarrápidas)
-- ✓ Elimina espacios redundantes y claves duplicadas
-- ✓ Operadores de contención: @>, <@
-- ✗ Ligeramente más lento en escritura (parseo)
-- ✗ No preserva el orden de claves ni espacios

CREATE TABLE eventos (
  id         BIGSERIAL PRIMARY KEY,
  tipo       TEXT NOT NULL,
  timestamp  TIMESTAMPTZ DEFAULT NOW(),
  payload    JSONB NOT NULL,             -- [!code highlight]
  metadata   JSONB DEFAULT '{}'::JSONB
);
```

## Inserción y consultas básicas

```sql
-- Insertar un evento con payload flexible
INSERT INTO eventos (tipo, payload) VALUES
  ('usuario.registro', '{"nombre": "Ana García", "plan": "pro", "pais": "MX"}'),
  ('pago.completado',  '{"monto": 99.99, "moneda": "USD", "metodo": "card"}'),
  ('error.api',        '{"codigo": 429, "endpoint": "/api/v2/items", "ip": "10.0.0.1"}');

-- Extracción de campo: operador ->>
SELECT payload->>'nombre' AS nombre
FROM eventos
WHERE tipo = 'usuario.registro';

-- Extracción anidada
SELECT payload->'direccion'->>'ciudad' AS ciudad
FROM eventos
WHERE tipo = 'usuario.registro';

-- Filtrar por valor dentro del JSON
SELECT * FROM eventos
WHERE tipo = 'pago.completado'
  AND (payload->>'monto')::NUMERIC > 50;
```

## Índices GIN: consultas en JSON a velocidad SQL

```sql
-- Índice GIN sobre toda la columna JSONB
CREATE INDEX idx_eventos_payload ON eventos USING GIN (payload);  -- [!code highlight]

-- Índice sobre una clave específica (más eficiente)
CREATE INDEX idx_eventos_tipo_pago ON eventos
  USING GIN ((payload->'metodo'));

-- Ahora estas consultas usan el índice:
SELECT * FROM eventos
WHERE payload @> '{"plan": "pro"}';      -- contiene este objeto

SELECT * FROM eventos
WHERE payload ? 'codigo';                -- tiene esta clave
```

## Operadores de contención

```sql
-- @>  "contiene"
SELECT * FROM eventos
WHERE payload @> '{"moneda": "USD", "metodo": "card"}';

-- <@  "está contenido en"
SELECT '{"a": 1}'::JSONB <@ '{"a": 1, "b": 2}'::JSONB;  -- true

-- ?   "tiene la clave"
SELECT * FROM eventos WHERE payload ? 'codigo';

-- ?|  "tiene alguna de las claves"
SELECT * FROM eventos WHERE payload ?| ARRAY['nombre', 'email'];

-- ?&  "tiene todas las claves"
SELECT * FROM eventos WHERE payload ?& ARRAY['monto', 'moneda'];
```

## `jsonb_set` y actualización parcial

Una ventaja enorme sobre documentos puros: actualizas un campo sin reescribir el documento completo.

```sql
-- Actualizar un campo dentro del JSONB
UPDATE eventos
SET payload = jsonb_set(payload, '{plan}', '"enterprise"')  -- [!code highlight]
WHERE tipo = 'usuario.registro'
  AND payload->>'nombre' = 'Ana García';

-- Eliminar una clave
UPDATE eventos
SET payload = payload - 'ip'
WHERE tipo = 'error.api';

-- Añadir una entrada a un array dentro del JSONB
UPDATE eventos
SET payload = jsonb_insert(payload, '{tags, -1}', '"urgente"')
WHERE tipo = 'error.api';
```

## Función de agregación: `jsonb_agg` y `jsonb_object_agg`

```sql
-- Agrupar pagos por moneda como array JSON
SELECT
  payload->>'moneda' AS moneda,
  COUNT(*)           AS total_pagos,
  jsonb_agg(payload) AS detalle          -- [!code highlight]
FROM eventos
WHERE tipo = 'pago.completado'
GROUP BY moneda;

-- Construir un objeto desde filas
SELECT jsonb_object_agg(tipo, COUNT(*))  -- [!code highlight]
FROM eventos
GROUP BY 1;
```

## Esquema híbrido: lo mejor de ambos mundos

```sql
CREATE TABLE productos (
  id          BIGSERIAL PRIMARY KEY,
  sku         TEXT UNIQUE NOT NULL,
  nombre      TEXT NOT NULL,
  precio      NUMERIC(10,2) NOT NULL,
  categoria   TEXT NOT NULL,
  -- Campos estructurados ↑ para JOIN, índices B-tree, constraints
  atributos   JSONB DEFAULT '{}',
  -- Atributos flexibles ↓ según categoría del producto
  CHECK (precio > 0)
);

-- Electrónica: { "voltaje": 220, "garantia_meses": 24 }
-- Ropa:        { "tallas": ["S","M","L"], "material": "algodón" }
-- Libros:      { "isbn": "...", "paginas": 320 }

-- Consulta que aprovecha ambas columnas
SELECT nombre, atributos->>'garantia_meses' AS garantia
FROM productos
WHERE categoria = 'electronica'
  AND (atributos->>'garantia_meses')::INT >= 12
  AND precio < 500;
```

> JSONB no reemplaza columnas tipadas para campos críticos. La regla: si vas a hacer JOIN, `WHERE`, o `ORDER BY` frecuente sobre un campo — ponlo como columna. Si es metadata variable o rara vez consultada — ponlo en JSONB.
