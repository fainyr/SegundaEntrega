const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const rq = require("./helpers");
const funciones = require('./funciones');

const directoriopublico = path.join(__dirname, "../public");
const directoriopartials = path.join(__dirname, "../partials");

listadoUsuarios = [];
let fs = require("fs");

app.use(express.static(directoriopublico));
hbs.registerPartials(directoriopartials);
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index", {
    //ID:parseInt(req.body.ID),
    //Nombre:parseInt(req.body.Nombre)
  });
});

app.post("/inicio", (req, res) => {
  console.log(req.body.identificacion);
  console.log(req.body.contrasenia);
  if (verificarUsuario(req.body.identificacion, req.body.contrasenia)) {
    res.render("inicio", {
      ID: parseInt(req.body.identificacion),
      rol: req.body.rol              
    });
    
  }else{

    console.log('El usuario o contraseña son incorrectos');
    
  }
});

app.listen(4000, () => {
  console.log("Escuchando en el puerto 4000");
});





////FUNCIONES Y PROCEDIMIENTOS
const listarUsuarios = () => {
    try {
      listadoUsuarios = require("./listadoUsuarios.json");
      console.log('lista de usuarios: '+ listadoUsuarios);
      //listaEstudiantes = JSON.parse(fs.readFileSync('listado.json'));
    } catch (error) {
      listaEstudiantes = [];
    }
  };

  const verificarUsuario =(identificacion,contrasenia)=>{
      listarUsuarios();
      console.log('identificacion: '+identificacion);
      console.log('contraseña: '+contrasenia);
      let siExiste = listadoUsuarios.find(usuario => usuario.identificacion == identificacion
                                                         && usuario.contrasenia == contrasenia);
      if(siExiste){
          return true;
      }else{
          return false;
      }
  }

  const guardarUsuario = (identificacion,contrasenia,nombre) =>{
    let siExiste = listadoUsuarios.find(usuario => usuario.identificacion == identificacion);
    if(siExiste){
        console.log('Ya existe un usuario con ese número de identificación');
    }else{
        let usuario;
        usuario.identificacion = identificacion;
        usuario.contrasenia = contrasenia;
        usuario.nombre = nombre;
        listarUsuarios.push()
        guardarUsuarioEnTexto();
    }
}

const guardarUsuarioEnTexto = () => {
  let datos = JSON.stringify(listadoUsuarios);
  fs.writeFile("listadoUsuarios.json", datos, err => {
    if (err) throw err;
    console.log("Archivo creado");
  });
};
