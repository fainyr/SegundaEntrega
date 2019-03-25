listadoUsuarios = [];
let fs = require("fs");

const listarUsuarios = () => {
    try {
      listadoUsuarios = require("./listadoUsuarios.json");
      //listaEstudiantes = JSON.parse(fs.readFileSync('listado.json'));
    } catch (error) {
      listaEstudiantes = [];
    }
  };

  const verificarUsuario =(identificacion)=>{
      listarUsuarios();
      let siExisteIdentificacion = listadoUsuarios.find(usuario => usuario.identificacion == identificacion
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