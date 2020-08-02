<template>
  <div class="d">
    <!-- 导航按钮 -->
    <img src="../assets/5.png" @click="xianshi=!xianshi">
    <input :class="{mohu:xianshi}" type="text" v-model="chen"><br/>
    <span @click="glly" :class="{mohu:xianshi}">管理留言</span><br/>
    <span @click="glwz" :class="{mohu:xianshi}">管理文章</span><br/>
    <span @click="xwz" :class="{mohu:xianshi}">写文章</span><br/>
    <!-- 导航 -->
    <jump v-show="xianshi" />
    <!-- 提示框 -->
    <div  class="d3" v-show="show__.show___">{{show__.text}}</div>
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
            //管理密码
            chen:'',
            //导航显示
            xianshi:false,
            //提示
            show__:{
                show___:false,
                text:''
            },
        }
    },
    methods:{
        //管理留言
        glly(){
            if(this.chen==='10294519.'){
                window.sessionStorage.setItem('chen','1')
                this.$router.push({path:'/article'})
            }
            this.chen=''
            this.show__.show___=true,
            this.show__.text='无权限'
            setTimeout(()=>{
                this.show__.show___=false
            },1000)
        },
        //管理文章
        glwz(){
            if(this.chen==='10294519.'){
                window.sessionStorage.setItem('chen','1')
                this.$router.push({path:'/usurschema'})
            }
            this.chen=''
            this.show__.show___=true,
            this.show__.text='无权限'
            setTimeout(()=>{
                this.show__.show___=false
            },1000)
        },
        //写文章
        xwz(){
            if(this.chen==='10294519.'){
                window.sessionStorage.setItem('chen','1')
                this.$router.push({path:'/write'})
            }
            this.chen=''
            this.show__.show___=true,
            this.show__.text='无权限'
            setTimeout(()=>{
                this.show__.show___=false
            },1000)
        },
    }
}
</script>

<style lang="scss" scoped>
    .d{
        width: 100%;
        height: 100vh;
        background-color: rgb(0,0,0);
        color: rgb(255,255,255);
        text-align: center;
        line-height: 23vh;
        >img{
            width: 25px;
            position: absolute;
            top: 30px;
            right: 7%;
            z-index: 2;
        }
        input{
        width: 80%;
        height: 40px;
        margin:0 auto;
        // position: absolute;
        // top: 25%;
        // left: 50%;
        // transform: translateX(-50%);
        background-color: rgb(0,0, 0);
        border: 1px solid rgb(255,255,255);
        border-top: none;
        border-left: none;
        border-right: none;
        box-shadow:none;
        color: rgb(255,255,255);
        font-size: 25px;
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