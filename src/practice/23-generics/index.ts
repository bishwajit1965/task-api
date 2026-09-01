function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}

const numbers = [10, 20, 30];
const names = ["TypeScript", "Express", "MongoDB"];

const firstNumber = getFirst(numbers);
const firstName = getFirst(names);

console.log("First number:", firstNumber);
console.log("First name:", firstName);


