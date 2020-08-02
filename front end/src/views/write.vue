<template>
    <div class="article">
        <!-- 导航按钮 -->
        <img src="../assets/5.png" @click="xianshi=!xianshi">
        <h1 :class="{mohu:xianshi}">文章</h1>
        <!-- 添加文章表单 -->
        <div class="d1" :class="{mohu:xianshi}">
            <form action="action_page.php" method="post">
                <input class="i" type="text" v-model="userSchema.name" placeholder="标题">
                <br/>
                <textarea class="i1" :class="{show_:!show_}" v-model="userSchema.text" :placeholder="show_ ? '输入内容':'不可为空'"/>
            </form>
            <img src="../assets/4.png" @click="userSchema_post">
        </div>
        <!-- 提示框 -->
        <div :class="{mohu:xianshi}" class="d3" v-show="show__.show___">{{show__.text}}</div>
        
        <!-- 导航 -->
        <jump v-show="xianshi" />
    </div>

</template>

<script>

import jump from '../components/jump'
import usus from '../components/usus'

export default {
    components:{
        jump,
        usus
    },
    data(){
        return{
            //传值给子组件更新列表
            // mag:false,
            //提示
            show__:{
                show___:false,
                text:''
            },
            //警告不可为空
            show_:true,
            //提交留言数据
            userSchema:{
                name:'',
                text:'',
                date:''
            },
            //导航显示
            xianshi:false
        }
    },
    mounted(){
        // this.userSchema.name=this.userSchema.text=''
        this.show_=true
        this.gl=window.sessionStorage.getItem("chen")
    },
    //页面结束
    beforeDestroy(){
        this.gl=''
        window.sessionStorage.removeItem("chen")
    },
    methods:{
        //发布文章
        userSchema_post(){
            var time = new Date();
            this.userSchema.date=time.getFullYear()+'-'+(time.getMonth()+1)+'-'+time.getDate()+' '+time.getHours()+':'+time.getMinutes()
            if(this.userSchema.text===''){
                this.show_=false
                return
            }
            this.$axios.post('http://47.110.140.226:3001/article',this.userSchema).then(res=>{
                if(res===0){
                    this.show__.show___=true,
                    this.show__.text='发布失败'
                    setTimeout(()=>{
                        this.show__.show___=false
                    },1000)
                }
                this.show_=true
                this.show__.show___=true,
                this.show__.text='发布成功'
                this.mag=!this.mag
                setTimeout(()=>{
                    this.show__.show___=false
                },1000)
                this.userSchema.name=this.userSchema.text=''
            })
        },
        //删除文章
        delete__(id){
            this.$axios.get('http://47.110.140.226:3001/article/delete',{params: {id: id}}).then(err=>{
                // console.log(id)
                this.userSchema_get()
            })
        }
    },
    watch:{
        
    }
}
</script>

<style lang="scss" scoped>
    .show_{
        border:3px solid red!important;
    }
    .article{
        width: 100%;
        background-color: rgb(0, 0, 0);
        color: rgb(255, 255, 255);
        >img{
            width: 25px;
            position: absolute;
            top: 30px;
            right: 7%;
            z-index: 2;
        }
        
    }
    h1{
        padding: 50px 0 0 10%;
    }
    .d1{
        width: 100%;
        height: 90vh;
        .i,.i1{
        border: 1px solid rgb(255, 255, 255);
        color: rgb(255, 255, 255);
        background-color: rgb(0, 0, 0);
        }
        .i{
            width: 60%;
            height: 6%;
            position:absolute;
            top: 20%;
            left: 10%;
            font-size: 20px;
        }
        .i1{
            width: 80%;
            height: 60%;
            position:absolute;
            top: 30%;
            left: 10%;
            font-size: 23px;
        }
        img{
            width: 40px;
            transform: rotate(220deg);
            position: absolute;
            top: 92%;
            right: 20%;
            border: 1px solid rgb(255, 255, 255);
            border-radius: 50%;
            cursor: pointer;
            // background-color: rgb(81, 85, 97);
        }
    }
    .d3{
        width: 200px;
        height: 50px;
        background-color: rgba(255, 255, 255,0.5);
        border: 1px solid rgb(255, 255, 255);
        border-radius: 5px;
        position: fixed;
        top:90px;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        line-height: 50px;
    }
     .mohu{
        background-color: rgb(0, 0, 0)no-repeat fixed;
        background-size: cover;
        box-sizing: border-box;
        filter: blur(5px);
    }
</style>