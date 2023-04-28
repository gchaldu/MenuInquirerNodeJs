const Tarea = require("./tarea");

class Tareas {

    _listado = {};

    constructor() {
        this._listado = {};
    }

    crearTarea(desc='')
    {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    get listToArray()
    {
        const arreglo = [];

        Object.keys(this._listado).forEach(key=>{
            const tarea = this._listado[key];
            arreglo.push(tarea);

        })

        return arreglo;
    }
}


module.exports = Tareas;