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


let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id) //lo q esta haciendo aca es que se esta recorriendo el arreglo de empleados y por cada empleado de ese arreglo si su id es igual al id recibido por parametro este lo devuelve, ademas se guarda en la variable empleadoDB

    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${ id }`)
    } else {
        callback(null, empleadoDB);
    }

}


let getSalario = (empleado, callback) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id)

    if (!salarioDB) {
        callback(`No se encontro un salario para el usuario ${ empleado.nombre }`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }

}


getEmpleado(1, (err, empleado) => {

    if (err) {
        return console.log(err);
    }


    getSalario(empleado, (err, resp) => {

        if (err) {
            return console.log(err);
        }

        console.log(`El salario de ${ resp.nombre } es de ${ resp.salario}$`);

    })
});