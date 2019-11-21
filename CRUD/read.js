var read = require('../API/read');
const config = require('../config/config.js');

read(
    {
        TableName: config.tabla_alumnos,
        Key: {
            "dni": "1234567A"
        }
    }
);