const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
require('./helpers');

const directoriopublico = path.join(__dirname, '../public');
const directoriopartials = path.join(__dirname, '../partials');
app.use(express.static(directoriopublico));
hbs.registerPartials(directoriopartials);
app.use(bodyParser.urlencoded({extended:false}))
app.set('view engine', 'hbs');

app.get('/', (req, res)=> {
    res.render('index',{
        estudiante:'Catherine'});
});

app.post('/iniciarSesion', (req, res)=>{

    console.log(req.body);
    res.render('iniciarSesion',{
        estudiante:req.body.nombre,
        nota1:parseInt(req.body.nota1),
        nota2:parseInt(req.body.nota2),
        nota3:parseInt(req.body.nota3)
    });
});

app.listen(3000, ()=>{
    console.log('Escuchando en el puerto 3000');
});