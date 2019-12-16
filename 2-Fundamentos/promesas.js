let empleados = [{
    id: 1,
    nombre: 'Eduardo'
}, {
    id: 2,
    nombre: 'Fernando'
}, {
    id: 3,
    nombre: 'Pedro'
}];


let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];


let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id === id) //lo q esta haciendo aca es que se esta recorriendo el arreglo de empleados y por cada empleado de ese arreglo si su id es igual al id recibido por parametro este lo devuelve, ademas se guarda en la variable empleadoDB

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${ id }`)
        } else {
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {

        let salarioDB = salarios.find(salario => salario.id === empleado.id)

        if (!salarioDB) {
            reject(`No se encontro un salario para el usuario ${ empleado.nombre }`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }

    });
}

getEmpleado(10).then(empleado => {

        return getSalario(empleado);

    })
    .then(resp => {
        console.log(`El salario de ${ resp.nombre } es de ${ resp.salario }`);
    })
    .catch(err => {
        console.log(err);
    })