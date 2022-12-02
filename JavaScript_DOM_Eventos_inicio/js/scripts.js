/** Existe varias formas de seleccionar elementos en el DOm
 * las tres mas comunes son:
 * 1.- querySelector - retorna 0 ó 1 elemento
 * 2.- querySelectorAll
 * 3.- getElementById
 */

/** querySelector */
const heading = document.querySelector(".header__texto h2");
heading.textContent =
  "Chidito mi Heading..."; /** Con .textContent, se modifica el elemento seleccionado  */
console.log(heading);

/** querySelectorAll */

const enlaces = document.querySelectorAll(".navegacion a");
enlaces[0].textContent = "Nuevo enlace";
// enlaces[0].href = "https://www.google.com"; podemos modificar mas elementos
enlaces[0].classList.add(
  "nueva-clase-mia"
); /** Para agregar o eliminar clases no es necesario agregar el punto, JS reconoce en auto que son clases */
// enlaces[0].classList.remove("navegacion__enlace");

/** getElementById */

const heading2 = document.getElementById("heading");
console.log(heading2);

// TODO: ** Crear un nuevo elemento **
const nuevoEnlace = document.createElement("A");

// TODO: ** Agregando propiedades **

/** Agregar el href */
nuevoEnlace.href = "nuevo-enlace.html";

/** Agregar el texto */
nuevoEnlace.textContent = "Freddy Morales";

/** Agregar la clase */
nuevoEnlace.classList.add("navegacion__enlace");

/** Agregarlo al documento */
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

// TODO: Video 147, eventos
