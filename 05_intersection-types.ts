// ######################################
// --------- INTERSECTION TYPES ---------
// ######################################

// To extend types, we have intersection types
type HeroId = `${string}-${string}-${string}-${string}-${string}`;
type HeroPowerScale =
  | "local"
  | "planetary"
  | "galactic"
  | "universal"
  | "multiversal";

type HeroBasicInfo = {
  readonly id?: HeroId;
  name: string;
  age: number;
};

type HeroProperties = {
  isActive?: boolean;
  powerScale?: HeroPowerScale;
};

// To create a type, we are using the union of two types
type Hero = HeroBasicInfo & HeroProperties;

// It is no longer necessary for the parameter we are passing to the function to have such a broad type
function createHero(input: HeroBasicInfo): Hero {
  const { name, age } = input;
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true,
  };
}

const ironman = createHero({ name: "Ironman", age: 33 });
ironman.powerScale = "multiversal";
