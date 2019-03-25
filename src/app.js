const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const rq = require("./helpers");

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
  console.log(req.body.Identificador);
  console.log(req.body.Contrasenia);
  if (verificarUsuario(req.body.Identificador, req.body.Contrasenia)) {
    res.render("inicio", {
      ID: parseInt(req.body.Identificador),
              
    });
    
  }else{
    console.log('El usuario o contraseña son incorrectos');
    
  }
});

app.listen(4000, () => {
  console.log("Escuchando en el puerto 4000");
});


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
