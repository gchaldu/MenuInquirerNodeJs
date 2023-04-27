const inquirer = require('inquirer');
require('colors')

const preguntas = {
    type: 'list',
    name: 'opcion',
    message: '¿Qué desea hacer?',
    choices: [
        { value: '1', name: `${'1.'.green} Crear Tarea`},
        { value: '2', name: `${'2.'.green} Listar Tarea`},    
        { value: '3', name: `${'3.'.green} Listar Tarea Completada`}, 
        { value: '4', name: `${'4.'.green} Listar Tarea Pendiente`},   
        { value: '5', name: `${'5.'.green} Completar Tarea`},
        { value: '6', name: `${'6.'.green} Borrar Tarea`},
        { value: '0', name: `${'0.'.green} Salir`}
    ]
}

const pause = {
    type: 'input',
    name: 'enter',
    message: `\nPresione ${'ENTER'.green}: para continuar\n`,
    choices: [
        'Presiono ENTER'
    ]
}
const inquirerMenu = async() => {
        console.clear();
        console.log('==================='.green);
        console.log('Seleccione un opción'.green);
        console.log('==================='.green);


        const {opcion} = await inquirer
            .prompt(
                preguntas
            )
        return opcion;

}

const pausar = async() => {

        const {enter} = await inquirer
            .prompt(pause)

        return enter;
}

module.exports = {
    inquirerMenu,
    pausar
}