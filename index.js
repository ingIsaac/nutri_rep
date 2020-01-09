const express = require('express');
const socketIO = require('socket.io');
const app = express();
const port = 3000;
const path = require('path');
var _partida = require('./app/scripts/core_lib');

app.set('port', port);
app.use(express.static(path.join(__dirname, 'app')));
app.set('views', path.join(__dirname + '/app','views'));
app.set('view engine', 'pug');
const server = app.listen(app.get('port'));
var io = socketIO.listen(server);
console.log('Servidor Iniciado... Puerto: ', port);
//------------------------------------------------->

app.get("/",(req,res) => {
  res.render('index');
});

//------------------------------------------------->