---
title: "Monk Logs 2 (DSA): Array"
description: "DSA: Array"
publishDate: "6 April 2026"
updatedDate: "6 April 2025"
tags: ["dsa", "monklogs", "data structures", "alogirthms", "array", ""]
---

## What is an array?

An array is basically just data stored in one continuos block of memory, which contains a certain amount of bytes.
When a compiler sees a chunk of memory it says "well these 4 bytes of memory will be treated as a singular number (32 bit number)" just because it takes space doesn't mean that the memory means something until you give it a meaning. So array is basically  big long version of this, where you have 0 or more peaces of memory that are understood as a single type in a row.

## Getting at specific index
It takes the width of the type multiplies by the offset, puts it in an address goes in and grabs that

## Insertion at specific index
Inserting an array doesn't exist. It overrides some data, so it just sets that values, you don't get to grow your array. It's basically you take `a` for example add width of the type (in bytes) multiply by the offset and then write it in. 

## Deletion at specific index
Deletion same exact thing as inserting. But deletion is quite confusing, you don't just delete something, you can set it to 0, it depends on how your program interprets it

## Big O
It's constant time, nothing in here goes through the entire array, we know the width we know the offset

## take away
- They are fixed size, coniniguous memory chunks
- That means you can not grow them
- There is no "insertAt" or push or pop. Doesn't mean you can't write those though.


 

