var dude1 = { nombre: 'John', altura: 1.73 }
var dude2 = { nombre: 'Rom', altura: 1.85 }
var dude3 = { nombre: 'Jimy', altura: 1.92 }
var dude4 = { nombre: 'Ivan', altura: 1.81 }
var dude5 = { nombre: 'Max', altura: 1.64 }
var dude6 = { nombre: 'Allan', altura: 1.71 }
const esBaja = persona => persona.altura < 1.8;
var personas = [dude1, dude2, dude3, dude4, dude5, dude6];
var personasBajas = personas.filter(esBaja);
console.log(personasBajas);