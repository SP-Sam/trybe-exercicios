export const greeter = (name: string): string => {
  return `Olá ${name}!`;
};

export const personAge = (name: string, age: number): string => {
  return `${name} tem ${age} anos`;
};

export const add = (a: number, b:number): number => {
  return a + b;
};

export const sumArray = (numbers: number[]): number => {
  return numbers.reduce(add, 0);
};

export const triangle = (base: number, height: number): number => {
  return (base * height) / 2;
};

export const square = (side: number): number => {
  return side ** 2;
};

export const rectangle = (base: number, height: number): number => {
  return base * height;
};

export const rhombus = (majorDiagonal: number, minorDiagonal: number): number => {
  return (majorDiagonal * minorDiagonal) / 2;
};

export const trapezium = (majorBase: number, minorBase: number, height: number): number => {
  return ((majorBase + minorBase) * height) / 2;
};

export const circle = (radius: number): number => {
  const PI = 3.14;
  return PI * radius ** 2;
};