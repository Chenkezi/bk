<template>
    <div class="article">
        <!-- 导航按钮 -->
        <img src="../assets/5.png" @click="xianshi=!xianshi">

        <h1 :class="{mohu:xianshi}">欢迎留言</h1>
        <!-- 添加留言表单 -->
        <div class="d1" :class="{mohu:xianshi}">
            <form action="action_page.php" method="post">
                <input class="i" :class="{show_:!sho_}" type="text" v-model="userSchema.name" maxlength="5" :placeholder="sho_ ? '呢称':'不可为空'">
                <br/>
                <textarea class="i1" :class="{show_:!show_}" maxlength="18" v-model="userSchema.text" cols="50"  rows="3" :placeholder="show_ ? '输入内容':'不可为空'"/>
            </form>
            <img src="../assets/4.png" @click="userSchema_post">
        </div>
        <!-- 留言列表 -->
        <div class="d2" :class="{mohu:xianshi}">
            <div class="d21" v-for="(item,i) in article" :key="i">
                <h2>{{item.name}}</h2>
                <h5>{{item.text}}</h5>
                <div>{{item.date}}</div>
                <input @click.stop="sho(item._id)" v-if="gl" :checked=item.show type="checkbox">
                <img src="../assets/delete.png" v-if="gl"  @click="delet(item._id)">
            </div>
        </div>
        <!-- 提示框 -->
        <div  class="d3" v-show="show__.show___">{{show__.text}}</div>
        <!-- 导航 -->
        <jump v-show="xianshi" />
    </div>

</template>

<script>

import jump from '../components/jump'

export default {
    components:{
        jump
    },
    data(){
        return{
            //删除按钮
            gl:'',
            //提示
            show__:{
                show___:false,
                text:''
            },
            //警告不可为空
            show_:true,
            sho_:true,
            //提交留言数据
            userSchema:{
                name:'',
                text:'',
            },
            //留言数据
            article:[],
            //导航显示
            xianshi:false
        }
    },
    mounted(){
        this.userSchema.name=this.userSchema.text=''
        this.show_=true
        this.article=[]
        this.userSchema_get()
        this.gl=window.sessionStorage.getItem("chen")
    },
    //页面结束
    beforeDestroy(){
        this.gl=''
        window.sessionStorage.removeItem("chen")
    },
    methods:{
        //留言列表刷新
        userSchema_get(){
            this.article=[]
            this.$axios.get('http://47.110.140.226:3001/userSchema').then(res=>{
                for(var value of res.data){
                  if(this.gl){
                    this.article.unshift(value)
                  }else{
                    if(!value.sho)return
                    this.article.unshift(value)
                  }
                }
            })
        },
        //发布留言
        userSchema_post(){
            var time = new Date();
            this.userSchema.date=time.getFullYear()+'-'+(time.getMonth()+1)+'-'+time.getDate()+' '+time.getHours()+':'+time.getMinutes()
            if(this.userSchema.text===''){
                this.show_=false
            }else{
                this.show_=true
            }
            if(this.userSchema.name===''){
                this.sho_=false
            }else{
                this.sho_=true
            }
            if(this.userSchema.name!=='' && this.userSchema.text!==''){
                this.$axios.post('http://47.110.140.226:3001/userSchema',this.userSchema).then(res=>{
                    if(res.data==1){
                        this.show_=true
                        this.show__.show___=true,
                        this.show__.text='留言成功'
                        this.userSchema_get()
                        setTimeout(()=>{
                            this.show__.show___=false
                        },1000)
                        this.userSchema.name=this.userSchema.text=''
                        return
                    }
                    this.show__.show___=true,
                    this.show__.text='留言失败'
                    setTimeout(()=>{
                        this.show__.show___=false
                    },1000)
                })
            }
        },
        //删除留言
        delet(id){
            this.$axios.get('http://47.110.140.226:3001/userSchema/delete',{params: {id: id}}).then(err=>{
                if(err==0){
                    this.show__.show___=true,
                    this.show__.text='删除失败'
                    this.$router.go(0);
                    setTimeout(()=>{
                        this.show__.show___=false
                    },1000)
                    return
                }
                this.show__.show___=true,
                this.show__.text='删除成功'
                this.$router.go(0);
                setTimeout(()=>{
                    this.show__.show___=false
                },1000)
                this.userschema_get()
            })
        },
        //留言是否展示
        sho(id){
            this.show__.show___=true,
            this.show__.text='敬请期待'
            this.userSchema_get()
            setTimeout(()=>{
                this.show__.show___=false
            },1000)
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
        height: 50vh;
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
            height: 18%;
            position:absolute;
            top: 30%;
            left: 10%;
            font-size: 23px;
        }
        img{
            width: 40px;
            transform: rotate(220deg);
            position: absolute;
            top: 55%;
            right: 20%;
            border: 1px solid rgb(255, 255, 255);
            border-radius: 50%;
            cursor: pointer;
            // background-color: rgb(81, 85, 97);
        }
    }
    
    .d2{
        width: 80%;
        margin: 0 auto;
        padding-bottom: 50px;
        .d21{
            width: 100%;
            border: 1px solid rgb(255, 255, 255);
            margin-top: 50px;
            border-radius: 5px;
            position: relative;
            input{
                margin: 4px;
            }
            h2{
                margin: 10px;
            }
            h5{
                display: inline-block;
                white-space: nowrap; 
                width: 100%; 
                overflow: hidden;
                text-overflow:ellipsis;
                text-indent:40px;
                margin-bottom: 30px;
            }
            div{
                position: absolute;
                right: 20px;
                bottom: 0;
            }
            img{
                width: 30px;
                position: absolute;
                top: 5px;
                right: 5px;
            }
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