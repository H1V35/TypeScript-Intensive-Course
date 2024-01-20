// #########################
// --------- ENUMS ---------
// #########################

// In JavaScript, we could do something like this
const ERROR_TYPES = {
  NOT_FOUND: "notFound",
  UNAUTHORIZED: "unauthorized",
  FORBIDDEN: "forbidden",
};

function showMessage(errorType) {
  if (errorType === ERROR_TYPES.NOT_FOUND) {
    console.log("Resource not found");
  } else if (errorType === ERROR_TYPES.UNAUTHORIZED) {
    console.log("You do not have permission to access");
  } else if (errorType === ERROR_TYPES.FORBIDDEN) {
    console.log("You do not have permission to access");
  }
}

// In TypeScript, it would be best to use Enums

// We can use enums for a finite collection of data
const enum ERROR_TYPES_B { // <-- When transpiling from TypeScript to JavaScript, a lot of code is
  //                              generated, which can be avoided by adding 'const' to the enum
  NOT_FOUND,
  UNAUTHORIZED,
  FORBIDDEN,
}
// What enum does by default is assigning an index to each element of the enumeration
//   NOT_FOUND = 0
//   UNAUTHORIZED = 1
//   FORBIDDEN = 2

// To change the default ID, we can add our own ID to it ourselves:
/**
 * const enum ERROR_TYPES_B {
 *   NOT_FOUND = "notFound",
 *   UNAUTHORIZED = "unauthorized",
 *   FORBIDDEN = "forbidden",
 * }
 */
function showMessageB(errorType: ERROR_TYPES_B) {
  if (errorType === ERROR_TYPES_B.NOT_FOUND) {
    console.log("Resource not found");
  } else if (errorType === ERROR_TYPES_B.UNAUTHORIZED) {
    console.log("You do not have permission to access");
  } else if (errorType === ERROR_TYPES_B.FORBIDDEN) {
    console.log("You do not have permission to access");
  }
}

// Whenever possible, we will use 'const enum' to save code in JavaScript, but the reason
// to use 'const enum' or just 'enum' lies when we are creating a library/component that
// we want to be used outside of our application
