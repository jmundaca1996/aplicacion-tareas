//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
let comando = argv._[0];
switch(comando){
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
    break;
    case 'listar':
        let listado = porHacer.getListado();
        console.log(listado);
        
        for (let tareas of listado){
            console.log('===========Por Hacer==========='.green);
            console.log(tareas.descripcion);
            console.log(tareas.estado);
            console.log('================================'.green);
        }
        
    break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion,argv.estado);
        console.log(actualizado);
    break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
    break;
    default:
    console.log("comando no reconocido");

} 