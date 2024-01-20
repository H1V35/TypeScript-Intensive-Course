// ##############################
// --------- INTERFACES ---------
// ##############################

// What can be done with interfaces is very similar to 95% of what we have seen so far with type aliases
// Interfaces shape the form our object should have, including its properties and methods

interface Dog {
  id: string;
  name: string;
  age: number;
  givePaw: () => void;
}

const dog: Dog = {
  id: "1",
  name: "Timmy",
  age: 3,
  givePaw: () => {
    console.log("Nice!");
  },
};

// They can also be nested, an interface within an interface, for example:
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

//    ** IMPORTANT: Additionally, we can EXTEND one interface from another
interface Sneaker extends Product {
  size: number;
}

interface ShoppingCart {
  totalPrice: number;
  products: Product[];
}

const cart: ShoppingCart = {
  totalPrice: 100,
  products: [
    {
      id: 1,
      name: "Product 1",
      price: 33,
      quantity: 3,
    },
  ],
};

// Specifying functions in interfaces. It can be done in two ways

// First one (Preferred way):
interface ShoppingCartOps {
  add: (product: Product) => void;
  duplicate: () => void;
}

// Second one
interface ShoppingCartOps {
  remove(id: number): void;
  clear(): void;
}

// One of the differences between interfaces and types is that interfaces
// can be repeated with the same name, and the last one will automatically
// extend the previous one, while in types, duplications are not allowed

// Interfaces, like everything we have seen in TypeScript, disappear when
// compiling to JavaScript
