/** Existe varias formas de seleccionar elementos en el DOM
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

// TODO: Eventos

// console.log(1);

// window.addEventListener("load", function () {
//   /** Load espera a que el JS y los archivos que dependen del HTML estén listos */ console.log(
//     2
//   );
// });

// window.onload = function () {
//   console.log(3);
// };

// document.addEventListener("DOMContentLoaded", function () {
//   /** DOMContentLoaded, solo espera que se descargue el HTML, pero no espera CSS o imagenes */
//   console.log(4);
// });

// console.log(5);

// window.onscroll = function () {
//   console.log("scrolling...");
// };

// TODO: Seleccionar elementos y asociarles un evento

// const btnEnviar = document.querySelector(".boton--primario");
// btnEnviar.addEventListener("click", function (e) {
//   /** evento: e, evt, event, no esta bien definido */
//   console.log(e);
//   evento.preventDefault(); /** preventDefault(): previenee la accion por default */
//   console.log("Enviando formulario...");
// });

// TODO: Eventos de los Inputs y Textarea

const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

// TODO: El evento de submit
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  /** Validar el formulario */

  const { nombre, email, mensaje } = datos;

  if (nombre === "" || email === "" || mensaje === "") {
    mostrarAlerta("Todos los campos son obligatoriossss",true);

    return; /** Corta la ejecución del codigo */
  }

  /** Crea alerta de envio exitoso */
  mostrarAlerta("Mensaje enviado correctamente");
});

function leerTexto(e) {
  //console.log(e.target.value);
  /** para que se muestren lo que se escribe, siempre debe llevar e.target.value */

  datos[e.target.id] = e.target.value;
    //  /** Tecnica para llenar los formularios, deben ser los mismo nombres las llaves del objeto con los Inputs*/

 /** console.log(e.target);  Contiene el Input sobre el cual escribimos */

  // console.log(datos);
}

// TODO: Refactorizar el codigo
function mostrarAlerta(mensaje, error = null) {
  const alerta = document.createElement("P"); /** Se crea el elemento */
  alerta.textContent = mensaje; /** Se mapea el mensaje de la validación */
}

// TODO: Muestra una alerta de que se envio correctamente
function mostrarMensaje(mensaje) {
  alerta.classList.add("correcto"); /** se agrega clase CSS */

  formulario.appendChild(alerta);

  // TODO: Que desaparezca despues de 5 segundos
  setTimeout(() => {
    alerta.remove();
  }, 5000);
}

// TODO: Muestra un error en pantalla
function mostrarError(mensaje) {
  error.classList.add("error"); /** Se agrega clase CSS */

  formulario.appendChild(error);

  /** Desaparecera despues de 5 segundos */
  setTimeout(() => {
    error.remove();
  }, 5000);
}
