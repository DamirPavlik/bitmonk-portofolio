---
title: "Monk Logs 5 (DSA): Bubble Sort"
description: "Bubble Sort Algorithm"
publishDate: "13 July 2026"
updatedDate: "13 July 2026"
tags: ["dsa", "monklogs", "data structures", "alogirthms"]
---

## Bubble Sort

Picture this: you're on a plane, things are going sideways, and the flight attendant sprints down the aisle shouting "Quick, we need someone who can write a sorting algorithm or this plane is going down!"

You stand up. You write bubble sort. The plane lands safely.

That's the whole pitch for bubble sort. It's not the fastest, it's not the cleverest, but it's the one you can write from memory while your hands are shaking, because the idea behind it really is that simple.

## What does "sorted" even mean?

Before we bubble anything, let's get mathy for one second. A sorted array is just one that satisfies this rule for every position:
```
X[i] <= X[i+1]
```
Every element is less than or equal to the one after it. That's it. That's the entire mathematical definition of "sorted." Everything else is just a strategy for making that true.

## The strategy

Bubble sort's strategy is almost embarrassingly straightforward: walk through the array, and any time you find two neighbors standing in the wrong order, swap them.

Do one full pass like that, and something nice falls out for free: the biggest item is guaranteed to end up at the very end of the array. Think about it, as you walk left to right swapping out-of-order neighbors, the largest value you've seen so far keeps getting carried along with you, getting swapped forward every time it meets something smaller, until it has nowhere left to go but the last slot.

Which means on your next pass, you don't need to check that last slot anymore, it's already correct, permanently. So you sort the rest, the second-biggest bubbles up into the second-to-last spot, and you shrink your working window by one again.

Keep doing that, and eventually you'll be down to just one position left to check. At that point, the whole array is sorted, there's nowhere left for anything to bubble to.

## Pseudocode

```
function bubbleSort(arr):
    n = length(arr)
    for i from 0 to n - 1:
        for j from 0 to n - i - 2:
            if arr[j] > arr[j+1]:
                swap(arr[j], arr[j+1])
    return arr
```

Each outer pass shrinks the "unsorted zone" by one, because we already know the tail end is locked in from the pass before.


## The Big O

Let's count the work. On the first pass we compare `n-1` pairs. Second pass, `n-2`. Then `n-3`, and so on, all the way down to 1. Add all that up and you get the classic sum:
```
n(n-1)/2
```

which is really just a friendlier way of writing:

```
(n^2 - n) / 2
```

Expand it out and you get `n^2/2 - n/2`. Now do what Big O always asks of us, drop the constants (that `/2`), and drop the lower-order term (that `-n`, which barely matters once `n` gets big), and you're left staring at:

```
O(n^2)
```

Quadratic time. It's not going to win any races against merge sort or quicksort on a large dataset. But it doesn't need to. Bubble sort's job was never to be fast — it was to be the algorithm simple enough to survive a moment of panic, a whiteboard interview, or a plane emergency, and still come out correct on the other side.