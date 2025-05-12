---
title: "Queue - Data Structure"
description: "Let's learn data structure queue"
date: "2025-05-12"
tags:
  - tutorial
  - data-structure
---
[<- Back](/blog/2025-05-12-learn-coding-test)

🚶 Queue follows the **First-In-First-Out (FIFO)** principle.

In real world: **queue = people waiting in line**. <br />
-> <u>First</u> person to <u>arrive</u> is <u>first</u> person <u>served</u>.

Common use case:

- **Task scheduling / job queues** (e.g. print queue, background workers)
- **Breadth-first Search (BFS)** in graphs/trees
- Message queues (RabbitMQ, Kafka, etc.)
- Handling asynchronous events (e.g. in a web server)
- Customer service or help desk systems (first come, first served)

In JavaScript, it can be done with `Array.push` and `Array.shift`.

```js
const queue = [];

queue.push(1); // enqueue
queue.push(2); // enqueue

// => queue: [1, 2]

queue.shift(); // dequeue (1)

// => queue: [2]
```

Can we implement it without using `Array`?

```js
class Queue<TValue> {
  // internal object to store values
  storage = {};
  // index of first element
  front = 0;
  // index of next empty position
  rear = 0;

  enqueue(value: TValue) {
    this.storage[this.rear] = value;
    this.rear++;

    return this.rear;
  }

  dequeue() {
    // early return if queue is empty
    if (this.isEmpty()) return undefined;
    // get current front value, so we can return it
    const value = this.storage[this.front];
    // clean up
    delete this.storage[this.front];
    // move front forward
    this.front++;

    return value;
  }

  size() {
    return this.rear - this.front;
  }

  isEmpty() {
    return this.rear === this.front;
  }
}
```

<details>
<summary>🧪 Unit Test</summary>

```js
const queue = new Queue();

console.log("🧪 Queue Tests");

// Test 1: Should start empty
console.assert(queue.isEmpty() === true, "Queue should start empty");

// Test 2: Enqueue one item
queue.enqueue("X");
console.assert(queue.size() === 1, "Size should be 1");

// Test 3: Enqueue more
queue.enqueue("Y");
queue.enqueue("Z");
console.assert(queue.size() === 3, "Size should be 3 after 3 enqueues");

// Test 4: Dequeue
const firstOut = queue.dequeue();
console.assert(firstOut === "X", "First dequeued should be 'X'");
console.assert(queue.size() === 2, "Size should be 2");

// Test 5: Dequeue remaining
queue.dequeue();
queue.dequeue();
console.assert(queue.isEmpty() === true, "Queue should be empty");
console.assert(queue.dequeue() === undefined, "Dequeue from empty queue returns undefined");

console.log("✅ Queue tests passed!");
```

</details>
