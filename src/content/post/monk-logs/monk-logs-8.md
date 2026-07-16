---
title: "Monk Logs 8 (DSA): Linked Lists"
description: "Linked Lists"
publishDate: "16 July 2026"
updatedDate: "16 July 2026"
tags: ["dsa", "monklogs", "data structures", "alogirthms"]
---

## Linked Lists

As I already mentioned in my previous post, `const a = []` isn't an array. There's probably a real array hiding somewhere underneath it, but the thing you're actually holding definitely isn't one, because you can `push`, `pop`, and `insertAt` on it, and none of that is legal in array land.

So what's so bad about a real array, exactly?
- You can't really delete anything. You can only overwrite a slot with something else.
- You can't insert anything either. "Inserting" is really just writing over a slot that's already there.
- It's ungrowable. It's one contiguous block of memory, and that block doesn't stretch.

This is exactly the gap linked lists were built to fill.

## Two flavors

There are two kinds of linked lists:
- Singly linked
- Doubly linked

Both are node-based data structures — meaning instead of one big contiguous slab of memory, you get a bunch of small containers, scattered wherever, connected to each other by pointers instead of proximity.

## Singly linked lists
Picture a chain of values where visiting node `A` also hands you a pointer to the next node, `B`. That's the whole idea:

```
A -> B -> C -> D
```

This is singly linked because the arrow only goes one direction — `A` points to `B`, but `B` has no idea `A` exists. It's a one-way street.

Usually the raw value gets wrapped in a small container so it can carry that pointer along with it. In TypeScript, that container looks roughly like:

```ts
class Node<T> {
  val: T;
  next?: Node<T>;
}
```

You hand me a value `T`, and I wrap a Node around it so it knows how to point at whatever comes next.

One neat side effect of this structure: in JavaScript, if node `A` no longer has anything pointing to it, the garbage collector can tell nothing is reachable and safely collects it — even though `A` itself might still technically be "pointing forward" to `B`. Reachability, not existence, is what keeps something alive.

## Doubly linked lists

Doubly linked lists add one extra property: `prev`.

```ts
class Node<T> {
  val: T;
  next?: Node<T>;
  prev?: Node<T>;
}
```

Now every node points both forward and backward, which gives us bidirectional arrows:

```
A <-> B <-> C <-> D
```

You can walk from `A` to `B`, and just as easily walk back from `B` to `A`. Nice when you need to traverse in either direction, at the cost of one extra pointer per node.

Insertion: faster than it has any right to be

Here's where linked lists really start to shine. Say we want to insert `E` between `A` and `B`:

```
A <-> B <-> C <-> D
      |
      E
```

All we actually have to do is rewire a handful of pointers:

- `A` now points forward to `E` instead of `B`
- `E` points forward to `B`
- `E` points backward to `A`
- `B` now points backward to E instead of `A`

That's it. No shifting every element down one slot like you'd have to in an array — just a small, fixed number of pointer reassignments.

Are any of these steps affected by how many elements are in the list? No. Are they effectively constant time? Yes. (You could nitpick that property lookups in JS or TS carry their own overhead, but let's assume we're working in a more traditional, closer-to-the-metal language.) Writing a value into a fixed memory slot on an object is constant time, full stop.

So insertion into a linked list is `O(1)`

Nothing about the operation scales with the size of the list.

Deletion: same story, different direction.

Say we want to delete `C` from our doubly linked list. The idea is to snip `C` out and reconnect its neighbors directly to each other:

```
D = C.next
B = C.prev
B.next = D
D.prev = B
C.prev = C.next = null
return C.val
```

`B` now points forward straight to `D`, skipping over `C` entirely. `D` points backward to `B` for the same reason. `C` gets its own pointers cleared out so nothing still (wrongly) thinks it's part of the chain, and we hand back its value on the way out.

Big O for deletion

Same story as insertion: nothing in that block of pseudocode depends on how many nodes are in the list, or how large the value being stored is. A fixed number of pointer reassignments, every time.

```
O(1)
```

Which is really the whole pitch for linked lists: where arrays make you shift a wall of elements just to squeeze one more value in, linked lists let you just... point somewhere else instead.