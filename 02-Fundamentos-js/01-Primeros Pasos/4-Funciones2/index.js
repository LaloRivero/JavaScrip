var nombre = "Sacha"

function imprimirMayus(nom) {
  //nom es una variable local
  nom = nombre.toUpperCase();
  console.log(nom);
}

imprimirMayus(nombre);