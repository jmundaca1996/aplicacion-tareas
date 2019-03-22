const descripcion= {
    demand: true,
    alias: 'd',
    desc: 'Descripcion por la tarea por hacer'
}
const completado = {
    default : true,
    alias : 'C',
    desc: 'Marcar como completado o pendiente la tarea'
}
const argv = require('yargs')
    .command('crear','Crear cosas por hacer',{
        descripcion
    })
    .command('actualizar','actualizar las cosas por hacer',{
        descripcion,
        completado
    })
    .command('borrar','borrar las cosas por hacer',{
        descripcion
    })
    .help()
    .argv
module.exports = {
    argv
}