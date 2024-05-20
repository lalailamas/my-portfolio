// Puedes agregar interactividad a tu portafolio aquí
console.log('Portafolio cargado');

// Ejemplo de interactividad: alerta al enviar el formulario
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado. Gracias por contactarme.');
});
