const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'actualiza el estado de una tarea', {
        descripcion,
        completado: {
            demand: true,
            alias: 'c',
            default: true
        }
    })
    .command('borrar', 'Borrar un elemento', {
        descripcion
    })
    .help()
    .argv;


//lo exporto para usarlo fuera
module.exports = {
    argv
}