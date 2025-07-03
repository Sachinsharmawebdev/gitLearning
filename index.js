const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const modulus = (a, b) => a % b;
const exponentiate = (a, b) => a ** b;
const squareRoot = (a) => Math.sqrt(a);
const absolute = (a) => Math.abs(a);
const negate = (a) => -a;
const increment = (a) => a + 1;
const decrement = (a) => a - 1;

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    modulus,
    exponentiate,
    squareRoot,
    absolute,
    negate,
    increment,
    decrement
};