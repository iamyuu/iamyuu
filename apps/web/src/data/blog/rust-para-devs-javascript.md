---
title: "Rust para desarrolladores JavaScript: el salto que vale la pena"
description: Si vienes del mundo JS/TS y te da respeto Rust, esta guía es para ti. Mapeamos conceptos familiares al ecosistema de Rust con ejemplos directos.
pubDatetime: 2026-02-12T10:00:00Z
tags:
  - rust
  - javascript
  - sistemas
  - webassembly
draft: false
---

Rust apareció en los radares de los desarrolladores web hace años, pero la adopción fue lenta. En 2026 el panorama cambió: Rust impulsa herramientas críticas del ecosistema JS (Biome, Oxc, Rolldown, el compilador de SWC) y WebAssembly lo hace indispensable en el frontend. Es hora de aprenderlo.

## Table of contents

## El mayor cambio de mentalidad: ownership

En JavaScript el garbage collector gestiona la memoria. En Rust la responsabilidad pasa al compilador a través del sistema de **ownership**.

```rust file=ownership.rs
// En JS: esto funciona
// let a = [1, 2, 3];
// let b = a; // a sigue siendo válido

// En Rust:
fn main() {
    let a = vec![1, 2, 3];
    let b = a;          // a se "mueve" a b // [!code highlight]
    println!("{:?}", a); // ✗ ERROR: a fue movido
    println!("{:?}", b); // ✓
}
```

La solución: **borrowing** (préstamo) con referencias.

```rust file=borrowing.rs
fn main() {
    let a = vec![1, 2, 3];
    let b = &a;          // préstamo inmutable // [!code ++]
    println!("{:?}", a); // ✓ a sigue siendo válido
    println!("{:?}", b); // ✓
}

fn imprimir(v: &Vec<i32>) { // recibe referencia, no ownership // [!code highlight]
    for n in v {
        print!("{} ", n);
    }
}
```

## Tipos: de `any` al sistema más seguro del mundo

| JavaScript/TypeScript  | Rust equivalente                 |
| ---------------------- | -------------------------------- |
| `number`               | `i32`, `u32`, `f64`, …           |
| `string`               | `String` (heap) / `&str` (slice) |
| `T \| null`            | `Option<T>`                      |
| `T \| Error`           | `Result<T, E>`                   |
| `any[]`                | `Vec<T>`                         |
| `{ [key: string]: T }` | `HashMap<String, T>`             |

```rust file=types.rs
fn dividir(a: f64, b: f64) -> Option<f64> {
    if b == 0.0 {
        None   // equivalente a null sin el billion-dollar mistake
    } else {
        Some(a / b)
    }
}

fn main() {
    match dividir(10.0, 0.0) {
        Some(resultado) => println!("Resultado: {resultado}"),
        None => println!("División por cero"),
    }
}
```

## Manejo de errores: `Result` es el `Promise` de Rust

En JS manejas errores con `try/catch` o `Promise` chains. En Rust, `Result<T, E>` es la forma idiomática:

```rust file=errors.rs
use std::fs;
use std::io;

// Antes: sin el operador ?
fn leer_config_verbose() -> Result<String, io::Error> {
    let contenido = match fs::read_to_string("config.toml") { // [!code --]
        Ok(c) => c,                                            // [!code --]
        Err(e) => return Err(e),                               // [!code --]
    };                                                         // [!code --]
    Ok(contenido.to_uppercase())
}

// Con el operador ? (equivalente al await de JS, pero para errores)
fn leer_config() -> Result<String, io::Error> {               // [!code ++]
    let contenido = fs::read_to_string("config.toml")?;       // [!code ++]
    Ok(contenido.to_uppercase())                               // [!code ++]
}
```

## Closures y funciones de orden superior

La sintaxis es distinta pero el concepto es idéntico:

```rust file=closures.rs
fn main() {
    let numeros = vec![1, 2, 3, 4, 5];

    // map + filter + collect (como Array.map + filter en JS)
    let pares_dobles: Vec<i32> = numeros
        .iter()
        .filter(|&&x| x % 2 == 0)  // [!code highlight]
        .map(|&x| x * 2)            // [!code highlight]
        .collect();

    println!("{:?}", pares_dobles); // [4, 8]
}
```

## Rust → WebAssembly: el puente al frontend

```rust file=lib.rs
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn fibonacci(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}
```

```bash
# Compilar a WASM
wasm-pack build --target web
```

```javascript file=main.js
import init, { fibonacci } from "./pkg/mi_proyecto.js";

await init();
console.log(fibonacci(40)); // ~10x más rápido que la versión JS pura
```

## Por dónde empezar

1. **[The Rust Book](https://doc.rust-lang.org/book/)** — la mejor documentación de cualquier lenguaje.
2. **Rustlings** — ejercicios interactivos en la terminal.
3. **[Rust by Example](https://doc.rust-lang.org/rust-by-example/)** — aprender con ejemplos reales.
4. Construye algo con **`wasm-pack`** y úsalo desde tu proyecto web actual.

> La curva de aprendizaje es real, pero el compilador de Rust es el mejor profesor que encontrarás: sus mensajes de error son detallados, precisos y casi siempre incluyen la solución.
