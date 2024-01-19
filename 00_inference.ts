// #############################
// --------- INFERENCE ---------
// #############################

// TypeScript infers that 'a' and 'b' are numbers without the need to specify it
const a = 1;
const b = 2;

// 'c' will also be a number
const c = a + b;

let text = "Hello";

// Having inferred that 'text' is a string, it automatically suggests methods specific to strings
text.toLocaleLowerCase();

// text = 2   <-- Error. Type 'number' is not assignable to type 'string'
