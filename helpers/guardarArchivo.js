const fs = require('fs')

const path = './db/tareas.json';

const guardarTarea = (data) => {
    fs.writeFileSync(path, JSON.stringify(data))
}

const leerTarea = () =>{
    if(!fs.existsSync(path))
    {
        return null;
    }
    const info = fs.readFileSync(path, {encoding: 'utf-8'});
    const TareasJson = JSON.parse(info);
    return TareasJson;
}

module.exports = {
    guardarTarea,
    leerTarea
}