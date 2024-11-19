const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=15";


async function listaImagenes() {
    try {
        let fetchImagen = await fetch(url);
        let datosImagenes = await fetchImagen.json();

        console.log(datosImagenes);
        const card = document.querySelector("[data-ul]");

        // Acumulamos el contenido en una variable
        let contenidoTotal = '';

        datosImagenes.forEach(elemento => {
            const contenido = `
            <li class="card">
                <img class="card__image" src="${elemento.url}" alt="imagen">
                <h3 class="card__title">${elemento.title}</h3>
            </li>
            `;
            contenidoTotal += contenido; // Acumulamos el contenido
        });

        // Una vez que todos los elementos han sido procesados, agregamos el contenido al DOM
        card.innerHTML = contenidoTotal;

    } catch (error) {
        console.log(error);
    }
}

listaImagenes();




// Then y Catch
// function listaImagenes() {
//     fetch(url)
//         .then(response => response.json()) // Respuesta recibida
//         .then(datosImagenes => {
//             console.log(datosImagenes);

//             const card = document.querySelector("[data-ul]");

// Acumulamos el contenido en una variable
//             let contenidoTotal = '';

//             datosImagenes.forEach(elemento => {
//                 const contenido = `
//                     <li class="card">
//                         <img class="card__image" src="${elemento.url}" alt="imagen">
//                         <h3 class="card__title">${elemento.title}</h3>
//                     </li>
//                 `;
//                 contenidoTotal += contenido; // Acumulamos el contenido
//             });

// Una vez que todos los elementos han sido procesados, los agregamos al DOM
//             card.innerHTML = contenidoTotal;

//         })
//         .catch(error => console.log(error)); // Respuesta rechazada
// }

// listaImagenes();
