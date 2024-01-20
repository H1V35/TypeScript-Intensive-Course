// #########################################
// --------- INSTANCE OF & CLASSES ---------
// #########################################

// There are interesting things we can do with properties in TypeScript
// readonly - private - protected - public (default)

// We can type a class in the following way
class Avenger {
  readonly name: string;
  private powerScore: number;
  wonBattles: number = 0;

  constructor(name: string, powerScore: number) {
    this.name = name;
    this.powerScore = powerScore;
  }

  get fullName() {
    return `${this.name}, with power ${this.powerScore}`;
  }

  set power(newPower: number) {
    if (newPower <= 10000) {
      this.powerScore = newPower;
    } else {
      throw new Error("Power score cannot be more than 10000");
    }
  }
}

const avenger = new Avenger("Ironman", 3000);

// readonly   --> To make it immutable at compile time
// private    --> The property can only be accessed within the class
//                ** In JavaScript, the equivalent is '#'
// protected  --> It is similar to private, but it can also be accessed from
//                classes that inherit from the parent class
// public     --> Default

// For classes, we can also use interfaces
interface AvengerB {
  name: string;
  powerScore: number;
  wonBattles: number;
  age: number;
}

// The interface and the implementation part would be separate like this
class AvengerB implements AvengerB {
  constructor(name: string, powerScore: number) {
    this.name = name;
    this.powerScore = powerScore;
  }

  get fullName() {
    return `${this.name}, with power ${this.powerScore}`;
  }

  set power(newPower: number) {
    if (newPower <= 10000) {
      this.powerScore = newPower;
    } else {
      throw new Error("Power score cannot be more than 10000");
    }
  }
}

const avengerB = new AvengerB("Ironman", 3000);

// It is good practice to have interfaces and types in another
// file, 'types.d.ts', from where to export them
// Adding '.d' is a convention for definitions
