var app = require("express")();
var bodyParser = require("body-parser");
// 数据库链接
var mysql      = require('mysql');
var config = require("./backstage/mysql/sqlConfig")

// 仓库
var store = require("./store/index.js")
// 是否安装
var installBel = require("./store/install.js")
var createBase = require("./backstage/mysql/createBase")
var fs = require("fs")
app.use(bodyParser.urlencoded({
  extended: false
}));
var install = require("./backstage/mysql/index.js")
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
      res.send(200);
    } else {
      next();
    }
  });
// 验证是否需要安装
app.get("/ver",function(request,response){
    console.log(installBel.isBel)
    if(installBel.isBel === false){
        response.send({
            msg:"1000",
            message:"未安装"
        })
    }else if(installBel.isBel === true){
        response.send({
            msg:"10004",
            message:"已安装"
          })
    }
})
// 安装接口
app.post("/install",function(request,response){
    var req = request;
    var res = response;
    var data = '';
    req.on("data",function(chunk){
      data +=chunk
      console.log(data)
      data = JSON.parse(data)
      var test = function(resolve,reject){
        install(data,function(e){
          if(e == "ok"){
            resolve('200 OK');
          }else{
            reject("err")
          }
        })
      }
    new Promise(test).then((result)=>{
      console.log(config)
    var connection = mysql.createConnection(config)
     connection.connect(function(err,data){
          if(err){
            res.send({
              msg:1004,
              message:"链接错误"
            })
            console.log(err)
            return
          }
        var installBel = `module.exports = {isBel:true}`
        fs.writeFile("./store/install.js",installBel,function(){
          createBase(function(e){
            console.log(e)
          })
          res.send({
            meg:1000,
            message:"正在安装中"
          })
        })
     })
      
    }).catch((reject)=>{
      console.log(reject)
    })
    })
   
 
     
 
})
app.listen(1080)