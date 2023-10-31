---
title: Removing Duplicates from an Array in JavaScript
description: JavaScript's Sets, designed for storing unique values, provide an efficient approach to handle duplicates in arrays, ensuring smoother and more optimized code.
head:
  meta:
    - name: 'author'
      content: 'Josué Ayala'
    - name: 'copyright'
      content: '© 2023 josueayala.me'
draft: false
---

```typescript
const array = ['Hello', 'Hello', 2, 3, 'Javascript', 2];
const newArray = [...new Set(array)];

console.log(newArray); // ['Hello', 2, 3, 'Javascript']
```

[comment]: <> (Ver más link de la libreria.)

[comment]: <> (Una vez se haya finalizado la instalación no es necesario agregarlo como complemento en `nuxt.config.js`.)

## Explanation

In this example, we start with an array named `array` containing various data types, including strings and numbers.

To remove duplicates, we create a new Set from the original array using `new Set(array)`. A Set automatically filters out duplicate values, leaving only the unique elements.

We then use the spread operator `([...set])` to convert the Set back into an array and store it in `newArray`.

## Usage

We can create a reusable function, `removeDuplicatesFromArray`, to efficiently remove duplicates from arrays in JavaScript. This function encapsulates the logic for removing duplicates, making it a versatile tool for various array manipulation tasks. Here's how to use it:

```typescript
const removeDuplicatesFromArray = (array) => {
  return [...new Set(array)];
}
```

You can easily eliminate duplicate elements from an array using the `removeDuplicatesFromArray` function. This will help you maintain clean and efficient JavaScript code for your projects, even with simple arrays.

```typescript
const numbers = [1, 2, 3, 1, 2, 4, 5, 4];

// Remove duplicate numbers
const uniqueNumbers = removeDuplicatesFromArray(numbers);

console.log(uniqueNumbers);
// [1, 2, 3, 4, 5]
```

In this example, you can see how the `removeDuplicatesFromArray` function simplifies the removal of duplicate elements from a basic numeric array, resulting in a clean and efficient outcome.
