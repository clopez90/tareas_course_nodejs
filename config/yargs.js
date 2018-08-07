const argv = require('yargs')
    .command('crear', 'crea una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripcion de la tarea por hacer'
        }
    })
    .command('borrar', 'borra una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripcion de la tarea por hacer'
        }
    })
    .command('listar', 'lista las tareas', {
        completado: {
            alias: 'c',
            default: false
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .help()
    .argv;

module.exports = { argv }