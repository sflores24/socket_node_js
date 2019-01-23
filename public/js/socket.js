var socket = io();

//Escuchando información
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//Escuchando información
socket.on('disconnect', function() {
    console.log('Desconectado al servidor');
});

//Envio de información
socket.emit('enviarMensaje', {
    usuario: 'Chava',
    mensaje: 'Hola Mundo'
}, function(respuesta) {
    console.log(respuesta);
});

socket.on('enviarMensaje', function(message) {
    console.log(message);
});

socket.on('mensajeGrupo', function(mensaje) {
    console.log(mensaje)
});