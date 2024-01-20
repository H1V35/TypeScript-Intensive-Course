// ########################################
// --------- TEMPLATE UNION TYPES ---------
// ########################################

// We create a type to use it within other types
type HeroId = `${string}-${string}-${string}-${string}-${string}`;

type Hero = {
  readonly id?: HeroId;
  name: string;
  age: number;
  isActive?: boolean;
};

function createHero(hero: Hero): Hero {
  const { name, age } = hero;
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true,
  };
}

const ironman = createHero({ name: "Ironman", age: 33 });

// Practical example
type HexadecimalColor = `#${string}`;

const color: HexadecimalColor = "#0033ff";
// const color2: HexadecimalColor = "0033ff";   <-- Type '"0033ff"' is not assignable to type '`#${string}`'

// ** IMPORTANT:  Type validations are not effective at RUNTIME, they are only effective at COMPILE time.
//                TypeScript is not meant for user input validations
