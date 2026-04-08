---
title: "Monk Logs 2 (DSA): Array"
description: "DSA: Array"
publishDate: "7 April 2026"
updatedDate: "7 April 2026"
tags: ["dsa", "monklogs", "data structures", "alogirthms", "array"]
---

## What is an array?

An array is a contiguous block of memory that stores elements of the same type.

At the lowest level, memory is just raw bytes. It has no meaning on its own — it’s just space. Meaning comes from how we interpret those bytes.

For example:
- 4 bytes → can be interpreted as a 32-bit integer 
- 8 bytes → maybe a 64-bit float

An array is essentially:

> “A sequence of memory laid out back-to-back, where every chunk is interpreted as the same type.”

So if you have an array of int32, the memory might look like:
```
| 4 bytes | 4 bytes | 4 bytes | 4 bytes |
   arr[0]   arr[1]   arr[2]   arr[3]
```

## Getting at index
Accessing an element is where arrays shine.

To get arr[i], the system does:

```
address = base_address + (i * size_of_type)
```

- `base_address` → where the array starts
- `i` → index
- `size_of_type` → width in bytes (e.g. 4 for int32)

Then it jumps directly to that memory location and reads it.

## Insertion at specific index
Inserting an array doesn't exist. It overrides some data, so it just sets that values, you don't get to grow your array. It's basically you take a for example add width of the type (in bytes) multiply by the offset and then write it in.

```
arr[2] = 10;
```

## Deletion at specific index
Deletion same exact thing as inserting. But deletion is quite confusing, you don't just delete something, you can set it to 0, it depends on how your program interprets it.

## Big O
It's constant time, nothing in here goes through the entire array, we know the width we know the offset.

## Takeaways
- They are fixed size.
- That means you can not grow them.
- There is no "insertAt" or push or pop. Doesn't mean you can't write those though.

js doesn't have arrays btw, change my mind.


 

