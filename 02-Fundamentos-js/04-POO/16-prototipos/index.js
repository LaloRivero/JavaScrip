//Se crea un constructor
function persona(nombre, apellido, edad, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.altura = altura;
}
/* Se crean prototipos para las funciones, Esto significa elementos que se añaden a la funcion principal 
y pueden ser llamados por los objetos */
const MAX_ALTURA = 1.8;
const MAX_EDAD = 18;
persona.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}
persona.prototype.esAlto = function () {
  if (this.altura >= MAX_ALTURA) {
    console.log(`Soy alto, mi altura es ${this.altura}`);
  } else {
    console.log(`No soy alto, mi altura es ${this.altura}`);
  }
}
persona.prototype.esMayorDeEdad = function () {
  if (this.edad >= MAX_EDAD) {
    console.log(`Soy mayor de edad`);
  } else {
    console.log(`Soy menor de edad`);
  }
}
//Se llama al constructor, y se crean los nuevos objetos
var joan = new persona('Joan', 'Glaber', 18, 1.72);
var valery = new persona('Valery', 'Smith', 16, 1.57);
var jimmy = new persona('Jimmy', 'Miller', 21, 1.74);
var sophia = new persona('Sophia', 'Jones', 23, 1.75);
var arrPersonas = [joan, valery, jimmy, sophia];
console.log(arrPersonas);
