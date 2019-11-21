var update = require('../API/update');
const config = require('../config/config.js');
var dateAttri = new Date().toString();

var dni = "1234567A";

update(
    {
        TableName: config.tabla_alumnos,
        Key: {
            "dni": dni
        },
        UpdateExpression: "set ingresado= :nuevoIngreso, #nombre= :nuevoNombre",
        ExpressionAttributeValues: {
            ":nuevoIngreso": dateAttri,
            ":nuevoNombre": "Samuel vago"
        },
        ExpressionAttributeNames: {
            "#nombre": "nombre"
        },
        ReturnValues: "UPDATED_NEW"
    }
);