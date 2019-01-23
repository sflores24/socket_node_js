const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'server',
        mensaje: 'Bienvenido'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchando en espera de mensaje
    client.on('enviarMensaje', (message, callback) => {
        console.log(message);
        if (message.usuario) {
            //callback();
            callback({
                respuesta: `Bienvenido ${message.usuario}`
            });
        } else {
            callback({
                respuesta: `Intente de nuevo`
            });
        }
    });

    client.on('mensajeGrupo', (mensaje, callback) => {
        client.broadcast.emit('mensajeGrupo', mensaje);
    });
});