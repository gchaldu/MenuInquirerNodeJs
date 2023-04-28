const { inquirerMenu, pausar, leerImput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

require('colors');
require('inquirer');

console.clear()

const main = async() => {
    
        const tareas = new Tareas();
        let opt = '';
        do{
            opt = await inquirerMenu();

            switch(opt)
            {
                case '1':
                    const descripcion = await leerImput('Descripción: ');
                    tareas.crearTarea(descripcion)
                    break
                case '2':
                    //console.log(tareas._listado);
                    console.log (tareas.listToArray);
                    break
                case '3':

                    break
            }

            if (opt!== '0') await pausar();

        }while(opt !== '0' )
}

main();