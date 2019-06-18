var mysql      = require('mysql');
var config = require("./sqlConfig.js")
module.exports = mysql.createConnection(config)
