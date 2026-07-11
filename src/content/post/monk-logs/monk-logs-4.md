---
title: "Monk Logs 4 (DSA): Binary Search"
description: "Binary Search Algorithm"
publishDate: "11 July 2026"
updatedDate: "11 July 2026"
tags: ["dsa", "monklogs", "data structures", "alogirthms"]
---

## Binary Search

If off-by-one errors had a hometown, binary search would be the mayor's house. It's the most classic "am I one index too far?" problem in the entire universe of computer science, and every developer eventually has their own little rite of passage with it.
But before we even think about splitting anything in half, there's one question we have to ask first.

If the algorithm reaches the end without finding the value, it returns something like `-1` (just like `indexOf` in JavaScript).

## If we know it's ordered

This is the whole ballgame. If we know our data is ordered, we're allowed to make assumptions about it and assumptions are where the speed comes from.
Let's try a naive idea first: what if we just jump ahead by, say, 10% at a time?

- We jump the first 10% and peek at the value.
- Turns out `X` is smaller than what we're looking at.
- So we jump another 10% forward.
- Now `X` is larger than the value we land on.
- Whoops, better walk back 10% and linear search that little slice.

Cute idea. Except ask yourself: what's the worst case here? It's the scenario where our target lives right at the very end of the array, and we spend the whole time hopping across it in 10% increments before we even get to search anything.

## So what's the runtime, really?
Here's the sneaky part. We used n inside our jumping logic, 10% of n per jump. That means our total work looks like:

```
10 jumps + 0.1n
```

And since we always drop the constants when talking Big O, that collapses right back down to O(n).

Practically speaking, this is faster than a plain linear search, fewer comparisons, less wandering. But theoretically speaking, it doesn't scale. Go from 100 elements to 1,000,000, and your "smart" 10%-jumping algorithm slows down right along with it, linearly, same as before. You didn't actually escape the linear tax, you just got a small discount.


## What if we jumped differently?
Here's the better idea: instead of nibbling 10% at a time, what if we just split the array in half? And then half of that half. And half of that. Forever, until there's nothing left to halve and we land on our value.
Let's say we start with an array of size N:

- We halve it → `N/2`
- We halve it again → `N/4`
- We halve it again → `N/8`
- ...and we keep going until `N / 2^k = 1`

Solve that little equation, multiply both sides by 2^k, and you get:

```
N = 2^k
```

Take the log of both sides:

```
log2(N) = k
```

And there it is: O(log N). That's the whole magic trick. Every halving step throws away half the remaining problem, so instead of walking through the haystack, you're folding it in on itself again and again until only the needle is left.


## About that name though...

This is why it's called binary search, at each step you're choosing one of two directions, 0 or 1, left half or right half.

Although, honestly? I'd argue it deserves a rebrand to trinary search. Because at every step there isn't just "go left" or "go right", there's also a very real third option: you land directly on the value in the middle and you're done. ;)

## Pseudocode
Here's the implementation, off-by-one traps and all carefully defused:

```
function search(arr, low, high, needle):
    while (low < high):
        mid = low + (high - low) / 2
        value = arr[mid]

        if (value === needle):
            return true
        else if (value < needle):
            low = mid + 1
        else:
            high = mid

    return false
```

The `low + (high - low) / 2` trick instead of `(low + high) / 2` isn't just stylistic, it protects you from integer overflow when low and high are both large. Small detail, big difference when your array gets astronomically sized.

And that's binary search: an algorithm so elegant it collapses a million-element haystack into about twenty comparisons, as long as you trust the order, and you don't fumble the off-by-one on the way down.