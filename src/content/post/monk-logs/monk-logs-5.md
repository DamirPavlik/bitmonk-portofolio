---
title: "My Love-Hate Relationship with Go"
description: "Go spiritual crisis"
publishDate: "12 July 2026"
updatedDate: "12 July 2026"
tags: ["go", "golang", "shower thoughts"]
pinned: true
---

## Love for GoLang

I've been writing Go for about a year and a half now. No job has ever required it of me, I picked it up on my own, for my own projects, because something about it just clicked. I'm not a "collect every language" kind of person. I like simple things. Simple tools, simple systems, simple code that does what it says. Go was the first language that felt like it was built for people like me.

So when I saw [this issue](https://github.com/golang/go/issues/77273) being closed I felt like I was being betrayed.

## What I'm mad about

The surface-level trigger is small: Go 1.27 is adding generics on method receivers. Up until now, generics only worked on standalone functions, not on methods attached to a struct. Now they'll work everywhere.

Taken alone, this sounds like a nice quality-of-life improvement. My first reaction was, "okay, that's kind of nice" but the problem, isn't the feature. It's what the feature represents.

## "There's Only One Way to Do Anything"

That was always the deal with Go. You'd open a codebase you'd never seen before, written by someone you'd never met, and it would still feel familiar. Same formatter. Same shape of function. Same conventions, everywhere, because the language basically didn't give you room to deviate.

I felt that almost immediately when I started learning it. I'd come from poking around in languages where there were four ways to do the same thing and every tutorial did it a fifth way. Go didn't have that problem. gofmt alone solved half the arguments I used to see in other communities. There was a real comfort in a language that just said: here's the way, do it this way.

The problem with is that generics-on-methods combined with iterators and the broader direction Go's been drifting, quietly kills that. Once you can write a generic Result type with chained transforms, someone will. Once someone does, someone else will write a different one. Now you've got five ways to handle a value that might be an error, scattered across five codebases, and the whole "walk in and feel at home" thing is gone.

## Error Handling
The classic `if err != nil` blocks that everyone jokes about, where you can end up with three lines of actual logic buried under seven lines of error checking.

Honestly? That's one of the things I've come to appreciate rather than resent. When I'm building something on my own, with nobody reviewing my code but me, that explicitness is a guardrail. I know when something can fail, because I have to look it in the eye every time. I don't get to forget about it. It's not elegant, but it's honest, and for a self-taught developer, honest beats clever most days.

Go's maintainers apparently held that line for years, no `try`, no `?` operator, no shortcuts, specifically to protect that uniformity. Which makes it a little strange that they'll defend that hill while quietly opening the door to generics that let people build their own bespoke abstractions around the exact same problem.