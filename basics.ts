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
