const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');
const router = require('./network/routes');

db('mongodb://127.0.0.1:27017/Productos');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
router(app);



app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicación se esta escuchando en http://localhost:3000');