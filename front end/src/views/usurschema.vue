<template>
    <div class="d">
        <img  src="../assets/5.png" @click="xianshi=!xianshi">
        <h1 :class="{mohu:xianshi}">欢迎</h1>
        <!-- 文章列表 -->
        <usus  :class="{mohu:xianshi}"/>
        <!-- 导航 -->
        <jump v-show="xianshi" />
    </div>
</template>

<script>

import usus from '../components/usus'
import jump from '../components/jump'

export default {
    components:{
        usus,
        jump
    },
    data(){
        return{
            //导航显示
            xianshi:false,

        }
    },
    mounted(){
        
    },
    //页面结束
    beforeDestroy(){
        window.sessionStorage.removeItem("chen")
    },
}
</script>

<style lang="scss" scoped>
    .d{
        width: 100%;
        height: 100%;
        background-color: rgb(0, 0,0);
        h1{
            color: rgb(255,255,255);
            padding: 50px 0 0 10%;
        }
        >img{
            width: 25px;
            position: absolute;
            top: 30px;
            right: 7%;
            z-index: 2;
        }
    }
    .mohu{
        background-color: rgb(0, 0, 0)no-repeat fixed;
        background-size: cover;
        box-sizing: border-box;
        filter: blur(5px);
    }
</style>