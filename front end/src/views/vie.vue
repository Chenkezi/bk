<template>
  <div class="d">
    <!-- 导航按钮 -->
    <img src="../assets/5.png" @click="xianshi=!xianshi">
      <div :class="{mohu:xianshi}">
        <h2>{{a.name}}</h2>
        <p>{{a.date}}</p>
      </div>
      <p :class="{mohu:xianshi}">{{a.text}}</p>
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
    props:{

    },
    data(){
        return{
            //导航框显示
            xianshi:false,
            id:'',
            a:{}
        }
    },
    //页面结束
    beforeDestroy(){
        window.sessionStorage.removeItem("chen")
    },
    mounted(){
        this.a={}
        this.$axios.get('http://47.110.140.226:3001/article/edit',{params: {id: this.$route.query.id}}).then(err=>{
            this.a=err.data
        })
    } 
}
</script>

<style lang="scss" scoped>
    .d{
        width: 100%;
        height: 100vh;
        color: rgb(255,255,255);
        background-color: rgb(0,0,0,);
        img{
            width: 30px;
            position: absolute;
            top:40px;
            right: 10%;
            z-index: 2;
        }
        div{
            h2{
                padding: 50px 0 10px 40px;
            }
            p{
                padding: 0 0 50px 40px;
                font-size: 12px;
            }
        }
        >p{
            padding: 0 40px 40px 40px;
            letter-spacing: 3px;
            line-height: 30px;
            text-indent:40px;
            background-color: rgb(0,0,0,);
            word-wrap: break-word;
        }
    }
    .mohu{
    background-color: rgb(0, 0, 0)no-repeat fixed;
    background-size: cover;
    box-sizing: border-box;
    filter: blur(5px);
}
</style>