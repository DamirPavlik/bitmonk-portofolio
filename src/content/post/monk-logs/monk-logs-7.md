---
title: "Monk Logs 7 (DSA): Arrays"
description: "Arrays"
publishDate: "14 July 2026"
updatedDate: "14 July 2026"
tags: ["dsa", "monklogs", "data structures", "alogirthms"]
---

## Arrays

Most people think they know what an array is. Then they write `const a = []` in JavaScript and call it a day.

Well... you don't. I'm sorry. I know it hurts.

That thing you just made is flexible, resizable, and happily lets you shove whatever type you want into it. A real array does none of that. So let's talk about what an array actually is, underneath all the conveniences your language has been quietly wrapping around it.

## What an array really is

An array is an unbreakable chunk of memory of a fixed size, made up of a certain number of bytes, sitting right next to each other with nothing in between.

Here's the trick that makes it useful: memory itself doesn't know what it's storing. It's just 0s and 1s. It's the compiler that looks at a chunk of that memory and decides how to interpret it. If the compiler sees 4 contiguous bytes and decides "I'm going to treat these as a single number," congratulations, you now have a 32-bit integer.

In a more traditional language, you'd declare that intention explicitly:

```
int a[3];
```

Which really just means: "Give me a slab of memory big enough for three integers, back to back, and let me call it `a`."

## So what happens when you do `a[0]`?

You're not really asking for "the first item." You're telling the computer: go to the memory address that `a` points to, then add an offset of `0` multiplied by the size of my type, because if I wanted position `1` instead, I'd need to skip ahead by a full 4 bytes (assuming 32-bit ints) to land in the right spot.

The formula behind every array access, boiled down, is basically:

```
address = a + (width * offset)
```

That's it. That's the entire trick. No searching, no walking through memory looking for your value, just simple arithmetic that jumps straight to the right address.

I think sitting with this for a second helps you appreciate arrays more. Today we mostly treat them as just "a slot to put data in." But underneath, it's raw memory, a bunch of 0s and 1s that the computer has to translate into something that looks, to us, like a friendly little box holding a number.

## Operations on arrays
- Getting: take the width of the type, multiply by the offset, jump straight to that memory address, and read what's there.
- Insertion: doesn't exist. There is no "inserting" into an array. There is only overwriting what's already in a slot.
- Deletion: works exactly the same way as getting, except instead of reading the value, you're setting it to null (or some equivalent empty state).

Notice the pattern: every single one of these operations reduces to the same formula, `address + width * offset`, plus whatever you do once you arrive.

## Big O

Look closely at that formula again. Nowhere in it do we walk through the array, check every element, or search for anything. We already know exactly where to go, because we know the offset.
Which means the runtime for getting, setting, or "deleting" any element is:

```
O(1)
```

Constant time. No matter how big the array is, reaching into a specific slot costs the exact same amount of work.

## Arrays Are:
- Fixed size: decided once, at creation, and never revisited.
- Not growable: you can't stretch a real array to fit one more item.
- Missing all the conveniences you're used to, no `push`, no `pop`, no `insertAt`. Those are all things higher-level data structures (and language runtimes) bolt on on top of an array, not things arrays give you for free.

So the next time you write `const a = []` and casually `.push()` five things into it, just remember: somewhere underneath all that JavaScript convenience, there's a much stricter, much older idea of what an array actually is, a fixed slab of memory that only knows how to do one thing really, really fast.