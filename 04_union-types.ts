// ###############################
// --------- UNION TYPES ---------
// ###############################

type HeroId = `${string}-${string}-${string}-${string}-${string}`;

// It's not just a type; it's a specific type. In this case, powerscale is of the type of one of the following strings
type HeroPowerScale =
  | "local"
  | "planetary"
  | "galactic"
  | "universal"
  | "multiversal";

type Hero = {
  readonly id?: HeroId;
  name: string;
  age: number;
  isActive?: boolean;
  powerScale?: HeroPowerScale;
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

// Once the property is defined with the corresponding type, it will only
// be possible to assign a value from the set of types it belongs to
ironman.powerScale = "local";
