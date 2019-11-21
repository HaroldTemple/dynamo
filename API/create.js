var AWS = require('aws-sdk');
const config = require('../config/config.js');
AWS.config.update(config.aws_local_config);
const docClient = new AWS.DynamoDB.DocumentClient();

let create = function (params) {
    docClient.put(params, function (err, data) {
        if (err) {
            console.log("Mensaje de error: ", err);
        } else {
            console.log("Guardado con éxito ", data);
        }
    });
}

module.exports = create;