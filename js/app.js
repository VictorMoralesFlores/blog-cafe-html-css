
//querySelector
const heading = document.querySelector(".header__texto h2");// retorna 0 o 1 elemento
// const heading = document.querySelector("#heading");// retorna 0 o 1 elemento (se usa ID)
heading.textContent = "Modificado con JS";
heading.classList.add("nueva-clase");


//querySelectorAll

const enlaces = document.querySelectorAll(".navegacion a");
enlaces[0].textContent = "Google";
enlaces[0].classList.add("new-class");
enlaces[0].classList.remove("new-class");


// Generar nuevo enlace
const nuevoEnlace = document.createElement("A");
//  Agregamos atributos
//  Href
nuevoEnlace.href = "https://www.google.com";
nuevoEnlace.textContent="Creado con JS";
nuevoEnlace.classList.add("navegacion__enlace");

// Agregar nuevo elemento al documento

const navegacionPrincipal = document.querySelector(".navegacion");
navegacionPrincipal.appendChild(nuevoEnlace);


// console.log(nuevoEnlace);

//getElementById

const heading2 = document.getElementById("heading");



/* EVENTOS */

console.log(1);

// Evento que espera a que se descargue todo el HTML, CSS e imagenes
window.addEventListener('load', ()=> {
    console.log(2);
});
// window.onload = function(){
    
// }

// Solo espera auq ese descargue el HTML
document.addEventListener('DOMContentLoaded',()=>{
    console.log(4);
});
console.log(5);

// Evento que se genera cuando se hace scroll.
window.onscroll = function(){
    console.log("Scrolling...");
}

const datos = {
    nombre :"",
    email : "",
    mensaje : ""
}

// Seleccionar elementos y asociarles un evento

// const btnEnviar = document.querySelector(".boton--primario");
// btnEnviar.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log(e);
//     console.log("Enviando formulario");
// });


// Evento de submit
const formulario = document.querySelector(".formulario");
formulario.addEventListener("submit", enviar);
function enviar(e){
    e.preventDefault();

    // Validar formulario

    const { nombre,email,mensaje } = datos;

    if(nombre==='' || email==='' || mensaje===''){
        mostrarAlerta("Todos los campos son obligatorios.","error");
        return; // Corta la ejecucion del codigo
    }
    // Enviar formulario
    mostrarAlerta("Se envió el mensaje de forma correcta.","correcto");
}


async function mostrarAlerta(mensaje, tipo) {
    const alerta = document.createElement("P");
    alerta.textContent = mensaje;
    alerta.classList.add(tipo);
    formulario.appendChild(alerta);

    // Desaparece despues de 5 segundos
    await tiempo(5000);
    alerta.classList.add("desaparecer");
    await tiempo(5000);
    alerta.remove();

}

function tiempo(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}


// Eventos de inputs y textareas

const nombreInput = document.querySelector("#nombre");
// Solo se ejecuta cuando se sale del elemento
// nombreInput.addEventListener("change", function(){
//     console.log("Escribiendo");
// });

const emailInput = document.querySelector("#email");
const mensajeInput = document.querySelector("#mensaje");
// Se ejecuta mientras vas escribiendo
emailInput.addEventListener("input", llenarDatos);
mensajeInput.addEventListener("input", llenarDatos);
nombreInput.addEventListener("input", llenarDatos);

function llenarDatos(e) {
    datos[e.target.id] = e.target.value;
    console.log(datos);
}