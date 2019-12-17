//Required
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('================'.green);
    console.log(`Tabla de ${ base }`.blue);
    console.log('================'.green);

    for (let i = 0; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }\n`);
    }

}


crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }


        let data = ''

        for (let i = 0; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        //const data = new Uint8Array(Buffer.from('Hola Mundo'));
        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`);

        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}