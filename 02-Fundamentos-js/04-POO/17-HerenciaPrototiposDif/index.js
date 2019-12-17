//Funcion de herencia
function heredaDe(protoHijo, protoPadre) {
  var fn = function () { }
  fn.prototype = protoPadre.prototype;
  protoHijo.prototype = new fn;
  protoHijo.prototype.constructor = protoHijo;
}
//Se crea un constructor
function persona(nombre, apellido, edad, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.altura = altura;
}
function desarrollador(nombre, apellido, edad, altura) {
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
//Se manda llamar la funcion de herencia de prototipos
heredaDe(desarrollador, persona);
//Prototipo de desarrollador
desarrollador.prototype.saludar = function () {
  console.log(`Hola mi nombre es ${this.nombre} ${this.apellido} y soy Desarrollador/a`);
}
//Se llama al constructor, y se crean los nuevos objetos
var joan = new persona('Joan', 'Glaber', 18, 1.72);
var valery = new persona('Valery', 'Smith', 16, 1.57);
var jimmy = new desarrollador('Jimmy', 'Miller', 21, 1.74);
var sophia = new desarrollador('Sophia', 'Jones', 23, 1.75);

