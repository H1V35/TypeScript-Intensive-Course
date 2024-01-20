// #################################
// --------- TYPE INDEXING ---------
// #################################

type HeroProperties = {
  isActive?: boolean;
  addres: {
    planet: string;
    city: string;
  };
};

// We can leverage a broader type to access types within it.
// Allows using parts of existing types
const addresHero: HeroProperties["addres"] = {
  planet: "Earth",
  city: "Madrid",
};
