// ##############################
// --------- TYPE NEVER ---------
// ##############################

function fn(x: number | string) {
  if (typeof x === "number") {
    // x is a number
    x.toFixed(2);
  } else if (typeof x === "string") {
    // x is a string
    x.toUpperCase();
  } else {
    x; // <-- x is never - According to the specified types,
    //                     it should never reach here
  }
}
