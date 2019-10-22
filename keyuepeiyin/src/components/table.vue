<template>
<div class="tableC">
  <el-table
    :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
  >
    <el-table-column
      :label="name"
      width="450px"
      >
      <template slot-scope="scope">
        <span style="margin-left: 15px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      :label="title"
      width="450px"
     >
      <template slot-scope="scope">
        <span style="margin-left: 15px">{{ scope.row.title }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="试听"
     >
  
      <template slot-scope="scope">
        <audio :src="scope.row.src" :id="'audio'+scope.$index"></audio>
        <span style="margin-left: 15px" >
          <img v-if="playIndex!=scope.$index"  src="../assets/imgs/musicExample/试听(1).png" alt="" @click="playMusic(scope.$index)">
          <img v-else width="24px" src="../assets/imgs/musicExample/试听.gif" alt="" @click="pauseMusic(scope.$index)">
        </span>
      </template>
        
    </el-table-column>
    <el-table-column
      label="下载"
     >
      <template>
        <span style="margin-left: 15px"><img src="../assets/imgs/musicExample/下载(10).png" alt=""></span>
      </template>
    </el-table-column>
  
  
  </el-table>


 <el-pagination
        small
        background
        layout="prev, pager, next,total,jumper"
        :total="tableData.length"
        :page-size="pagesize"  
        :current-page="currentPage"
        @current-change="handleCurrentChange"
        >
</el-pagination>
</div>
</template>
<style scoped>

    /*表格*/
    .tableC{
       
        box-shadow:0px 0px 27px rgba(231,237,255,0.08);
        opacity:1;
        margin:0 auto;
    }
    /* .tableC .el-table__body tbody{
       background:url('../assets/imgs/musicExample/资源1@4x拷贝.png') !important;
    } */
    
    .el-button--mini{
        margin-right:35px;
        border:none;
        outline:none;
        /* background:transparent; */
    }
    .el-button--mini:hover{
        border:none;
        outline:none;
        /* background:transparent;  */
    }
    .el-tag{
        /* background-color:transparent; */
        color:#000;
        border:none;
    }
    .el-table .cell>span>img{
      cursor: pointer;
     
      transition: .5s linear;
    }
    .el-table .cell>span>img:hover{
       transform: scale(1.1);
    }
    /*分页*/
    .el-pagination{
        margin-top:48px;
        text-align:center;
    }
    .el-pager li {
    margin: 0 8px!important;

}
</style>


<script>
  export default {
    data() {
      return {
        tableData: [
        {date: '男20号-项目-九江银行设计说明配音',title: '是一家全球化人工智能信息...',src:"http://yy.langqiyun.com/live.mp3"}, 
        {date: '男20号-项目-九江银行设计说明配音',title: '是一家全球化人工智能信息...',src:"http://yy.langqiyun.com/live.mp3"}, 
        {date: '男20号-项目-九江银行设计说明配音',title: '是一家全球化人工智能信息...',src:"http://yy.langqiyun.com/live.mp3"}, 
        {date: '男20号-项目-九江银行设计说明配音',title: '是一家全球化人工智能信息...',src:"http://yy.langqiyun.com/live.mp3"}, 
        {date: '男20号-项目-九江银行设计说明配音',title: '是一家全球化人工智能信息...',src:"http://yy.langqiyun.com/live.mp3"}, 
        {date: '男20号-项目-九江银行设计说明配音',title: '是一家全球化人工智能信息...',src:"http://yy.langqiyun.com/live.mp3"}, 
        {date: '男20号-项目-九江银行设计说明配音',title: '是一家全球化人工智能信息...',src:"http://yy.langqiyun.com/live.mp3"}, 
        {date: '男20号-项目-九江银行设计说明配音',title: '是一家全球化人工智能信息...',src:"http://yy.langqiyun.com/live.mp3"}, 
        {date: '男20号-项目-九江银行设计说明配音',title: '是一家全球化人工智能信息...',src:"http://yy.langqiyun.com/live.mp3"}, 
        {date: '男20号-项目-九江银行设计说明配音',title: '是一家全球化人工智能信息...',src:"http://yy.langqiyun.com/live.mp3"}, 
        {date: '男20号-项目-九江银行设计说明配音',title: '是一家全球化人工智能信息...',src:"http://yy.langqiyun.com/live.mp3"}, 
        {date: '男20号-项目-九江银行设计说明配音',title: '是一家全球化人工智能信息...',src:"http://yy.langqiyun.com/live.mp3"}, 
        {date: '男20号-项目-九江银行设计说明配音',title: '是一家全球化人工智能信息...',src:"http://yy.langqiyun.com/live.mp3"}, 
        {date: '男20号-项目-九江银行设计说明配音',title: '是一家全球化人工智能信息...',src:"http://yy.langqiyun.com/live.mp3"}, 
        {date: '男20号-项目-九江银行设计说明配音',title: '是一家全球化人工智能信息...',src:"http://yy.langqiyun.com/live.mp3"}, 
        {date: '男20号-项目-九江银行设计说明配音',title: '是一家全球化人工智能信息...',src:"http://yy.langqiyun.com/live.mp3"}, 
        {date: '男20号-项目-九江银行设计说明配音',title: '是一家全球化人工智能信息...',src:"http://yy.langqiyun.com/live.mp3"}, 
        {date: '男20号-项目-九江银行设计说明配音',title: '是一家全球化人工智能信息...',src:"http://yy.langqiyun.com/live.mp3"}, 
        {date: '男20号-项目-九江银行设计说明配音',title: '是一家全球化人工智能信息...',src:"http://yy.langqiyun.com/live.mp3"}, 
        {date: '男20号-项目-九江银行设计说明配音',title: '是一家全球化人工智能信息...',src:"http://yy.langqiyun.com/live.mp3"}, 
        {date: '男20号-项目-九江银行设计说明配音',title: '是一家全球化人工智能信息...',src:"http://yy.langqiyun.com/live.mp3"}, 
        {date: '男20号-项目-九江银行设计说明配音',title: '是一家全球化人工智能信息...',src:"http://yy.langqiyun.com/live.mp3"}, 
        {date: '男20号-项目-九江银行设计说明配音',title: '是一家全球化人工智能信息...',src:"http://yy.langqiyun.com/live.mp3"}, 
        {date: '男20号-项目-九江银行设计说明配音',title: '是一家全球化人工智能信息...',src:"http://yy.langqiyun.com/live.mp3"}, 
        ],
        pagesize:30,
        currentPage:1,
        name:'音段名称',
        title:'信息简介',
        playIndex:-1,
      }
    },
    mounted(){
      this.musicListenPlay();
    // // 获取所有audios
    //   var audios = document.getElementsByTagName("audio");
    //   // 暂停函数
    //   function pauseAll() {
    //     var self = this;
    //     [].forEach.call(audios, function (i) {
    //         // 将audios中其他的audio全部暂停
    //         i !== self && i.pause();
    //     })
    //   }
    //   // 给play事件绑定暂停函数
    //   [].forEach.call(audios, function (i) {
    //     i.addEventListener("play", pauseAll.bind(i));
    //   })   
  }, 
    methods: {
      handleCurrentChange(val){
        this.currentPage = val; 		
    },
    playMusic(index){
      console.log(index);
      var audio=document.getElementById("audio"+index);
      this.playIndex=index;
      if(this.playIndex==index){
        this.musicPauseAll();
        audio.play();
      }else{
        audio.pause();
      }
    
    },
    pauseMusic(index){
      var audio=document.getElementById("audio"+index);
      this.playIndex=-1;
      audio.pause();
    }


  },
   
}
</script>