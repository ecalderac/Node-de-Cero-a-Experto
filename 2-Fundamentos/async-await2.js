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


let getEmpleado = async(id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id); //lo q esta haciendo aca es que se esta recorriendo el arreglo de empleados y por cada empleado de ese arreglo si su id es igual al id recibido por parametro este lo devuelve, ademas se guarda en la variable empleadoDB

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${ id }`)
    } else {
        return empleadoDB;
    }

}

let getSalario = async(empleado) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error(`No se encontro un salario para el usuario ${ empleado.nombre }`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        };
    }

}


let getInformacion = async(id) => {

    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `${ resp.nombre } tiene un salario de ${ resp.salario }$`;

}

getInformacion(2)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));