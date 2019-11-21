var AWS = require("aws-sdk");
const config = require('../config/config.js');
AWS.config.update(config.aws_local_config);
const docClient = new AWS.DynamoDB.DocumentClient();

let read = function (params) {
    docClient.get(params, function (err, data) {
        if (err) {
            console.log("Mensaje de error: ", err);
        } else {
            console.log("Listado con éxito ", data);
        }
    });
}

module.exports = read;