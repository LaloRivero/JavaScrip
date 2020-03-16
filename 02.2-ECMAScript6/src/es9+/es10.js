let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2));

let array2 = [1, 2, 3, 4, 5];

console.log(array2.flatMap(value => [value, value * 2]));

let hello = "                   Hello World!                  ";
console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());

let entries = [
  ["name", "Oscar"],
  ["age", 32]
];
console.log(Object.fromEntries(entries));
