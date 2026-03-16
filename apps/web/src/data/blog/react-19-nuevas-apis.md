---
title: "React 19: useActionState, useOptimistic y el fin de los estados de carga manuales"
description: React 19 rediseñó cómo manejamos formularios, mutaciones y estados de transición. Guía práctica de las nuevas APIs con ejemplos reales.
pubDatetime: 2026-01-28T10:00:00Z
tags:
  - react
  - javascript
  - frontend
  - ux
draft: false
---

React 19 es la actualización más importante desde la introducción de Hooks. No trae nuevos conceptos radicales — trae la solución definitiva a un problema que resolvimos mil veces de formas distintas: **el manejo de formularios y mutaciones**.

## Table of contents

## El problema que React 19 resuelve

Antes de React 19, un formulario con feedback de carga, manejo de errores y actualización optimista requería esto:

```tsx file=before.tsx
// Antes: 35+ líneas para algo "básico"
function ProfileForm() {
  const [isPending, setIsPending] = useState(false); // [!code --]
  const [error, setError] = useState<string | null>(null); // [!code --]
  const [success, setSuccess] = useState(false); // [!code --]

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // [!code --]
    e.preventDefault(); // [!code --]
    setIsPending(true); // [!code --]
    setError(null); // [!code --]
    try {
      // [!code --]
      const data = new FormData(e.currentTarget); // [!code --]
      await updateProfile(data); // [!code --]
      setSuccess(true); // [!code --]
    } catch (err) {
      // [!code --]
      setError("Error al guardar"); // [!code --]
    } finally {
      // [!code --]
      setIsPending(false); // [!code --]
    } // [!code --]
  }
  // ...
}
```

## `useActionState`: formularios sin useState manual

```tsx file=profile-form.tsx
import { useActionState } from "react"; // [!code ++]

async function updateProfileAction(prevState: State, formData: FormData) {
  try {
    await updateProfile({
      name: formData.get("name") as string,
      bio: formData.get("bio") as string,
    });
    return { success: true, error: null };
  } catch {
    return { success: false, error: "Error al guardar el perfil" };
  }
}

function ProfileForm() {
  const [state, action, isPending] = useActionState(
    // [!code highlight]
    updateProfileAction,
    { success: false, error: null }
  );

  return (
    <form action={action}>
      <input name="name" placeholder="Nombre" />
      <textarea name="bio" placeholder="Biografía" />

      {state.error && <p className="error">{state.error}</p>}
      {state.success && <p className="success">¡Guardado!</p>}

      <button type="submit" disabled={isPending}>
        {isPending ? "Guardando..." : "Guardar"}
      </button>
    </form>
  );
}
```

## `useOptimistic`: UI instantánea con rollback automático

El patrón optimistic update (actualizar la UI antes de que el servidor confirme) era tedioso. Ahora:

```tsx file=todo-list.tsx
import { useOptimistic, useActionState } from "react";

function TodoList({ initialTodos }: { initialTodos: Todo[] }) {
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    // [!code highlight]
    initialTodos,
    (state, newTodo: Todo) => [...state, newTodo]
  );

  async function addTodoAction(_: State, formData: FormData) {
    const title = formData.get("title") as string;

    // Actualización inmediata en la UI
    addOptimisticTodo({ id: crypto.randomUUID(), title, done: false }); // [!code highlight]

    // Mutación real (el hook revierte si falla)
    await createTodo(title);
    return { error: null };
  }

  const [state, action, isPending] = useActionState(addTodoAction, {
    error: null,
  });

  return (
    <>
      <ul>
        {optimisticTodos.map(todo => (
          <li
            key={todo.id}
            style={{ opacity: todo.id.startsWith("temp") ? 0.5 : 1 }}
          >
            {todo.title}
          </li>
        ))}
      </ul>
      <form action={action}>
        <input name="title" required />
        <button disabled={isPending}>Añadir</button>
      </form>
    </>
  );
}
```

## `use()`: consumir Promises y contexto condicionalmente

```tsx file=user-profile.tsx
import { use, Suspense } from "react";

async function fetchUser(id: string): Promise<User> {
  const res = await fetch(`/api/users/${id}`);
  return res.json();
}

function UserProfile({ userPromise }: { userPromise: Promise<User> }) {
  const user = use(userPromise); // [!code highlight] — puede usarse dentro de condicionales

  return <h1>{user.name}</h1>;
}

// El Suspense boundary cachea y resuelve la promesa
function App() {
  const userPromise = fetchUser("123"); // creada fuera del componente

  return (
    <Suspense fallback={<p>Cargando usuario…</p>}>
      <UserProfile userPromise={userPromise} />
    </Suspense>
  );
}
```

## Server Actions en la práctica

React 19 formaliza las **Server Actions** (funciones marcadas con `"use server"` que se ejecutan en el servidor):

```tsx file=actions.ts
"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";

export async function deletePost(id: string) {
  await db.post.delete({ where: { id } });
  revalidatePath("/posts"); // invalida cache del servidor // [!code highlight]
}
```

```tsx file=post-card.tsx
import { deletePost } from "./actions";

export function PostCard({ post }: { post: Post }) {
  return (
    <article>
      <h2>{post.title}</h2>
      <form action={deletePost.bind(null, post.id)}>
        <button type="submit">Eliminar</button>
      </form>
    </article>
  );
}
```

## Resumen de nuevas APIs

| API              | Reemplaza                                   | Cuándo usar                               |
| ---------------- | ------------------------------------------- | ----------------------------------------- |
| `useActionState` | `useState` + `useReducer` para formularios  | Toda mutación con feedback de UI          |
| `useOptimistic`  | Lógica manual de rollback                   | Updates que mejoran perceived performance |
| `use(promise)`   | `useEffect` + `useState` para data fetching | Componentes que leen promesas en render   |
| `use(context)`   | `useContext`                                | Cuando necesitas leerlo condicionalmente  |
| `ref` como prop  | `forwardRef`                                | Siempre — elimina el wrapper innecesario  |
