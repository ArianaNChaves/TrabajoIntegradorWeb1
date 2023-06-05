const form = document.getElementById('contact-form');
const errorContainer = document.getElementById('error-list');

function mostrarMensaje(mensaje) {
const errorElement = document.createElement('p');
errorElement.textContent = mensaje;
errorContainer.appendChild(errorElement);
}

function validarFormulario(event) {
event.preventDefault();

errorContainer.innerHTML = '';

const nombre = document.getElementById('input-name').value;
const email = document.getElementById('input-email').value;
const asunto = document.getElementById('input-subject').value;
const mensaje = document.getElementById('input-message').value;

if (nombre.trim() === '') {
    mostrarMensaje('Por favor, ingrese su nombre.');
    return;
}

if (email.trim() === '') {
    mostrarMensaje('Por favor, ingrese su correo electrónico.');
    return;
} else if (!validarEmail(email)) {
    mostrarMensaje('Por favor, ingrese un correo electrónico válido.');
    return;
}

if (asunto.trim() === '') {
    mostrarMensaje('Por favor, ingrese el asunto.');
    return;
}

if (mensaje.trim() === '') {
    mostrarMensaje('Por favor, ingrese su mensaje.');
    return;
}
mostrarMensaje('El formulario fue enviado correctamente')
}

function validarEmail(email) {
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
}

form.addEventListener('submit', validarFormulario);