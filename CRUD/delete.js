var remove = require('../API/delete');
const config = require('../config/config.js');

remove(
    {
        TableName: config.tabla_alumnos,
        Key: {
            "dni": "1234567A"
        }
    }
);