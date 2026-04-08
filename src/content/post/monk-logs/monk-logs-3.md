---
title: "Monk Logs 3 (DSA): Linear Search"
description: "Linear Search Algorithm"
publishDate: "8 April 2026"
updatedDate: "8 April 2026"
tags: ["dsa", "monklogs", "data structures", "alogirthms"]
---

## Linear Search

Linear search is the most straightforward searching algorithm, it works by scanning each element in a collection one by one until it finds the target value (the “needle”) or reaches the end.

Imagine you have an array indexed from `0` to `n - 1`. The algorithm starts at index 0 and compares each element to the value you're looking for:

- “Is this the needle?”
- If yes → return the index immediately
- If no → move to the next element
- Repeat until found or array ends

If the algorithm reaches the end without finding the value, it returns something like `-1` (just like `indexOf` in JavaScript).

## Example
```js title="linear-search.ts"
function linearSearch(arr: number[], needle: number): number {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === needle) {
			return i;
		}
	}
	return -1;
}
```

## Big O
This is where it gets interesting.
- Best case → O(1)
  - The value is at index 0 → you find it instantly.
- Worst case → O(n)
  - The value is at the end OR not in the array → you check every element.
- Average case → O(n)
  - On average, you’ll scan about half the array.

## Mental Model
Think of it like searching for a name in an unsorted notebook:

You flip page by page until you find it.
No shortcuts. No skipping.