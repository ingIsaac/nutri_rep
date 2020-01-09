const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set('port', port);
app.use(express.static(path.join(__dirname, 'app')));
app.set('views', path.join(__dirname + '/app','views'));
app.set('view engine', 'pug');
console.log('Servidor Iniciado... Puerto: ', port);
//------------------------------------------------->

app.get("/",(req,res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log('Servidor Ejecutandose...');
});
//------------------------------------------------->