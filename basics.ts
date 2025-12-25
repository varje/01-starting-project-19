let age = 24;

let userName: string;
userName = 'Max';

let isInstructor: boolean;
isInstructor = true;

let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

type Person = { name: string; age: number };
let person: Person;
person = {
  name: 'Max',
  age: 32,
};

let people: Person[];
people = [person];

let course: string | number = 'React - The Complete Guide';
course = 123;

function add(a: number, b: number) {
  return a + b;
}

function output(value: any) {
  console.log(value);
}

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');
