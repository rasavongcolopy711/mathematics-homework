// Math homework
function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let num1 = getRandomNumber(0, 10);
let num2 = getRandomNumber(0, 10);
let sum = num1 + num2;
console.log(`${num1} + ${num2} = ${sum}`);
