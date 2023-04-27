const { resolve } = require('path');

require('colors')

const mostrarMenu = () => {

    return new Promise(resolve => {
        console.clear();
        console.log('==================='.green);
        console.log('Seleccione un opción'.green);
        console.log('==================='.green);

        console.log(`${'1.'.green} Crear Tarea`);
        console.log(`${'2.'.green} Listar Tarea`);
        console.log(`${'3.'.green} listar Tarea Completada`);
        console.log(`${'4.'.green} Listar Tarea Pendiente`);
        console.log(`${'5.'.green} Completar Tarea(s)`);
        console.log(`${'6.'.green} Borrar Tarea`);
        console.log(`${'0.'.green} Salir`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Seleccione un opcion: ', (opt)=>{
            readline.close();
            resolve(opt);
        });
    });
    
}

const pausa = () => {

    return new Promise ((resolve) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`\nPresione ${'ENTER'.green}: para continuar\n` , (opt)=>{
            readline.close();
            resolve(opt);
        }); 
    });
    
}

module.exports = {
    mostrarMenu,
    pausa,
}