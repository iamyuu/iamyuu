---
title: "TypeScript 5.x: las features que cambian cómo escribes código"
description: Repaso práctico de las novedades más impactantes de TypeScript 5.x — decoradores, const type parameters, variadic tuple types y más.
pubDatetime: 2026-02-15T10:00:00Z
tags:
  - typescript
  - javascript
  - dev
draft: false
---

TypeScript sigue evolucionando a un ritmo acelerado. Las versiones 5.x trajeron cambios que van más allá de mejoras de rendimiento: redefinen patrones que llevamos años usando.

## Table of contents

## Decoradores estándar (TC39 Stage 3)

Por fin. Después de años con la versión experimental, TypeScript 5.0 adoptó los **decoradores estándar** de TC39. La sintaxis es similar pero la semántica cambió bastante.

```typescript file=decorators.ts
// Decorador de clase — antes (experimental)
@sealed
class OldClass { ... }

// Decorador estándar — TS 5.x // [!code highlight]
function logged<T extends new (...args: unknown[]) => unknown>(
  target: T,
  _ctx: ClassDecoratorContext,
) {
  return class extends target {
    constructor(...args: unknown[]) {
      super(...args);
      console.log(`[LOG] Instancia de ${target.name} creada`);
    }
  };
}

@logged
class UserService {
  constructor(private db: Database) {}
}
```

### Decoradores de método y accesor

```typescript file=method-decorator.ts
function measure(_target: unknown, ctx: ClassMethodDecoratorContext) {
  const name = String(ctx.name);
  return function (this: unknown, ...args: unknown[]) {
    const start = performance.now();
    const result = (this as Record<string, Function>)[name](...args); // [!code --]
    const result = Reflect.apply(
      // [!code ++]
      _target as Function,
      this,
      args // [!code ++]
    ); // [!code ++]
    console.log(`${name} tardó ${performance.now() - start}ms`);
    return result;
  };
}

class ReportService {
  @measure
  async generatePDF(id: string) {
    /* ... */
  }
}
```

## `const` Type Parameters

Antes necesitabas `as const` en cada llamada para inferir tuplas literales. Ahora puedes declararlo en el genérico:

```typescript file=const-type-params.ts
// Antes: inferido como string[]
function head<T>(arr: T[]) {
  return arr[0];
}
head(["a", "b"]); // tipo: string

// Ahora: inferido como el literal exacto // [!code highlight]
function head<const T extends readonly unknown[]>(arr: T) {
  return arr[0];
}
head(["a", "b"] as const); // tipo: "a"
head(["a", "b"]); // tipo: "a"  ← funciona sin as const // [!code ++]
```

## `satisfies` operator (consolidado)

Introducido en 4.9 pero ya es parte del flujo diario. Permite validar que un valor satisface un tipo sin "ensancharlo":

```typescript file=satisfies.ts
type Palette = {
  red: [number, number, number] | string;
  green: [number, number, number] | string;
  blue: [number, number, number] | string;
};

const palette = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255],
} satisfies Palette; // [!code highlight]

// Ahora TypeScript sabe que red es una tupla, no string
palette.red.at(0); // ✓ — antes daba error
```

## Mejoras en inferencia de `infer`

```typescript file=infer-extends.ts
// Extraer el tipo de retorno filtrado por constraint
type ReturnIfString<T> = T extends () => infer R extends string
  ? R
  : never;

type A = ReturnIfString<() => "hello">; // "hello"
type B = ReturnIfString<() => number>;  // never
```

## Rendimiento: modo `--incremental` y `--composite`

TS 5.x optimizó las builds incrementales. En proyectos grandes la mejora puede ser de hasta **3×**:

```json file=tsconfig.json
{
  "compilerOptions": {
    "composite": true,
    "incremental": true,
    "tsBuildInfoFile": ".tsbuildinfo",
    "moduleResolution": "bundler"
  }
}
```

> **Consejo:** combina `composite` con referencias de proyecto (`references`) para monorepos. Cada paquete compilará sólo lo que cambió.

## Resumen rápido

| Feature                    | Versión                  | Impacto                                  |
| -------------------------- | ------------------------ | ---------------------------------------- |
| Decoradores estándar       | 5.0                      | Alto — reemplaza experimental            |
| `const` type params        | 5.0                      | Medio — menos `as const`                 |
| `satisfies`                | 4.9 / consolidado en 5.x | Alto — tipado más expresivo              |
| `infer ... extends`        | 5.x                      | Medio — tipos condicionales más precisos |
| Build incremental mejorado | 5.x                      | Alto en monorepos                        |
