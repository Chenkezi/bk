<template>
  <div class="chen">
      <input type="text" v-model="chen">
      <div>
        <button @click="liuyan" type="button">ok</button>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            chen:''
        }
    },
    methods:{
        liuyan(){
            if(this.chen===''){
                window.sessionStorage.setItem('chen','1')
                this.$router.push({path:'/management'})
            }
            this.chen=''
        }
    }
}
</script>

<style lang="scss" scoped>

    .chen{
        width: 100%;
        height: 100%;
        background-color: rgb(0,0, 0);
        >div{
        height: 40px;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translateX(-50%);
        button{
            padding: 10px;
            margin: 10px;
            background-color: rgb(0,0, 0);
            border: 1px solid rgb(255,255,255);
            color: rgb(255,255,255);
            font-size: 20px;
        }
    }
    }
    input{
        width: 80%;
        height: 50px;
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgb(0,0, 0);
        border: 1px solid rgb(255,255,255);
        color: rgb(255,255,255);
        font-size: 30px;
    }
    
</style>