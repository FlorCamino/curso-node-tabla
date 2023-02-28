const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base, listar, hasta) => {
    try {
        let salida = "";
        let consola = "";

        for (let i = 1; i <= hasta; i++) {
            salida += (`${base} x ${i} = ${base * i}\n`);
            consola += (`${base} ${'x'.yellow} ${i} ${'='.yellow} ${base * i}\n`);
        }
        if (listar == true) {
            console.log('====================='.brightYellow);
            console.log(`    Tabla del: ${colors.green(base)}     `.bgYellow);
            console.log('====================='.brightYellow);


            console.log(consola)
        } else {
            console.log(' ');
        }
        // const promise = new Promise((resolve, reject) => {

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return (`tabla-${base}.txt creado`.bgYellow);

    } catch {
        reject('No se pudo crear el archivo'.red);
    }
    // });
    // return promise;
};


module.exports = {
    crearArchivo
}