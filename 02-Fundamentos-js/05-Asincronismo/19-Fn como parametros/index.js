const MAX_ALTURA = 1.8;
const MAX_EDAD = 18;
//Aunque se crea como clase es un constructor
class persona {
  constructor(nombre, apellido, edad, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.altura = altura;
  }
  saludar(fn) {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
    //Si se manda una funcion como parametro si se manda es true, de lo contrario es undefined -> false
    if (fn) {
      //Para el parametro esDev se puede contestar con false o ser omitido que es equivalente
      fn(this.nombre, this.apellido);
    }
  }
  esAlto() {
    if (this.altura >= MAX_ALTURA) {
      console.log(`Soy alto, mi altura es ${this.altura}`);
    } else {
      console.log(`No soy alto, mi altura es ${this.altura}`);
    }
  }
  esMayorDeEdad() {
    if (this.edad >= MAX_EDAD) {
      console.log(`Soy mayor de edad`);
    } else {
      console.log(`Soy menor de edad`);
    }
  }
}
class desarrollador extends persona {
  //Se heredan los datos de la clase persona
  constructor(nombre, apellido, edad, altura) {
    //Se tiene que mandar llamar a super antes de this.
    super(nombre, apellido, edad, altura);
  }
  saludar(fn) {
    console.log(`Hola mi nombre es ${this.nombre} ${this.apellido} y soy Desarrollador/a`);
    //Si se manda una funcion como parametro si se manda es true, de lo contrario es undefined -> false
    if (fn) {
      fn(this.nombre, this.apellido, true);
    }
  }
}
function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen día ${nombre} ${apellido}`);
  if (esDev) {
    console.log(`Ah mirá, no sabia que eras desarrollador/a`);
  }
}
//Se llama al constructor, y se crean los nuevos objetos
var joan = new persona('Joan', 'Glaber', 18, 1.72);
var valery = new persona('Valery', 'Smith', 16, 1.57);
var jimmy = new desarrollador('Jimmy', 'Miller', 21, 1.74);
var sophia = new desarrollador('Sophia', 'Jones', 23, 1.75);

joan.saludar(responderSaludo);
valery.saludar(responderSaludo);
jimmy.saludar(responderSaludo);
sophia.saludar(responderSaludo);