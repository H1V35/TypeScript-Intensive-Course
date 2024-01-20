// ##########################################
// --------- NARROWING & TYPE GUARD ---------
// ##########################################

// Narrowing is like creating a funnel to ensure that you narrow down the types
// you don't want to control at a specific point

function showLength(element: number | string) {
  // 'element' here can be either number or string
  if (typeof element === "string") {
    return element.length; // <-- while here it is strictly string
  }

  return element.toString().length;
}

// Another example with interfaces and type guards
interface Mario {
  name: string;
  jump: () => void;
}

interface Sonic {
  name: string;
  run: () => void;
}

type Character = Mario | Sonic;

// Type Guard --> We check if the character is Sonic
function checkIsSonic(character: Character): character is Sonic {
  // This function determines whether it is Sonic or not
  return (character as Sonic).run !== undefined;
}

function play(character: Character) {
  if (checkIsSonic(character)) {
    character.run();
  }
}

// Whenever possible, we should avoid type guards
