//引包
var express=require('express')

var bodyParser=require('body-parser')

var cors = require('cors')


var router=require('./router')


//创建服务器应用程序
var app= express()


//公开指定目录
app.use(express.static(__dirname+'/public'))

app.use(cors());

//设置跨域请求
app.all('*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});


//配制body-parser中间件（用来解析post请求）
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//路由
app.use(router)




app.listen(3001,()=>{
    console.log('192.168.31.188:3000')
})