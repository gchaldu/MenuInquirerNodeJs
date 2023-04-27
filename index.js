const { inquirerMenu, pausar } = require('./helpers/inquirer');

require('colors');
require('inquirer');

console.clear()

const main = async() => {

        let opt = '';
        do{
            opt = await inquirerMenu();
            if (opt!== '0') await pausar();
        }while(opt !== '0' )
}

main();