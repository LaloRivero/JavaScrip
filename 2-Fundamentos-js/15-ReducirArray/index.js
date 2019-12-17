var dude1 = { nombre: 'John', altura: 1.73, dinero: 250 }
var dude2 = { nombre: 'Rom', altura: 1.85, dinero: 100 }
var dude3 = { nombre: 'Jimy', altura: 1.92, dinero: 2250 }
var dude4 = { nombre: 'Ivan', altura: 1.81, dinero: 199 }
var dude5 = { nombre: 'Max', altura: 1.64, dinero: 326 }
var dude6 = { nombre: 'Allan', altura: 1.71, dinero: 784 }
var personas = [dude1, dude2, dude3, dude4, dude5, dude6];
/* 
const pasarAlturaCms = personas => {
  return {
    ...personas,
    altura: persona.altura *= 100
  }
} o mas resumido a continuacion*/
const pasarAlturaCms = personas => ({
  ...personas,
  altura: personas.altura * 100
})
var personasCms = personas.map(pasarAlturaCms);
console.log(personas);
console.log(personasCms);
//Reducir un arreglo, en este caso suma el total de dinero de los objetos
const reducer = (acum, { dinero }) => acum + dinero;
var totalDinero = personas.reduce(reducer, 0);
console.log(`El dinero total es ${totalDinero}`);