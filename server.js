//引入path内置模块
var path = require('path');
//引入express依赖模块,用来启动静态服务器
var express = require('express');
var proxy=require('http-proxy-middleware')
//实例express
var app = express();

app.use('/api',proxy({
	target:'http://guanjp.com:9805',
	changeOrigin:true,
	ws:true,
	cookieRewrite:true,
	pathRewrite:{
		'^/api':'/'
	}
}));

console.log(__dirname);
//拼接物理路径，用来指定虚拟路径的访问（静态页面文件）
var viewsPath = path.join(__dirname,'views');
console.log(viewsPath);
//指定访问页面的路径
app.use('/',express.static(viewsPath));

//拼接物理路径，用来指定虚拟路径的访问（静态页面文件）
var publicPath = path.join(__dirname,'public');
//指定访问页面的路径
app.use('/public',express.static(publicPath));

//监听端口9999,用来启动服务
app.listen(16919,function(){
	console.log('server run at port 16919');
})


var sha1 = require("sha1");
    //定义验证接口
    app.use('/wexin', function(req, res){
        //获取get传递数据
        var obj = req.query;
        console.log("weixin", obj);
        //将数据添加到一个数组
        var arr = ["testtask", obj.timestamp, obj.nonce];
        //排序
        arr.sort();

        //拼接字符串，并进行 sha1 加密
        var str = sha1(arr.join(""));
        console.log('sha1   ', str);

        console.log('signature', obj.signature === str)
        //匹配是否是微信请求
        if( obj.signature === str){
            //成功返回 echostr 随机字符串
            res.send(obj.echostr).end();
        }else{
            res.send("验证失败").end();
        }
    });

module.exports = app;