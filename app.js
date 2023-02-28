
const { crearArchivo } = require('./helpers/multiplicar');

const argv = require('./config/yargs');


console.clear();


// const base = 2;

// const promesa = crearArchivo(base);

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(err => console.log(err));

