const Tarea = require("./tarea");

class Tareas {

    _listado = {};

    constructor() {
        this._listado = {};
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    get listToArray() {
        const arreglo = [];

        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            arreglo.push(tarea);

        })

        return arreglo;
    }

    completarTarea(ids = []) {
        ids.forEach((id) => {
            const tarea = this._listado[id]
            if(tarea.completadoEn === null)
            {
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.listToArray.forEach (tarea=>{
            if(!ids.includes(tarea.id))
            {
                this._listado[tarea.id].completadoEn=null;
            }
        })
    }

    cargarArregloFromArray(tareasDB = []) {
            tareasDB.forEach(tarea => {
                this._listado[tarea.id] = tarea;
            });
    }

    listadoCompleto() {
        console.log()
        this.listToArray.forEach(({ desc, completadoEn }, i) => {
            const idx = `${i + 1}`.green;
            const description = `${desc}`.cyan;
            const estado = (completadoEn !== null) ? `Completada`.green : `Pendiente`.red
            console.log(`${idx}. ${description} :: ${estado}`);
        })
    }

    listarPendientesCompletadas(est=true) {
        console.log()
        let contador=0;
        this.listToArray.forEach(({ desc, completadoEn }, i) => {
            const idx = `${i + 1}`.green;
            const description = `${desc}`.cyan;
            const estado = (completadoEn !== null) ? `Completada`.green : `Pendiente`.red;

            if (est) {
                if (completadoEn) 
                {
                    contador++;
                    console.log(`${contador.toString().green}. ${description} ${estado.green}`)
                }
            } else {
                if (!completadoEn){
                    contador++;
                    console.log(`${contador.toString().green}. ${description} ${estado.green}`)
                }
            }
        });
    }

    borrarTareas(id) {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }
}


module.exports = Tareas;