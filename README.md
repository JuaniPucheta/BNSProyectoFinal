## Proyecto ADN-BNS

#### Autor
* **Juan Ignacio Pucheta**

### Descripción del Backend

En esta primera fase del desarrollo, nos enfocaremos en el backend, donde crearemos un servicio REST capaz de gestionar publicaciones. Cada publicación constará de un título, descripción, imagen y comentarios recibidos. La temática de estas publicaciones es completamente abierta.

Ejemplo de estructura JSON:
```json
"publicaciones": [
    {
        "titulo": "Título de la publicación 1",
        "descripcion": "Descripción de la publicación 1",
        "imagen": "url_de_la_imagen_1.jpg",
        "comentarios": [
            {
                "contenido": "Comentario 1"
            },
            {
                "contenido": "Comentario 2"
            }
        ]
    }
]
```
La primera instancia de desarrollo,implica el sistema CRUD, capaz de trabajar con
publicaciones persistidas en la base de datos MongoDB. La idea es qué se trabaje en las
clases (a lo largo de una semana, incluida la jornada asíncrona), apoyándose en el/la
docente para consultas.

### Descripción del Frontend
Este proyecto tiene como objetivo crear una pequeña aplicación web que muestre publicaciones con imágenes y comentarios, siguiendo el esquema de Mongoose definido en clases anteriores.

#### Estructura general de la interfaz:
- Navbar: En la parte superior, debe contener un ícono que lleve a la página inicial. En etapas futuras, se agregarán más elementos.
- Footer: Al final de la página, debe incluir información sobre la página. Tanto la navbar como el footer deben ser comunes a todas las páginas o pantallas.

#### Pantallas:
1) Pantalla Principal
En el cuerpo de esta pantalla, se mostrará un conjunto de tarjetas en forma de cards. Estas tarjetas deben incluir la imagen en la parte superior, seguida por el título y la descripción de cada entrada. Al final de cada tarjeta, habrá un botón que diga "Más información".

* 1) También se incluirá un botón en la pantalla principal que abrirá un formulario para crear una nueva publicación. Este formulario puede abrirse en un modal, en otra página o en alguna sección particular de la página, dejando esta elección al criterio del desarrollador. Asimismo, la ubicación del botón en la página también queda a criterio del desarrollador.

* 2) En las tarjetas de las imágenes, habrá un botón para eliminar la imagen. Al hacer clic en este botón, se abrirá un modal con una pregunta de confirmación para confirmar o cancelar la eliminación. Después de eliminar o crear una nueva tarjeta, el listado de publicaciones se actualizará sin recargar la página entera.

2) Pantalla de Cada Publicación
El botón "Más información" de cada tarjeta en la pantalla principal llevará a una segunda pantalla. En esta pantalla, se mostrará la foto en mayor tamaño, la información relacionada, los comentarios asignados a la foto y un área para agregar un nuevo comentario. Al agregar un comentario nuevo, el listado de comentarios se actualizará sin recargar la página entera.


