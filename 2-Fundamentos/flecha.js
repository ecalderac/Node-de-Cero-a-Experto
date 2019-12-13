//Las 3 funciones sumar mostradas abajo son todas iguales

//ejemplo1 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// function sumar(a, b) {
//     return a + b;
// }

// let sumar = (a, b) => {
//     return a + b;
// }

// let sumar = (a, b) => a + b;

//ejemplo 2 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// function saludar() {
//     return 'Hola Mundo'
// }

// let saludar = () => 'hola mundo';

// function saludar(nombre) {
//     return `Hola ${ nombre }`
// }

// let saludar = (nombre) => `Hola ${ nombre }`


// console.log(saludar('Eduardo'));

// console.log(sumar(10, 20));

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder }`
    }
};

console.log(deadpool.getNombre());