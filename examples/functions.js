'use strict';

/*
  Function

  The purpose of a function is to transform data.

  It usually takes arguments.
  Those are the input values of your functions.

  It has a body, that will do a bunch of operations using those arguments
  and return the processed result

  There are several ways to write functions

  The "classical" way is to use the function keyword.
  The "modern" way is to use the arrow syntax `=>`.
  Both syntaxes are widely used.

  Functions are magical and allow you to express powerful logic.
  But before doing that, let's try some simple operations using functions.
*/

// You have been using `console.log` since the begining which is a function
// Now let us write a function, the classical way
// We begin with the `function` keyword,
// then indicate the name of the function: sub1
// This one takes a number as an argument: (num),
// and returns that number minus one.
function sub1(num) {
  return num - 1;
}

// In JavaScript, functions are values too!
// We can store a function in a variable. This is called a "function expression".
// This one takes a number as an input, and returns that number plus one.
const add1 = function(num) {
  return num + 1;
};

// Last, another variation: we still store a function in a variable,
// but we write it with the arrow function syntax (introduced in ES6).
// Let's see an exemple with a function that adds 5 to the input argument
const add5 = (num) => num + 5;
// Let's break this last example down
// First we declare the constant variable identified by add5
// and set its value to our freshly made function
// (num) here is our argument
// Then the => tells us this is a function declaration
// and following is the instruction that will be executed
// So here we tell it to use whatever value is given to `num`
// and apply the operator `+` on it with the value 5
// Last, we return the result of this computation
// The `return` keyword doesn't appear here, but there is an implicit return

// ok... so how to use our baby functions?
// Well you've been calling function since the beginning with console.log!
console.log(sub1(11));
console.log(add1(10));
console.log(add5(13));
console.log(add5(20));
console.log(add5(30));
// See those paren `(13)` ?
// they are the mark that the function is called, [] is to access () to call
// (calling a function is synonymous with executing it)
// () between the paren we pass the values of the functions arguments
// So here 13 become the value of `n` for this call, n + 5 become 13 + 5
// and it return the result of the opperation, so 18
// Function can take and return any values

// So what happen if I give a string to add5 ?
console.log(add5('tomato'));
// `n` became 'tomato', so we did 'tomato' + 5, so It converted 5 to a string
// add concatenated them !
// But if you can, it's preferable always give and return the same type
// of values with your functions.
// This way JavaScript can optimise them for you
// and it can make your code more predictible, which is good.
// We don't want to be surprised in programing, the best is the most boring.

// Let's try function that have 2 arguments
// We just have to seperate them by a comma, like values in arrays
const multiply = (a, b) => a * b;
// Same thing to pass 2 arguments when you call the function

console.log(multiply(5, 10));
console.log(multiply(75, 1.5));
console.log(multiply(75, -1.5));

// Of course as functions return values
// We can store theire return values in variables
const resultNumber = multiply(100, 5);

console.log(resultNumber);

// We can use variables as function arguments
console.log(multiply(resultNumber, 15));
console.log(multiply(resultNumber, resultNumber));

// But that's not it we can nest function calls !
console.log(multiply(add5(5), 2));
// So what's happening here is that JavaScript read this line
// and call the functions in order
// but it needs the paren to be closed before the call is executed
// so here the first multiply is read but before the call is over
// another function is call begins, add5 with the value 5.
// now seeing the closing paren, the function is called
// then this whole add5(5) becames it's return value, 10
// JavaScript is now left with mutiply(10, 2), which return 20 !
// Don't worry you will get use to it

// More nesting !!!!
console.log(multiply(multiply(5, add5(5)), multiply(2, add5(10))));
// Try to resolve this one by yourself
// Rest assured, you should rarely stumble upon this level of nesting

// We can call other functions from a function !
// let's use that to create add10 just using add5:
const add10 = n => add5(add5(n));

console.log(add10(10));

// And just like that build up complexity
const op1 = n => add10(multiply(n, add5(n)));

/*

### Exercises proposal

sub5 // substract five to the given argument and return the result
sub // takes 2 arguments and return the substraction of the first from the second
getFirst // return the first element of an array
getSecond // return the second element of an array
getLast // return the last element of an array
over0 // using Math.max, limit numbers to 0
notOver9000 // using Math.min, limit the number to 9000
clamp9000 // clamp the given value between 0 and 9000

*/

