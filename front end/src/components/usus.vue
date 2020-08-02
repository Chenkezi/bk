<template>
  <div class="d2">
      <div class="d21" @click.stop="details(item._id)" :class="{mohu:view_}" v-for="(item,i) in article" :key="i">
        <img class="img1" src="../assets/3.png">
        <h2 @click.stop="details(item._id)">{{item.name}}</h2>
        <h5 @click.stop="details(item._id)">{{item.text}}</h5>
        <div>{{item.date}}</div>
        <input @click.stop="sho_(item._id)" v-if="gl" :checked=item.show type="checkbox">
        <img v-if="gl" @click="delet(item._id)" class="img2" src="../assets/delete.png">
      </div>
        <!-- 提示框 -->
        <div class="d3" v-show="sh.sh_">{{sh.text}}</div>
       
    </div>
</template>

<script>


export default {
    // props:{
    //     mag:{
    //         type:Boolean
    //     }
    // },
    components:{
      
    },
    data(){
        return{
            article:[],
            //删除按钮显示
            gl:'',
            //提示
            sh:{
                sh_:false,
                text:''
            },
            //文章查看组件是否显示
            view_:false
        }
    },
    mounted(){
        this.article=[]
        this.gl=window.sessionStorage.getItem("chen")
        this.article_get()
    },
    //页面结束
    beforeDestroy(){
        this.gl=''
        window.sessionStorage.removeItem("chen")
    },
    methods:{
        //文章数据请求
        article_get(){
            this.article=[]
            this.$axios.get('http://47.110.140.226:3001/article').then(res=>{
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
        //查看文章详情
        details(id){
            if(this.gl)return
            this.$router.push({path:'/vie',query:{
　　　　　　　　id:id
　　　　　　}})
        },
        //删除文章
        delet(id){
            this.$axios.get('http://47.110.140.226:3001/article/delete',{params: {id:id}}).then(res=>{
                this.article_get()
            })
        },
        //内容是否展示
        sho_(id){
            this.sh.sh_=true,
            this.sh.text='敬请期待'
            this.article_get()
            setTimeout(()=>{
                this.sh.sh_=false
            },1000)
          // console.log(!this.article[1].sho)
          // const id_=this.article.findIndex(item=>{return item._id==id})
          // console.log(id_)
          // this.article[id_].sho=!this.article[id_].sho
          // console.log(this.article[id_])
          // this.$axios.post('http://192.168.31.188:3000/article/edit',this.article[id_]).then(res=>{
          //       this.article_get()
          //   })
        }
    },
    //监听父组件传过来的值，刷新列表
    // watch: { 
    //     'mag': {
    //         handler: function(newVal, oldVal) {
    //             this.article_get()
    //         }
    //     }
    // }
}
</script>

<style lang="scss" scoped>
  .d2{
    width: 100%;
    background-color: rgb(0, 0, 0);
    padding-bottom: 1px;
    .d21{
      margin: 50px 10%;
      border-top:1px solid rgba(255, 255, 255,0.7);
      color: rgba(255, 255, 255,0.7);
      position: relative;
      cursor:pointer;
      h2{
        transform:translateX(35px)
      }
      h5{
        display: inline-block;
        white-space: nowrap; 
        width: 100%; 
        overflow: hidden;
        text-overflow:ellipsis;
        text-indent:40px;
        margin: 15px 0;
      }
      .img1{
        width: 30px;
        position: relative;
        top: 36px;
      }
      div{
        position: absolute;
        right: 20px;
      }
      .img2{
          width: 30px;
          position: absolute;
          top: 5px;
          right: 5px;
      }
    }
    .d21:hover{
      color: rgba(255,255,255,1);
    }
  }
  .mohu{
        background-color: rgb(0, 0, 0)no-repeat fixed;
        background-size: cover;
        box-sizing: border-box;
        filter: blur(5px);
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
</style>