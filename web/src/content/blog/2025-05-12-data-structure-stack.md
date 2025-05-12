---
title: "Stack - Data Structure
description: "Let's learn data structure stack"
date: "2025-05-12"
tags:
  - tutorial
  - data-structure
---
[<- Back](/blog/2025-05-12-learn-coding-test)

📚 Stack follows the **Last-In-First-Out (LIFO)** principle.

In real world: **stack = plates**. <br />
-> Only <u>take</u> a plate <u>from top</u>. <br />
-> Only <u>add</u> a new plate <u>on top</u>.

Common use case:

- **Undo/Redo stacks** in applications
- **Call stack** in programming languages / recursion
- **Balanced parentheses**, expression parsing
- **Backtracking** (mazes, algorithms like DFS)
- Navigation history (e.g. browser back button)
- Evaluating Reverse Polish Notation (RPN)

---

In JavaScript, it can be done with `Array.push` and `Array.pop`.

```js
const stack = [];

stack.push("A");
stack.push("B");

// => stack: ["A", "B"]

stack.pop();

// => stack: ["A"]
```

Can we implement it without using `Array`?

```js
class Stack<TValue> {
  // internal object to store values
  storage = {};

  // tracks current top index (a.k.a length)
  length = 0;

  push(value: TValue) {
    this.storage[this.length] = value;
    // move top pointer forward
    this.length++;

    return this.length;
  }

  pop() {
    // early return if stack is empty
    if (this.isEmpty()) return undefined;
    // move pointer back
    this.length--;
    // get current top value, so we can return it
    const value = this.storage[this.length];
    // clean up
    delete this.storage[this.length];

    return value;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }
}
```

<details>
<summary>🧪 Unit Test</summary>

```js
const stack = new Stack(); // [];
console.log("🧪 Stack Tests");

// Test 1: Stack should be empty at first
console.assert(stack.length === 0, "Stack should start empty");

// Test 2: Push one item
stack.push("A");
console.assert(stack.length === 1, "Size should be 1");

// Test 3: Push another item
stack.push("B");
console.assert(stack.length === 2, "Size should be 2");

// Test 4: Pop item
stack.pop();
console.assert(stack.length === 1, "Size should be 1 after pop");

// Test 5: Pop last item
stack.pop();
console.assert(stack.length === 0, "Stack should be empty again");

console.log("✅ Stack tests passed!");
```

</details>
