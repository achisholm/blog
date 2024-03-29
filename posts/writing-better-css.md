---
title: Writing better CSS
date: 2020-12-11
summary: It seems to be an unpopular opinion, but I still love Cascading Stylesheets.
category:
  - CSS
---
Here are a few tips I have learnt for writing better CSS.

If you are a fan of modern paradigms such as 'styled components' or whatever the latest flavour of CSS-in-JS is called, some of these opinions might sound dated.

## 1. Low specificity good

Specificity &mdash; as a word, I find it's hard to pronounce. How a specificity value is calculated as a concept to grasp as a web developer, is even harder.

My way of taming specificity has been to side-step the issue entirely by using selectors with just enough specificity, and no more.

If all declarations have low and equal specificity, you are then in a great position to harness the power of the cascade. By that, I mean adjusting the specificity naturally by means of ordering as a way to override conflicting rules.

## 2. Use the cascade to your advantage

Inheritance and the cascade are features, not bugs. By design, web browsers read the order in which you declare CSS. Source order is one of the most powerful and easily understandable ways for browsers (and also you) to decide what rules should get priority.

This is a sane order in which styles could be layered, ordered with most general first, each layer increasing in specificity with highly-specific rules included last:

* Global, generic
* Base
* UI component-specific
* Page-specific
* Atomic-level, utility

Whether you use a single stylesheet or need to split up stylesheets into separate files, the same rules apply.

Please, don't just tag on changes at the end of your stylesheet. Use source order to help guide where this new feature should exist.

## 3. Set global styles sparingly

As a project scales up over time, the usefulness of global styles tends to diminish. Too often, early decisions (for example, let's make all links green, or let's set all headings to a particular font family, size & weight) won't seem such a fantastic idea when you frequently need to override them.

If possible, just don't style bare HTML elements and you will probably thank yourself later.

## 4. You might not need a reset

If ever confronted with layers of crossed-out rules in Developer Tools inspector, this is a sign that your stylesheets should be simplified.

There was a time where a CSS reset was helpful and in fact necessary to establish some kind of common baseline across browsers. These days, I'd say it's not so necessary. I like to try removing a heavy-handed CSS reset and seeing what breaks, and more often than not, it is surprisingly little.

## 5. Be generous with whitespace

Whitespace is a free documentation tool, especially if you're using a pre-processor.
