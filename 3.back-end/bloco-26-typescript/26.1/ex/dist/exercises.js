"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circle = exports.trapezium = exports.rhombus = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
const greeter = (name) => {
    return `Olá ${name}!`;
};
exports.greeter = greeter;
const personAge = (name, age) => {
    return `${name} tem ${age} anos`;
};
exports.personAge = personAge;
const add = (a, b) => {
    return a + b;
};
exports.add = add;
const sumArray = (numbers) => {
    return numbers.reduce(exports.add, 0);
};
exports.sumArray = sumArray;
const triangle = (base, height) => {
    return (base * height) / 2;
};
exports.triangle = triangle;
const square = (side) => {
    return side ** 2;
};
exports.square = square;
const rectangle = (base, height) => {
    return base * height;
};
exports.rectangle = rectangle;
const rhombus = (majorDiagonal, minorDiagonal) => {
    return (majorDiagonal * minorDiagonal) / 2;
};
exports.rhombus = rhombus;
const trapezium = (majorBase, minorBase, height) => {
    return ((majorBase + minorBase) * height) / 2;
};
exports.trapezium = trapezium;
const circle = (radius) => {
    const PI = 3.14;
    return PI * radius ** 2;
};
exports.circle = circle;
