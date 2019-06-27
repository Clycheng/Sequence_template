var fs = require("fs")
module.exports = function (obj,callback) {
    var host = obj.host;
    var admin = obj.admin;
    var password = obj.password;
    var database = obj.dataBase;
    var data = `module.exports = { host: "` + host + `",user :  "` + admin + `",password : "` + password + `",database : "` + database + `"}`
    fs.writeFile("./backstage/mysql/sqlConfig.js", data,function (err) {
        if (err) callback(err)
        callback("ok")
    })
}
