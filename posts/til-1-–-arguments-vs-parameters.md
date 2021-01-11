---
title: "TIL #1 – Arguments Vs Parameters"
category:
  - TIL
date: 2020-12-16T20:37:39.560Z
---
Arguments and parameters are often confused and referred to interchangeably. They are two very different things.

I'll try to make the distinction. A parameter is a variable defined inside the function and  is used to reference an argument once it has been passed in to the function. An argument is a value that is declared when you call a function.

To understand the difference consider this very simple example function and its usage:

```javascript
function sum(param1, param2) {
  return param1 + param2;
}

sum(10, 20);
```

In this function, **param1** and **param2** are function parameters, and the values passed to the function (**10** and **20**) are arguments.