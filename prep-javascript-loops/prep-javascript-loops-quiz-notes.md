# prep-javascript-loops-quiz-notes



## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of the **condition** expression in the `for` and `while` loops?
the purpose of the condition expression is that if the expression evaluates to true, the statement is executed. if it evaluates to false, then the execution stops and exits the loop and goes to the first statement after the for loop

<Ill use this for loop to explain the next section>

<function forLoop1() {
  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push(i);
  } return array;
}
forLoop1();>

- When is the first expression in the parentheses for a `for` loop (known as the **initialization**) evaluated?
the variable declaration once before the loop begins (let i = 0)
sets the variable before the loop starts

- When is the second expression in the parentheses for a `for` loop (known as the **condition**) evaluated?
it defines the condition for executing the loop (i < 10)
the variable i must be less than 10

- When is the third expression in the parentheses for a `for` loop (known as the **final expression**) evaluated?
it is executed every time after the code block is executed (i++)
increases a value each time after the loop is executed

- What is the purpose of the **final expression** in a `for` loop?
it is executed every time after the code block is executed

- What types of data should the `for...in` loop be used on?
It loops through the properties of an Object


## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
```

for HTML:
```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:
```css
div {
  width:100%
}
```
