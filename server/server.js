//Librerias externas
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');

//se pone el express en la app
const app = express();
//se pone el servidor http con la config del express
let server = http.createServer(app);

//Se pone la ruta publica en la constante
const publicPath = path.resolve(__dirname, '../public');

//Se pone el puerto en la constante
const port = process.env.PORT || 3000;

//Declaramos el input output con respecto al server de http - express
module.exports.io = socketIO(server);
require('./socket/socket');

//Middleware para acceder a la carpeta publica
app.use(express.static(publicPath));

server.listen(port, (err) => {
    if (err) throw new Error(err);

    console.log(`El servidor se encuentra corriendo en el puerto ${port}`);
});