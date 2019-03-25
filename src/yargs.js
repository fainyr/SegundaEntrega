const argv= require('yargs')
            .command('buscar','verifica un usuario',buscar)
            .argv;

const identificacion = {
    demand:true,
    alias:'i'
}

const contrasenia = {
    demand:true,
    alias:'c'
}

const nombre = {
    demand:true,
    alias:'n'
}

const buscar ={
    identificacion,
    contrasenia
}

module.exports = {
    argv
};

