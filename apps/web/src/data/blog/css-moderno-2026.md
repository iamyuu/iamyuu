---
title: "CSS moderno en 2026: container queries, :has() y anchor positioning"
description: El CSS de hoy no tiene nada que envidiarle a JavaScript para layouts complejos. Guía práctica de las tres features que más cambiaron el desarrollo de interfaces.
pubDatetime: 2026-02-03T10:00:00Z
tags:
  - css
  - frontend
  - diseño
  - web
draft: false
---

Durante años, la respuesta a "¿cómo hago X en CSS?" era "usa JavaScript". En 2026 esa respuesta ya no aplica para la mayoría de los casos. Tres features en particular redibujaron el mapa del diseño en el navegador.

## Table of contents

## Container Queries: responder al contenedor, no a la pantalla

Las media queries responden al ancho del _viewport_. El problema: un componente puede vivir en una columna estrecha o en una amplia dependiendo del layout padre. Las **container queries** resuelven esto.

```css file=card.css
/* Declarar el contenedor */
.card-wrapper {
  container-type: inline-size; /* [!code highlight] */
  container-name: card;
}

/* El componente responde a su contenedor */
@container card (min-width: 400px) {
  /* [!code highlight] */
  .card {
    display: grid;
    grid-template-columns: 200px 1fr;
  }

  .card__image {
    grid-row: 1 / 3;
  }
}

@container card (max-width: 399px) {
  .card {
    display: flex;
    flex-direction: column;
  }
}
```

```html file=card.html
<!-- El mismo componente funciona en cualquier contexto -->
<aside class="card-wrapper" style="width: 300px">
  <article class="card">...</article>
  <!-- layout vertical -->
</aside>

<main class="card-wrapper" style="width: 700px">
  <article class="card">...</article>
  <!-- layout horizontal -->
</main>
```

### Container query units

Las queries también exponen unidades relativas al contenedor:

```css file=typography.css
.card__title {
  font-size: clamp(1rem, 4cqi, 2rem); /* cqi = container query inline size */
}
```

## La pseudoclase `:has()` — el selector padre que siempre quisimos

`:has()` selecciona un elemento en función de sus **descendientes**. Es el "selector de padre" que el CSS negó durante décadas.

```css file=styles.css
/* Formulario con campo requerido vacío */
form:has(input:required:invalid) .submit-btn {
  opacity: 0.5;
  pointer-events: none;
}

/* Card que contiene imagen: layout diferente */
.card:has(img) {
  /* [!code highlight] */
  display: grid;
  grid-template-columns: 150px 1fr;
}

.card:not(:has(img)) {
  padding: 1.5rem;
}

/* Navbar con menú abierto: deshabilitar scroll en body */
body:has(.nav-menu[aria-expanded="true"]) {
  /* [!code highlight] */
  overflow: hidden;
}
```

> `:has()` tiene soporte en todos los browsers modernos desde 2023. Puedes usarlo hoy en producción sin polyfills.

## Anchor Positioning: tooltips y popovers sin JavaScript

Antes de Anchor Positioning, colocar un tooltip relativo a su trigger requería calcular posiciones con JavaScript. Ya no:

```css file=tooltip.css
/* Declarar el ancla */
.btn-trigger {
  anchor-name: --mi-boton; /* [!code highlight] */
}

/* Posicionar el tooltip relativo al ancla */
.tooltip {
  position: absolute;
  position-anchor: --mi-boton; /* [!code highlight] */
  bottom: calc(anchor(top) + 8px); /* [!code highlight] */
  left: anchor(center); /* [!code highlight] */
  transform: translateX(-50%);

  /* Voltear automáticamente si no cabe */
  position-try-fallbacks: flip-block; /* [!code ++] */
}
```

```html file=tooltip.html
<button class="btn-trigger" popovertarget="tip">Hover me</button>
<div id="tip" class="tooltip" popover>
  Este tooltip se posiciona solo, sin JS.
</div>
```

### `position-try-fallbacks`: lógica de colisión declarativa

```css file=tooltip.css
.tooltip {
  position-try-fallbacks:
    flip-block,
    /* prueba arriba si no cabe abajo */ flip-inline,
    /* prueba izquierda si no cabe derecha */ flip-start; /* combina ambos */
}
```

## ¿Y el soporte?

| Feature            | Chrome | Firefox | Safari  |
| ------------------ | ------ | ------- | ------- |
| Container Queries  | 105+ ✓ | 110+ ✓  | 16+ ✓   |
| `:has()`           | 105+ ✓ | 121+ ✓  | 15.4+ ✓ |
| Anchor Positioning | 125+ ✓ | 131+ ✓  | 18+ ✓   |

En 2026, con la distribución actual de browsers, puedes usar las tres en producción para la mayoría de proyectos. Considera polyfills sólo si tu audiencia incluye browsers muy antiguos.

## El CSS de hoy es declarativo y expresivo

La revolución silenciosa del CSS no fue Grid ni Flexbox. Fue el cambio de mentalidad: **el navegador razona sobre las restricciones, tú declaras el resultado deseado**. Container queries, `:has()` y anchor positioning son la culminación de ese paradigma.
