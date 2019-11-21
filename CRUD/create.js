var create = require('../API/create');
const config = require('../config/config.js');

var dni = "1234567A";
var nombre = "Samuel";
var apellido1 = "Faltó";
var apellido2 = "Hoy";

create(
    {
        TableName: config.tabla_alumnos,
        Item: {
            "dni": dni,
            "nombre": nombre,
            "apellido1": apellido1,
            "apellido2": apellido2,
            "ingresado": new Date().toString()
        }
    }
);