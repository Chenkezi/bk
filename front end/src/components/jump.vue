<template>
    <div class="D4">
      <div @click.stop class="d4">
        <div><span @click.stop="home">首页</span></div>
        <div><span @click.stop="userSchema_">文章</span></div>
        <div><span @click.stop="article_">留言</span></div>
        <img src="../assets/2.png" @click.stop="chen">
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            route:''
        }
    },
    mounted(){
      this.route=this.$route.path
    },
    methods:{
    //留言页面跳转
    article_(){
        window.sessionStorage.removeItem("chen")
        if(this.route==='/article'){
            this.$router.go(0);
            return
        }
        this.$router.push({path:'/article'})
    },
    //文章页面跳转
    userSchema_(){
        window.sessionStorage.removeItem("chen")
        if(this.route==='/usurschema'){
            this.$router.go(0);
            return
        }
      this.$router.push({path:'/usurschema'})
    },
    //首页页面跳转
    home(){
        window.sessionStorage.removeItem("chen")
        if(this.route==='/home'){
            this.$router.go(0);
            return
        }
      this.$router.push({path:'/home'})
    },
    //管理人员
    chen(){
        window.sessionStorage.removeItem("chen")
        if(this.route==='/management'){
            this.$router.go(0);
            return
        }
        this.$router.push({path:'/management'})
    }
  }
}
</script>

<style lang="scss" scoped>
  .D4{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
  .d4{
    z-index: 2;
    position: absolute;
    top: 20%;
    bottom: 20%;
    left: 20%;
    right: 20%;
    text-align: center;
    color: rgba(255,255,255,1);
    line-height: 15vh;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 15px;
    div{
      span{
        cursor:pointer;
      }
    }
    img{
      width: 40px;
      cursor:pointer;
    }
  }

</style>