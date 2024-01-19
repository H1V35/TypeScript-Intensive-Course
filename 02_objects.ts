// ###########################
// --------- OBJECTS ---------
// ###########################

// Objects have type inference

let username = {
  name: "John",
  age: 33,
};

// --------- Type Alias **IMPORTANT

type Hero = {
  // When creating custom types, it is done in PascalCase
  name: string;
  age: number;
};

// We define a hero object of type Hero
let hero: Hero = {
  name: "Ironman",
  age: 33,
};

// In this function, we expect it to return an object of type Hero
function createHero(name: string, age: number): Hero {
  return { name, age };
}

// And now, when using the createHero function for ironman, ironman has the type Hero
const ironman = createHero("Ironman", 33);

// We can also change the parameters of the createHero function since we
// expect it to create an object with the same properties as the Hero type

function createHeroB(hero: Hero): Hero {
  // We need to destructure the object received as a parameter
  const { name, age } = hero;
  return { name, age };
}

// And to use the function createHeroB, we must pass an object as an argument this time
const ironmanB = createHeroB({ name: "Ironman", age: 33 });

// --------- Optional properties

type HeroC = {
  name: string;
  age: number;
  // By adding '?', we define a property as optional
  isActive?: boolean;
};

function createHeroC(heroC: HeroC): HeroC {
  const { name, age } = heroC;
  return { name, age };
}

const ironmanC = createHeroC({ name: "IronmanC", age: 33 });

// When using an optional property of the object, TypeScript automatically detects that it is optional
// and adds '?' in case the object does not have that property to avoid executing the following method
ironmanC.isActive?.valueOf();

// --------- Mutability

type HeroD = {
  // By adding 'readonly,' the affected property of the object cannot be modified, but this doesn't
  // guarantee it's completely immutable; it only provides a warning at development time
  readonly id: number;
  name: string;
  age: number;
  isActive?: boolean;
};

function createHeroD(heroD: HeroD): HeroD {
  const { id, name, age } = heroD;
  return { id, name, age };
}

// To make an object truly immutable, we must use Object.freeze() so that it cannot be modified at runtime
const ironmanD = Object.freeze(
  createHeroD({ id: 33, name: "IronmanD", age: 33 })
);

// --------- Template union types

// We create a type to use it within other types
type HeroEId = `${string}-${string}-${string}-${string}-${string}`;

type HeroE = {
  readonly id?: HeroEId;
  name: string;
  age: number;
  isActive?: boolean;
};

function createHeroE(heroE: HeroE): HeroE {
  const { name, age } = heroE;
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true,
  };
}

const ironmanE = createHeroE({ name: "IronmanE", age: 33 });

// Practical example
type HexadecimalColor = `#${string}`;

const color: HexadecimalColor = "#0033ff";
// const color2: HexadecimalColor = "0033ff";   <-- Type '"0033ff"' is not assignable to type '`#${string}`'

// ** IMPORTANT:  Type validations are not effective at RUNTIME, they are only effective at COMPILE time.
//                TypeScript is not meant for user input validations

// --------- Union types

type HeroFId = `${string}-${string}-${string}-${string}-${string}`;

// It's not just a type; it's a specific type. In this case, powerscale is of the type of one of the following strings
type HeroFPowerScale =
  | "local"
  | "planetary"
  | "galactic"
  | "universal"
  | "multiversal";

type HeroF = {
  readonly id?: HeroFId;
  name: string;
  age: number;
  isActive?: boolean;
  powerScale?: HeroFPowerScale;
};

function createHeroF(heroF: HeroF): HeroF {
  const { name, age } = heroF;
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true,
  };
}

const ironmanF = createHeroF({ name: "IronmanF", age: 33 });

// Once the property is defined with the corresponding type, it will only
// be possible to assign a value from the set of types it belongs to
ironmanF.powerScale = "local";

// --------- Intersection types

// To extend types, we have intersection types
type HeroGId = `${string}-${string}-${string}-${string}-${string}`;
type HeroGPowerScale =
  | "local"
  | "planetary"
  | "galactic"
  | "universal"
  | "multiversal";

type HeroBasicInfoG = {
  readonly id?: HeroGId;
  name: string;
  age: number;
};

type HeroPropertiesG = {
  isActive?: boolean;
  powerScale?: HeroGPowerScale;
};

// To create a type, we are using the union of two types
type HeroG = HeroBasicInfoG & HeroPropertiesG;

// It is no longer necessary for the parameter we are passing to the function to have such a broad type
function createHeroG(input: HeroBasicInfoG): HeroG {
  const { name, age } = input;
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true,
  };
}

const ironmanG = createHeroG({ name: "IronmanG", age: 33 });
ironmanG.powerScale = "multiversal";

// --------- Type indexing

type HeroPropertiesH = {
  isActive?: boolean;
  addres: {
    planet: string;
    city: string;
  };
};

// We can leverage a broader type to access types within it.
// Allows using parts of existing types
const addresHeroH: HeroPropertiesH["addres"] = {
  planet: "Earth",
  city: "Madrid",
};

// --------- Type from value & typeof

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
