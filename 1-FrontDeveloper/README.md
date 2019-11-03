# Curso de Frontend Developer con HTML y CSS

### HTML

Es un lenguaje de marcado para decirle al navegador cómo estructurar las páginas web que visitas. No es un lenguaje de programación

### CSS 

Es un lenguaje que nos permite crear páginas web con un diseño agradable para los usuarios. Tampoco es un lenguaje de programación

#### Conceptos

* DOM (Document Object Model) - Es una transformación del código HTML escrito por nosotros a objetos entendibles para el navegador.
* CSSOM - Así como el DOM para el HTML, El CSSOM es una representación de objetos de nuestros estilos en CSS.
* Render Tree - Es la unión entre el DOM y el CSSOM para renderizar todo el código de nuestra página web.

### Pasos que sigue el navegador para construir las páginas web:
* Procesa el HTML para construir el DOM.
* Procesa el CSS para construir el CSSOM.
* El DOM se une con el CSSOM para crear el Render Tree.
* Se aplican los estilos CSS en el Render Tree.
* Se "pintan" los nodos en la pantalla para que los usuarios vean el contenido de la página Web.

## Anatomía de un elemento HTML

Nuestros elementos HTML se componen de:

Etiqueta de apertura: el nombre de nuestra etiqueta encerrado entre símbolos de mayor o menor. Por ejemplo: < h1 >.

Contenido: dentro de nuestras etiquetas podemos añadir texto u otros elementos HTML, lo que conocemos como anidamiento.
Etiqueta de cierre: son casi iguales que las etiquetas de apertura, pero también necesitan un slash (/) antes del nombre de la etiqueta. Por ejemplo: </ h1>.

Las etiquetas de apertura también pueden tener atributos. Los atributos nos permiten definir características especiales para nuestros elementos: < etiqueta atributo=""valor del atributo"">. Por ejemplo: < h1 class=""saludo"">.

También existen elementos vacíos. Estos elementos no tienen contenido ni etiqueta de cierre, solo etiqueta de apertura y atributos. Por ejemplo: < img src=""puppy.png"" alt=""mi mascota"">.


# CSS

Nuestros estilos con CSS se componen de:

Selector: son la referencia a los elementos HTML que queremos estilizar. Los nombres de estas etiquetas van seguidas de una llave de apertura y otra de cierre ({}). Por ejemplo: h1 {}.

Propiedades: son el tipo de estilo que queremos darle a nuestros elementos. Van seguidas de dos puntos (:). Las propiedades deben estar dentro de las llaves del selector que definimos anteriormente. Podemos escribir diferentes propiedades en un mismo selector. Por ejemplo: h1 { color: }.

Valores: son el estilo que queremos que tomen nuestros elementos HTML con respecto a una propiedad. Van seguidas de un punto y coma (;). Por ejemplo: h1 { color: red; }.

## Tipos de selectores, pseudo-clases y pseudo-elementos

*(asterisco): Es el selector universal. Las propiedades se aplicarán a todos los elementos de nuestro HTML.

Tipo: Son selectores que se aplican a cierto elemento HTML en específico. Las propiedades se aplicarán a la etiqueta que queremos, por ejemplo p, body, html, div, etc.

Clase: Si nuestras etiqueta de HTML tienen un atributo de class podemos usar ese valor o identificador para que los cambios en el CSS afecten únicamente a ese elemento.

ID: Es similar al anterior, si la etiqueta HTML tiene un ID podemos afectar sólo ese elemento.

Las Pseudo-clases y Pseudo-elementos nos permiten ser aún más específicos con qué elemento o partes de nuestros elementos deben recibir los estilos.

Para usarlas debemos definir el selector base (por ejemplo, p) seguido de dos puntos y la pseudo-clase que queremos estilizar (por ejemplo: p:first-child). En el caso de los pseudo-elementos debemos usar el dos puntos 2 veces (p::first-letter).


~~~
* Asterisco (universal) */
* {
  margin: 0;
}

/* Tipo */
h1 {
  color: red;
}

/* Clase */
.saludo {
  font-size: 2em;
}

/* ID */
#id {
  border-radius: 20px;
}

/* Pseudo-clases */
p:first-child {
  color: white;
}

p:last-child {
  color: purple;
}

p:nth-child(2n) {
  color: red;
} 
~~~

# Enlaces importantes

* https://htmlreference.io
* https://colorhunt.co
* https://css-tricks.com
* https://iconos8.es
* http://flexboxfroggy.com/#es