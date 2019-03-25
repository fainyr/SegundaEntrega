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


app.get('/', (req, res)=>{

    console.log(req.body);
    res.render('index',{
        ID:parseInt(req.body.ID),
        Nombre:parseInt(req.body.Nombre)
    });
});

app.listen(4000, ()=>{
    console.log('Escuchando en el puerto 4000');
});