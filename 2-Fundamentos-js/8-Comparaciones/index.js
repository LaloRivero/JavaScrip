//Javascript puede comparar diferentes tipos de datos

var x = 4, y = '4';

// x == y -> true
// x === y -> False

/*
( == ) Compara si X es igual a Y en este caso los dos son 4 y no toma en cuenta que sean diferentes tipos datos, para comparar
que sean iguales y de mismo  tipo de dato se utiliza ( === ), es buena practica utiliza el triple igual dado a que se pueden
compara cosas que no son iguales y dar resultados erroneos.
*/

//Comparacion de objetos
/* 
Javascrip pregunta por la referencia de la variable de la comparacion que se esta haciendo, cuando la referencia de memoria
es la misma es cuando la comparacion da un resultado de verdadero. Ejemplos:
*/

var dude1 = {
  nombre: 'DUDE'
}

var dude2 = {
  nombre: 'DUDE'
}

/* 
dude1 == dude2 -> false 
dude1 === dude2 -> false

No apuntan a la misma direccion de memoria, son dos objetos diferentes aunque tengan el mismo valor
*/


var dude3 = dude1; // si modificamos uno de los dos modificas las dos variables 

/*
dude1 == dude3 -> true
dude1 === dude3 -> true

dude3 apunta a la misma direccion de memoria donde se encuentra dude1, se consieran iguales por apuntar a la misma direccion
de memoria

Al crear un nuevo objeto es otro lugar en memoria por ende son diferentes
*/

var dude4 = {
  ...dude1
}