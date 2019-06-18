var app = require("express")();
var bodyParser = require("body-parser");
// 仓库
var store = require("./store/index.js")
// 是否安装
var installBel = require("./store/install.js")
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
    if(installBel.isBel == false){
        response.send({
            msg:"1000",
            message:"未安装"
        })
    }else if(installBel.isBel == true){
        response.send({
            msg:"10004",
            message:"已安装"        })
    }
})
// 安装接口
app.post("/install",function(request,response){
    var req = request;
    var res = response;
    install(req.body,function(e){
        console.log(e)
    })
    // console.log()

})
app.listen(1080)