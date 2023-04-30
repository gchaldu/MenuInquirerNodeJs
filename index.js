const { inquirerMenu, pausar, leerImput, listadoDeTareasABorrar, confirmar, listadoDeTareasACompletar } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
const { guardarTarea, leerTarea } = require('./helpers/guardarArchivo');

require('colors');
require('inquirer');

console.clear()

const main = async () => {

    const tareas = new Tareas();
    let opt = '';

    const tareasDB = leerTarea();
    if (tareasDB) {
        tareas.cargarArregloFromArray(tareasDB, tareas);
    }

    do {
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                const descripcion = await leerImput('Descripción: ');
                tareas.crearTarea(descripcion)
                break
            case '2':
                tareas.listadoCompleto();
                break
            case '3':
                tareas.listarPendientesCompletadas(true);
                break
            case '4':
                tareas.listarPendientesCompletadas(false);
                break
            case '5':
                const ids = await listadoDeTareasACompletar(tareas.listToArray);
                tareas.completarTarea(ids);
                break
            case '6':
                const id = await listadoDeTareasABorrar(tareas.listToArray);
                if (id !== '0') {
                    const ok = await confirmar(`\nEsta seguro de Eliminar la Tarea\n`);
                    //TO DO: Preguntar si esta seguro
                    if (ok === true) {
                        tareas.borrarTareas(id);
                        console.log('Tarea Borrada')
                    }
                } else {
                    console.log('Cancelado....');
                }
                break
        }
        guardarTarea(tareas.listToArray);
        if (opt !== '0') await pausar();

    } while (opt !== '0')
}

main();