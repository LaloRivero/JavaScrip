//Arrow Functions, Promesas y Parametros en objetos

//Manejo de Objetos
let name = "Oscar";
let age = 32;
//es5
obj = { name: name, age: age };
//es6
obj2 = { name, age };
console.log(obj2);

//Arrow Functions
//Mejoras, sintaxis mas reducida y un this no vinculable

let names = [
  { name: "Oscar", age: 32 },
  { name: "Jessica", age: 27 }
];
//es5
let listOfNames = names.map(function(item) {
  console.log(item.name);
});
//es6
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
  //...código
};

let listOfNames4 = name => {
  //... código
};

let square = num => num * num;

//Promesas

let helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("Hey!, Todo bien");
    } else {
      reject("Error");
    }
  });
};

helloPromise()
  .then(response => console.log(response))
  .then(() => console.log("esto se hizo despues de la respuesta"))
  .catch(error => console.log(error));
