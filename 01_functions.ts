// #############################
// --------- FUNCTIONS ---------
// #############################

// ** Functions do not have inference if they lack context
function greet(name: string) {
  // <-- Parameter 'name' implicitly has an 'any' type, but a better type may be inferred from usage
  console.log(`Hi, ${name}`);
}

greet("John");
// greet(2)   <-- Error. Argument of type 'number' is not assignable to parameter of type 'string'

// We should avoid implicit 'anys' whenever possible

// --------- Typing in functions that receives an object as a parameter. It can be done in two ways

// First one (Preferred way):
function greetAndTellAge({ name, age }: { name: string; age: number }) {
  console.log(`Hi, ${name}, you are ${age} years old`);
}

greetAndTellAge({ name: "John", age: 33 });

// Second one:
function greetAndTellAgeB(person: { name: string; age: number }) {
  const { name, age } = person;
  console.log(`Hi, ${name}, you are ${age} years old`);
}

// ** TypeScript has type inference for the return type, but we can also type the return value of functions
function greetAndTellAgeC({
  name,
  age,
}: {
  name: string;
  age: number;
}): number {
  // In this case, specifying the return type as 'number' can be omitted due to type inference
  console.log(`Hi, ${name}, you are ${age} years old`);
  return age;
}

// --------- Typing in functions that take a callback (another function) as a parameter

const sayHiFromFunction = (fn: (name: string) => void) => {
  // We should avoid typing any function as 'function'
  return fn("John");
};

sayHiFromFunction((name: string) => {
  console.log(`Hi, ${name}`);
});

// --------- Typing in arrow functions. It can be done in two ways

// First one (Preferred way):
const sum = (a: number, b: number): number => {
  return a + b;
};

// Second one:
const subtraction: (a: number, b: number) => number = (a, b) => {
  return a - b;
};

// --------- Typing in functions that never return any value (never)

function throwError(message: string): never {
  throw new Error(message);
}

// --------- Differences between 'never' and 'void'

function logMessage(message: string): void {
  console.log(message);
  // throw new Error(message);    <-- Never would exit the function flow, for example, with this throw.

  // Implicit return;    <-- It doesn't matter -> Void -> It doesn't return anything
}

// --------- Type inference in anonymous functions based on context

const avengers = ["Spiderman", "Ironman", "Hulk"];

avengers.forEach((avenger) => {
  // In this case, autocomplete suggests string-specific methods because TypeScript
  // detects that 'avenger' is a string coming from the array of strings 'avengers'
  console.log(avenger.toLowerCase());
});
