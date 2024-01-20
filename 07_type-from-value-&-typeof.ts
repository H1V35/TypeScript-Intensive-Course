// ############################################
// --------- TYPE FROM VALUE & TYPEOF ---------
// ############################################

const address = {
  planet: "Earth",
  city: "Madrid",
};

// We can create a type based on a constant
type Address = typeof address;

const addressReact: Address = {
  planet: "Mars",
  city: "React",
};

// Type from fuction return example
function createAddress() {
  return {
    planet: "Tierra",
    city: "Madrid",
  };
}

// We have a utility called ReturnType, which is used to retrieve the type of what the function returns
type AddressB = ReturnType<typeof createAddress>;
