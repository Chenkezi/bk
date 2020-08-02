var express=require('express')
var mongoose=require('mongoose')

var router=express.Router()

//链接数据库
mongoose.connect('mongodb://localhost/test',{useNewUrlParser:true,useUnifiedTopology: true})


//留言
var userSchema=mongoose.model('userSchema',new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    text:{
        type:String, 
        required:true
    },
    date:{
        type:String, 
        required:true
    },
    sho:{
        type:Boolean,
        required:true,
        default:true
    }

}))

//文章
var article=mongoose.model('article',new mongoose.Schema({
    name:{
        type:String,
        required:true,
        default:'匿名'//默认值
    },
    text:{
        type:String, 
        required:true
    },
    date:{
        type:String, 
        required:true
    },
    sho:{
        type:Boolean,
        required:true,
        default:true
    }

}))



//文章查询
router.get('/article',(req,res)=>{
    article.find(function(err,students){
        if(err){
            return res.send('0')
        }
        res.send(students)
    })
})

//留言查询
router.get('/userSchema',(req,res)=>{
    userSchema.find(function(err,students){
        if(err){
            return res.send('0')
        }
        res.send(students)
    })
})

//留言添加
router.post('/userSchema',(req,res)=>{
    new userSchema(req.body).save((err,user)=>{
        if(err){
            return res.send("0")
        }
        res.send("1")
    })
})


//文章添加
router.post('/article',(req,res)=>{
    new article(req.body).save((err,user)=>{
        if(err){
            return res.send('0')
        }
        res.send('1')
    })
})

//留言删除
router.get('/userSchema/delete',function(req,res){
    // console.log(req.query.id)
    userSchema.findOneAndDelete({_id:req.query.id},function(err){
        if(err){
            return res.send('0')
        }
        res.send('1')
    })
})

//文章删除
router.get('/article/delete',function(req,res){
    article.findOneAndDelete({_id:req.query.id},function(err){
        if(err){
            return res.send('0')
        }
        res.send('1')
    })
})

//留言编辑
router.get('/userSchema/edit',function(req,res){
    userSchema.findById(req.query.id.replace(/"/g,'',),function(ess,student){
        if(ess){
            return res.send('0')
        }
        // console.log(parseInt(req.query.id))
        res.send(student)
    })
})

router.post('/userSchema/edit',function(req,res){
    // var id=req.body._id.replace(/"/g,'')
    console.log(req)
    // userSchema.findByIdAndUpdate(id,req.body,function(err){
    //     if(err){
    //         return res.send('0')
    //     }
    //     res.send('1')
    // })
})

//文章编辑
router.get('/article/edit',function(req,res){
    article.findById(req.query.id.replace(/"/g,'',),function(ess,student){
        if(ess){
            return res.send('0')
        }
        res.send(student)
    })
})

router.post('/article/edit',function(req,res){
    var id=req.body.id.replace(/"/g,'')
    article.findByIdAndUpdate(id,req.body,function(err){
        if(err){
            return res.send('0')
        }
        res.send('1')
    })
})


module.exports=router
