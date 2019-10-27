# Arquitecturas de CSS

* Predecibles 
* Reutilizable
* Mantenible
* Escalable

## Buenas Prácticas

* Establecer reglas conocidas con todos los miembros del proyecto
* Explicar estructura base
* Establecer estándares de codificación 
* Evitar largas hojas de estilo
* Documentación

## Ejemplos de estructuras de Arquitecturas de CSS

* OOCSS: CSS orientado a objetos, separa el diseño del contenido. De esta manera se puede reutilizar el código.

* BLEM: Block - Element - Modifier. Separa los bloques, los elementos y modificadores. 

* SMACSS: Arquitectura de CSS escalable y modular. 5 pasos
    * BASE - Dividir el CSS en componentes base.
    * Layout - Layout, elementos que se utilizan una sola vez. Ejemplo: Un botón.
    * Module - Modulo, componentes que se utilizan más de una vez.
    * State - Estado, un botón que es verde, pero cuando es presionado cambia de color.
    * Theme - Temas, cuando cambien los temas o los colores 

* ITCSS Triángulo invertido de CSS: Poder dividir los archivos CSS para que no se combinen entre sí: 
    * Ajustes
    * Herramientas
    * Generico
    * Elementos
    * Objetos
    * Componentes
    * Utilidades 

* Atomic Design: Modular y escalable. Diseño en base a Átomos (elementos más pequeños como botones) -> Moléculas (Conjunto de botones) -> Organismos -> Templates -> Páginas. 
