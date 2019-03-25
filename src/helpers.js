const hbs = require('hbs');
let fs = require("fs");
listadoUsuarios = [];


hbs.registerHelper('listarUsuarios',() => {
    try {
      listadoUsuarios = require("./listadoUsuarios.json");
      //listaEstudiantes = JSON.parse(fs.readFileSync('listado.json'));
    } catch (error) {
      listaEstudiantes = [];
    }
  });

  hbs.registerHelper('verificarUsuario',(identificacion,contrasenia)=>{
      console.log('entró al helper a verificar usuario');
      listarUsuarios();
      let siExiste = listadoUsuarios.find(usuario => usuario.identificacion == identificacion
                                                         && usuario.contrasenia == contrasenia);
      if(siExiste){
          return true;
      }else{
          return false;
      }
  });

  hbs.registerHelper('guardarUsuario', (identificacion,contrasenia,nombre) =>{
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
  });

  hbs.registerHelper( 'guardarUsuarioEnTexto' , () => {
    let datos = JSON.stringify(listadoUsuarios);
    fs.writeFile("listadoUsuarios.json", datos, err => {
      if (err) throw err;
      console.log("Archivo creado");
    });
  });