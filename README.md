# SpaceApp - Aplicación que consume datos de la NASA

SpaceApp es una aplicación web que permite explorar datos relacionados con el espacio, consumiendo la API pública de la NASA. En este proyecto, pusimos en práctica el consumo de datos a través de una API, el manejo de promesas con `then-catch` y `async-await`, y cómo interactuar con APIs externas utilizando JavaScript.

## Tecnologías utilizadas

- **HTML5** - Estructura básica de la aplicación web.
- **CSS3** - Estilos para la presentación y diseño de la página.
- **JavaScript** - Lógica de consumo y manejo de datos.
- **Fetch API** - Para realizar solicitudes HTTP y obtener datos desde la API de la NASA.

## Funcionalidades principales

- **Consumo de la API de la NASA**: Utilizamos la API pública de la NASA, que nos proporciona datos sobre imágenes, videos y otros recursos relacionados con el espacio.
- **Manejo de datos asíncronos**: Aprendimos a manejar las promesas devueltas por la API de la NASA usando dos enfoques:
  - **then-catch**: Manejo de promesas con encadenamiento de métodos `then` para resolver los datos y `catch` para manejar posibles errores.
  - **async-await con try-catch**: Una forma más moderna y legible de manejar operaciones asíncronas mediante funciones `async` y el manejo de errores con `try-catch`.

## Descripción del Proyecto

En SpaceApp, la principal interacción es consumir datos desde la API pública de la NASA, específicamente utilizando una **Demo Key** proporcionada por ellos. Esta clave de API nos permite realizar solicitudes para obtener información relacionada con las imágenes y videos del espacio.

### Flujo de trabajo

1. **Obtención de datos**:
   Utilizamos el **Fetch API** para hacer solicitudes GET a la API de la NASA. El endpoint de la API nos devuelve una promesa que, al resolverse, nos da acceso a los datos.

