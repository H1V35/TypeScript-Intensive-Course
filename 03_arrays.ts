// ##########################
// --------- ARRAYS ---------
// ##########################

// const languages = [];    <-- In this case, due to type inference, it's detecting
//                              that we want an always-empty array (never[])

// To declare correctly that we want an array of strings, it can be done in two ways:
// First one (Preferred way):
const languages: string[] = [];

languages.push("JavaScript");
languages.push("C");
languages.push("Python");

// languages.push(3);   <-- With another type of value, an error occurs

// Second one:
const languagesB: Array<string> = [];

// If we want an array of two data types, we would do it like this:
const lettersAndNumbers: (string | number)[] = [];

// We can have an array of any data type, even custom types that we define beforehand

// --------- Bidimensional Arrays

/*
[
  ['X', 'O', 'X']   <-- type string[]
  ['O', 'X', 'O']   <-- type string[]
  ['X', '', 'O']    <-- type string[]
]
*/

type CellValue = "X" | "O" | "";

// A tuple is an array with a fixed length limit
type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
];

const gameBoard: GameBoard = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "", "O"],
];

// Tuple React example
type State = [string, (newName: string) => void];

// Here we have a tuple because useState() always returns an array of two positions
const [villain, setVillain]: State = useState("Thanos");

// Tuple RGB codes example
type RGB = [number, number, number];

const rgb: RGB = [255, 255, 0]; // <-- Numbers from 0 to 255
