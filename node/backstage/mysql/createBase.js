var mysql = require("mysql")
var config = require("./sqlConfig")
// 激活序列号表
var  actSql = "CREATE TABLE ActiveSer (id INT(11) NOT NULL AUTO_INCREMENT,serial_number VARCHAR(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,activation BIT NOT NULL,activation_Date DATETIME NOT NULL,Expire_Date DATETIME NOT NULL,License_plate VARCHAR(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,Phone INT(11) NOT NULL,Vehicle_type VARCHAR(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,addTIme DATETIME NOT NULL,op_user VARCHAR(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,PRIMARY KEY (id),UNIQUE (serial_number),UNIQUE (License_plate),UNIQUE (op_user))"
// 未激活序列表

var  noActSql = "CREATE TABLE NoActiveSer (id INT(11) NOT NULL AUTO_INCREMENT,serial_number VARCHAR(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,activation BIT NOT NULL,addTIme DATETIME NOT NULL,op_user VARCHAR(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,Password VARCHAR(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,PRIMARY KEY (id),UNIQUE (serial_number),UNIQUE (op_user))"

// 管理员信息
var admin = "CREATE TABLE optionUser. (id INT(11) NOT NULL AUTO_INCREMENT,userName VARCHAR CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,addTime DATETIME NOT NULL,Phone INT(11) NOT NULL,power INT(11) NOT NULL,PRIMARY KEY (id),UNIQUE (userName))"

//防伪码
var  securityCode = `CREATE TABLE securityCode. ( id INT(11) NOT NULL AUTO_INCREMENT,securityCode VARCHAR(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL, addTIme DATETIME NOT NULL,op_user VARCHAR CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,PRIMARY KEY (id),UNIQUE (securityCode))`
var connection = mysql.createConnection(config)
connection.connect()
// var demo = "CREATE TABLE ActiveSer (id INT(11) NOT NULL AUTO_INCREMENT,PRIMARY KEY (id),serial_number VARCHAR(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,activation BIT NOT NULL,Expire_Date DATETIME NOT NULL,License_plate VARCHAR(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,Phone INT(11) NOT NULL,Vehicle_type VARCHAR(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL)"
connection.query(noActSql,function(err,data){
    if(err) console.log(err)
    console.log(data)
})
// console.log(actSql)

