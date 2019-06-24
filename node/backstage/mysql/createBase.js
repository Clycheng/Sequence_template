var mysql = require("mysql")
var config = require("./sqlConfig")
module.exports  =  function(callback){
// 激活序列号表
var  actSql = "CREATE TABLE ActiveSer (id INT(11) NOT NULL AUTO_INCREMENT,serial_number VARCHAR(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,activation BIT NOT NULL,activation_Date DATETIME NOT NULL,Expire_Date DATETIME NOT NULL,License_plate VARCHAR(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,Phone INT(11) NOT NULL,Vehicle_type VARCHAR(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,addTime DATETIME NOT NULL,op_user VARCHAR(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,PRIMARY KEY (id),UNIQUE (serial_number),UNIQUE (License_plate))"
// 未激活序列表

var  noActSql = "CREATE TABLE NoActiveSer (id INT(11) NOT NULL AUTO_INCREMENT,serial_number VARCHAR(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,activation BIT NOT NULL,addTime DATETIME NOT NULL,op_user VARCHAR(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,PRIMARY KEY (id),UNIQUE (serial_number))"

// 管理员信息
var ADMIN = "CREATE TABLE adminOption (id INT(11) NOT NULL AUTO_INCREMENT,op_user VARCHAR(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,op_password VARCHAR(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,Phone INT(11) NOT NULL,addTime DATETIME NOT NULL,PRIMARY KEY (id),UNIQUE (op_user))"

//防伪码
var  securityCode = "CREATE TABLE securityCode (id INT(11) NOT NULL AUTO_INCREMENT,securityCode VARCHAR(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,addTime DATETIME NOT NULL,op_user VARCHAR(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,PRIMARY KEY (id),UNIQUE (securityCode))"
var connection = mysql.createConnection(config)
connection.connect();
var  sqlQuery = [actSql,noActSql,ADMIN,securityCode];
// 添加表方法
function add(resolve,reject){
    for (var i = 0; i < sqlQuery.length; i ++){
        connection.query(sqlQuery[i],function(err,data){
            if(err) console.log(err)
            if(err){
                reject("err")
                
              }else{
                resolve('200 OK');
              }
        })
    }
}
new Promise(add).then((result)=>{
   var sqlData = [
        {
            addSql:"INSERT INTO ActiveSer(serial_number,activation,activation_Date,Expire_Date,License_plate,Phone,Vehicle_type,addTime,op_user) VALUES(?,?,?,?,?,?,?,?,?)",
            addSqlParams:["已激活序列号（示例可删除）",1,'2000-1-1','2001-1-1','京A.88888','1388888888','奥迪',new Date(),'示例用户']
        },
       {
            addSql:'INSERT INTO NoActiveSer(serial_number,activation,addTime,op_user) VALUES(?,?,?,?)',
            addSqlParams:["未激活序列号（示例可删除）",0,new Date(),"示例用户"]
        },
        {
            addSql:'INSERT INTO securityCode(securityCode,addTime,op_user) VALUES(?,?,?)',
            addSqlParams:["防伪码(示例可删除)",new Date(),"示例用户"]
        }
    ]
    
    for (item in sqlData ){
       connection.query(sqlData[item].addSql,sqlData[item].addSqlParams,function(err,data){
           if(err)  callback(err)
           callback(data)
       })
    }
})

}
