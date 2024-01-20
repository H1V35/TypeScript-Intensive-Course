// ###################################
// --------- TYPE ASSERTIONS ---------
// ###################################

// They are a way of telling the compiler to trust us about the type of a value, even when
// the compiler cannot infer it clearly. They are used when the programmer has more
// information about the type of a value than TypeScript does

const text: any = "Hello world!";
const textLength: number = (text as string).length;

// It is important to be cautious when using type assertions, as it bypasses the compiler's
// type checking and, if not handled properly, can lead to runtime errors. It is advisable
// to use type assertions only when absolutely necessary and when there is confidence that
// the type information is correct

// Example of how NOT to do it:
const canvas = document.querySelector("canvas") as HTMLCanvasElement; // <-- We are forcing it to treat the
//                                                                           element as an HTMLCanvasElement
// It returns 'null' if not found
// 'HTMLElement' if found <-- It is not very specific

const ctx = canvas?.getContext("2d");

// Example of how to do it CORRECTLY
const canvasB = document.querySelector("canvas");

// This is inference --> TypeScript realizes that inside the 'if', the canvas only can be an HTMLCanvasElement
if (canvasB instanceof HTMLCanvasElement) {
  const ctxB = canvasB.getContext("2d");
}

// ** IMPORTANT:
//    typeof      -->   for types (numbers, strings, booleans, ...)
//    instaceof   -->   for instances (dates, HTMLElements, ...)
