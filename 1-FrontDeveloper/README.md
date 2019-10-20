# Curso de Frontend Developer con HTML y CSS

### HTML

Es un lenguaje de marcado para decirle al navegador cómo estructurar las páginas web que visitas. No es un lenguaje de programación

### CSS 

Es un lenguaje que nos permite crear páginas web con un diseño agradable para los usuarios. Tampoco es un lenguaje de programación

#### Conceptos

* DOM (Document Object Model) - Es una transformacion del código HTML escrito por nosotros a objetos entendibles para el navegador.
* CSSOM - Así como el DOM para el HTML, El CSSOM es una representación de objetos de nuetros estilos en CSS.
* Render Tree - Es la unión entre el DOM y el CSSOM para renderizar todo el código de nuestra página web.

### Pasos que sigue el navegador para contruir las páginas web:
* Procesa el HTML para contruir el DOM.
* Procesa el CSS para construir el CSSOM.
* El DOM se une con el CSSOM para crear el Render Tree.
* Se aplican los estilos CSS en el Render Tree.
* Se "pintan" los nodos en la pantalla para que los usuarios vean el contenido de la página Web.

## Anatomía de un elemnto HTML

Nuestros elementos HTML se componen de:

Etiqueta de apertura: el nombre de nuestra etiqueta encerrado entre símbolos de mayor o menor. Por ejemplo: < h1 >.

Contenido: dentro de nuestras etiquetas podemos añadir texto u otros elementos HTML, lo que conocemos como anidamiento.
Etiqueta de cierre: son casi iguales que las etiquetas de apertura, pero también necesitan un slash (/) antes del nombre de la etiqueta. Por ejemplo: </ h1>.

Las etiquetas de apertura también pueden tener atributos. Los atributos nos permiten definir características especiales para nuestros elementos: < etiqueta atributo=""valor del atributo"">. Por ejemplo: < h1 class=""saludo"">.

También existen elementos vacíos. Estos elementos no tienen contenido ni etiqueta de cierre, solo etiqueta de apertura y atributos. Por ejemplo: < img src=""puppy.png"" alt=""mi mascota"">.