//Convertir de objetos a matriz
const data = {
  frontend: "Oscar",
  backend: "Isabel",
  design: "Ana"
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//Object Values devuelve los valores de un objeto a un arreglo
const values = Object.values(data);
console.log(values);
console.log(values.length);

//Padding
const string = "Hello";
console.log(string.padStart(8, "hi-"));
console.log(string.padEnd(12, " -----"));
