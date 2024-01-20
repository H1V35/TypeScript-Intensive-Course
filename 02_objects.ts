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
