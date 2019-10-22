<template>
  <div id="app">
    <my-header></my-header>
    <router-view />
    <my-footer></my-footer>
  </div>
</template>
<script>
export default {
    mounted() { 
      /*
        页面跳转顶部
        // this.$router.afterEach((to, from, next) => {
        //   window.scrollTo(0, 0)
        // });
        */
      // 获取所有audios
      // console.log("music",123);

    var audios = document.getElementsByTagName("audio");
  // 暂停函数
        function pauseAll() {
          var self = this;
          [].forEach.call(audios, function (i) {
              // 将audios中其他的audio全部暂停
              i !== self && i.pause();
          })
        }
            // 给play事件绑定暂停函数
      // [].forEach.call(audios, function (i) {
      //   i.addEventListener("play", pauseAll.bind(i));
      // })
        
    }

  
    
}
</script>


<style>

  @import './assets/css/common.css';
  /*音乐播放器*/
    /*播放品质背景*/
  .pzbj .aplayer .aplayer-body>.aplayer-pic{
      width:146px;
      height:146px;
      border-radius: 50%!important;
      background-color:transparent!important;
    }
   .pzbj .aplayer .aplayer-body{
      align-items: center;
      height: 100%;
      padding-left:20px;
    }
    
   .pzbj .aplayer-volume-wrap button{
      display:none;
    } 
    .pzbj .aplayer-controller .aplayer-time .aplayer-volume-wrap+.aplayer-icon{
      display: none;
    }
    .pzbj .aplayer-controller svg{
      display: none;
    }
    .pzbj .aplayer-body .aplayer-pic .aplayer-pause{
      width: 16px;
      height: 16px;
      border: 2px solid #fff;
      bottom: 50%;
      right: 50%;
      margin: 0 -15px -15px 0;
    }
    /*试听音乐*/
    .goodmusic_container_left .aplayer{
      height:100%;
      box-shadow:none;
      background:transparent;
    }
    .goodmusic_container_left .aplayer-played{
      background:linear-gradient(90deg,rgba(2,80,197,1) 0%,rgba(212,63,141,1) 100%)!important;
      border-radius:3px;
    }
    /*musicTeacher_register----aplayer*/
    .musicTeacher_register .aplayer{
      width:100%;
      height: 100%;
    }
  /*进度条*/
  .el-tabs--border-card{
    border:none!important;
    box-shadow:none!important;
    background: transparent!important;
    
  }
  .el-tabs--border-card>.el-tabs__header{
    border:none!important;
    background:transparent!important;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item{ 
    border:0!important;
    padding:0!important;
    margin:0 20px!important;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
    color:rgba(15,6,111,1)!important;
     border:0!important;
     border-bottom:2px solid rgba(15,6,111,1)!important;
    padding:0!important;
    margin:0 20px!important;
    background: transparent!important;
  }
   .el-progress-bar{
        width:256px!important;
        height: 10px!important;
        margin-left:10px;
        margin-right:10px!important;
        padding:0!important;
    }
    .el-progress__text{
      display: none!important;
    }
  .el-progress-bar__inner{
        background:linear-gradient(90deg,rgba(2,80,197,1) 0%,rgba(212,63,141,1) 100%)!important;
    }
  /*轮播图*/
  .el-carousel__container{
    height:100%;
  }
  .el-table th{
        width:1200px;
        height:50px;
        background:rgba(246,246,246,1)!important;
        margin-bottom:27px!important;
       
    }
     .el-table tr{
        width:1200px;
        height:50px;
        /* background:rgb(228, 214, 214)!important; */
        border:0!important;
    }
    .el-table tr:hover{
      background:#fff!important;
      border:0!important;
    }
    .el-table .cell {
      text-align: center
    }
  
</style>
