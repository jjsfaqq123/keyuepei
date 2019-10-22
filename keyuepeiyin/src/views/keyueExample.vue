<template>
  <div class="keyueExample">
      <!-- 标题 -->
    <div class="title">
      <div class="titleImgs">
        <img src="../assets/imgs/柯悦7.26/组 6.png" alt />
      </div>
      <div class="title_firstText">
        <span>精选案例</span>
        <p></p>
      </div>
      <p>SELECTED CASES</p>
    </div>
    <!-- 详情表 -->
    <ul>
      <li v-for="(item,index) of music" :key="index">
        <audio :id="'audio'+index" src="http://yy.langqiyun.com/live.mp3"></audio>
        <div class="defaults" v-if="!item.play">
          <div></div>
          <p>{{item.titlte}}</p>
          <button @click="musicPlay(item,index)">
            <img src="../assets/imgs/柯悦案例_slices/播放.png" alt />
          </button>
        </div>
        <div class="play" v-else>
          <img src="../assets/imgs/柯悦案例_slices/暂停.png" alt  @click="musicPause(item,index)"/>
          <img src="../assets/imgs/柯悦案例_slices/0188e9da2dced86d92c1e9f38b7ee20.png"  alt="">
          <p>喜马拉雅FM</p>
          <div>
              <span></span>
              <ul>
                  <li>大气稳重</li>
                  <li>
                      <p>女160<p>
                      <p>2360 <span>人气</span> </p>
                  </li>
              </ul>
          </div>
        </div>
      </li>
    </ul>
    <!-- 分页器 -->
    <el-pagination
        background
         layout="prev, pager, next,total,jumper"
        :total="70">
        </el-pagination>
  </div>
</template>

<style scoped>
.keyueExample {
  width: 1200px;
  margin: 0 auto;
}
.keyueExample > ul {
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 29px;
}
.keyueExample > ul > li {
  width: 385px;
  height: 287px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 24px rgba(221, 221, 221, 1);
  border-radius: 10px;
  margin-bottom: 23px;
}
/*未播放状态*/
.defaults {
  padding-top: 39px;
  padding-bottom: 24px;
  text-align: center;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
}
.defaults > div {
  width: 105px;
  height: 105px;
  background: url("../assets/imgs/柯悦案例_slices/图层 822(1).png")
    rgba(0, 0, 0, 1);
  border-radius: 50%;
  margin: 0 auto;
}
.defaults > p {
  margin-top: 19px;
  margin-bottom: 23px;
}
.defaults > button {
  cursor: pointer;
  width: 148px;
  height: 53px;
  background: rgba(15, 6, 111, 1);
  border-radius: 27px;
  outline: none;
  border: none;
}
/*播放状态*/
.play {
  width: 385px;
  height: 287px;
  background: url("../assets/imgs/柯悦案例_slices/fundo-abstrato-de-ondas-de-particulas-de-equalizador_23-2148185705.png")
    rgba(15, 6, 111, 1) no-repeat;
    box-shadow: 0px 0px 24px rgba(221, 221, 221, 1);
    border-radius: 10px;
    position: relative;
    font-size: 18px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
}
.play > img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  z-index:100;
}
.play>img:nth-child(2){
  z-index:50;
}
.play>img:nth-child(2){
  animation: play 20s linear infinite;
}
@keyframes play {
  0% {transform: rotate(0)}
  100% {transform: rotate(360deg)}
}
.play>p{
    margin-left:27px;
    padding-top:26px;
}
.play>div{
    margin-left:27px;
    margin-top:162px;
    display: flex;
    justify-content: center;
}
.play>div>span{
    display:block;
    width:51px;
    height:51px;
    background:url('../assets/imgs/柯悦案例_slices/图层 823.png') rgba(0,0,0,1);
    border-radius:50%;
    margin-right:18px;
}
.play>div>ul>li:last-child{
    display:flex;
    width:221px;
    justify-content: space-between;
    align-items: center;
}
.play>div>ul>li:last-child>p:last-child{
    font-size:14px;
}   
.play>div>ul>li:last-child>p:last-child>span{
    
    display:inline-block;
    width:39px;
    height:20px;
    background:rgba(255,255,255,1);
    border-radius:6px;
    color:rgba(15,6,111,1);
    text-align: center;
    line-height: 20px;
    margin-left:9px;
}
/*分页器*/
.el-pagination{
    text-align: center;
    margin-bottom: 47px;
}
</style>

<script>
export default {
  data() {
    return {
      music: [
        { titlte: "喜马拉雅FM", play: false },
        { titlte: "喜马拉雅FM", play: false },
        { titlte: "喜马拉雅FM", play: false },
        { titlte: "喜马拉雅FM", play: false },
        { titlte: "喜马拉雅FM", play: false },
        { titlte: "喜马拉雅FM", play: false },
        { titlte: "喜马拉雅FM", play: false },
        { titlte: "喜马拉雅FM", play: false },
        { titlte: "喜马拉雅FM", play: false },
        { titlte: "喜马拉雅FM", play: false },
        { titlte: "喜马拉雅FM", play: false },
        { titlte: "喜马拉雅FM", play: false }
      ]
    };
  },
  methods: {
    musicPlay(item,index) {
      //   this.isplayed=true;
      this.music.forEach((item2,index2)=>{
        if(index != index2){
          item2.play = false;
        }
      });
      item.play = true;
      var audio=document.getElementById("audio"+index);
      this.musicPauseAll();
      audio.play();
      console.log(audio.duration)
    },
    musicPause(item,index){
      item.play=false;
      var audio=document.getElementById("audio"+index);
       audio.pause();
      console.log(audio.duration)
    },
    
  },
  mounted(){
    this.music.forEach((item,index)=>{
      
    })
  },
};
</script>
