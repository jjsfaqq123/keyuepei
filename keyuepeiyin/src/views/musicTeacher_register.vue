<template>
<div class="wc">
    <div class="musicTeacher_register">
        <!-- 标题 -->
        <div class="title">
            <span>配音老师</span>><span>配音详情</span>
        </div>
        <!-- 图文 -->
        <div class="tuwen">
            <div class="tu">
            </div>
            <div class="wen">
                <div class="wentitle">
                    <p>吉吉老师</p>
                    <img src="../assets/imgs/配音老师-详情_slices/性别-女.png" alt="" height="35px;">
                    <p>粉丝：&nbsp;9999+ <img src="../assets/imgs/配音老师-详情_slices/添加(2).png" alt=""></p>
                    <p>关注：&nbsp;168</p>
                    <button>邀她配音</button>
                </div>
                <div class="geren">
                    <p>个人简历 :</p>
                    <div>配音是为影片或多媒体加入声音的过程。而狭义上指配音演员替角色配上声音，或以其它语言
                        代替原片中角色的语言对白。同时由于声音出现错漏，由原演员重新为片段补回对白的过程亦称为配音。录制摄影时演员的话音或歌声用别人的替代，也称为“配音”。<br>
                        配音是一门语言艺术，是配音演员们用自己的声音和语言在银幕后、话筒前进行塑造和完善各种活生生的、性格色彩鲜明的人物形象的一项创造性工作。<br>
                        吹替是一个日语词汇，一般翻译为译制配音（日语：吹替え、吹き替え（ふきかえ，Fukikae）），指将国外的电影重新配音，以方便本国人视听。
                    </div>
                </div>
            </div>
        </div>
        <!-- 配音选项卡 -->
        <div class="musicChoose">
            <el-tabs type="border-card">
            <el-tab-pane label="最佳配音">
                <ul>
                    <li v-for="i in 10" :key="i">{{i}}
                    <img v-if="playIndex!=i" src="../assets/imgs/配音老师-详情_slices/播放(4).png" alt=""  @click="play(i)">
                    <img v-else  src="../assets/imgs/配音老师-详情_slices/点击收听 (2).png" alt="" @click="pause(i)" width="26px">
                    <p>女160-宣传片【温馨解说 澳门】【城市宣传片/城市地区宣传/城市形象/经济开发区 】</p>
                    00:00   <el-progress :percentage="50" ></el-progress>  04:52
                    <audio src="http://yy.langqiyun.com/live.mp3" :id="'audio'+i" ref="audio"></audio>
                    </li>
                    <!-- <li v-for="(item,index) of musics" :key="index">
                        <aplayer  :music="item"></aplayer>
                    </li> -->
                </ul>
               
            </el-tab-pane>
            <el-tab-pane label="全部配音">
                <ul>
                    <li v-for="i in 10" :key="i">{{i}}
                    <img src="../assets/imgs/配音老师-详情_slices/播放(4).png" alt=""  >
                    <p>男160-宣传片【温馨解说 澳门】【城市宣传片/城市地区宣传/城市形象/经济开发区 】</p>
                    00:00   <el-progress :percentage="musicTime" ></el-progress>  04:52
                    <audio :id="'audio'+i"  src="'http://yy.langqiyun.com/live.mp3'" ></audio>
                    </li>
                </ul>
            </el-tab-pane>
            </el-tabs>
            
        </div>
      <!-- 分页器 -->
        <el-pagination
        background
         layout="prev, pager, next,total,jumper"
        :total="70">
        </el-pagination>
    </div>
</div>
</template>

<script>
import aplayer from "vue-aplayer";
import { setTimeout, setInterval, clearInterval } from 'timers';
import { Promise } from 'q';

export default {
    data(){
        return{
            playIndex:-1,
            musicTime:0,
            musics: [
                {
                    title: "youkao100",
                    artist: "youkao100",
                    src: 'http://yy.langqiyun.com/live.mp3',
                    pic: require("../assets/imgs/index/0188e9da2dced86d92c1e9f38b7ee20.png")
                },
                {
                title: "youkao200",
                artist: "youkao200",
               src: 'http://yy.langqiyun.com/live.mp3',
                pic:  require("../assets/imgs/index/0188e9da2dced86d92c1e9f38b7ee20.png")
                 },
                {
                title: "youkao300",
                artist: "youkao300",
               src: 'http://yy.langqiyun.com/live.mp3',
                pic:  require("../assets/imgs/index/0188e9da2dced86d92c1e9f38b7ee20.png")
                }
            ],
        }
    },
    components:{aplayer},
    computed:{
        audio () {
        return this.$refs.audio
      },
    },
    methods:{
        
        play(i){
            this.playIndex=i;
            // console.log(i);
            var audio=document.getElementById('audio'+i);
            this.musicPauseAll();
            audio.play();
            var t  = setInterval(()=>{
                this.musicTime++
                console.log(this.musicTime)
                if(this.musicTime==100){
                    clearInterval(t)
                }
            },1000)
            console.log(audio.readyState);
            // console.log(audio.duration);
        },
        pause(i){
            this.playIndex=-1;
            var audio=document.getElementById('audio'+i);
            audio.pause();
        }
    },
    mounted(){
        let musicDoms = document.getElementsByTagName('audio');  // 获取AudioDom节点
        for(let musicDom in musicDoms){
            musicDom.load();//因为source标签不能直接更改路径，所以整个audio标签必须重新加载一次
            musicDom.oncanplay = function () {  
                console.log("音乐时长",musicDom.duration);//音乐总时长
                //处理时长
                var time = musicDom.duration;
                //分钟
                var minute = time / 60;
                var minutes = parseInt(minute);
                if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                //秒
                var second = time % 60;
                var seconds = Math.round(second);
                if (seconds < 10) {
                    seconds = "0" + seconds;
                }
                console.log('处理音乐时长',minutes+"："+seconds)
            }
                    
        }

        // var audio=this.$refs.audio;
        // // console.log(audio);
        // audio.load(); 
        //     var audios=document.getElementsByTagName("audio");
           
           
        //    for(var i in audios){
                
        //     //    if(audios.readyState==2){
        //            console.log(audios[i].duration);
        //         //    }
        //    }
            
        
        // console.dir(timer);
        // var h=Math.floor(time/60);
        // var s=Math.floor(time%60);
        // h+='';
        // s+='';
        // h=h.length==1?'0'+h:h;
        // s=s.length==1?'0'+s:s;
        // console.log(h+':'+s);
    },
}
</script>

<style scoped>
    .wc{
        background:url('../assets/imgs/配音老师-详情_slices/微信图片_20190628192419.png') no-repeat ;
        background-position:0% -288%;
    }
    .musicTeacher_register{
        width:1200px;
        margin:0 auto;
        padding-bottom:113px;
    
    }
    .musicTeacher_register>.title{
        width:190px;
        height:19px;
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        line-height:17px;
        color:rgba(153,153,153,1);
        margin:18px 0;
    }   
    .musicTeacher_register>.title>span:hover{
        border-bottom: 1px solid rgba(153,153,153,1);
        cursor: pointer;
        color:lightblue;
    }
    /*图文设置*/
    .tuwen{
        display:flex;
    }
    .tu{
        width:350px;
        height:420px;
        background:url('../assets/imgs/配音老师-详情_slices/摄图网_500882911.png')  rgba(0,0,0,1) no-repeat;
        background-position:80% 0%;
        border-radius:10px;
        transition:.5s;
        cursor: pointer;
    }
    .tu:hover{
        transform: scale(1.05);
    }
    .wen{
        margin-left:43px;
    }
    .wentitle{
        font-size:18px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(102,102,102,1);
        display: flex;
        align-items: center;
    }
    .wentitle>p:first-child{
        width:155px;
        height:47px;
        font-size:36px;
        line-height:43px;
        color:rgba(51,51,51,1);
        margin-right:9px;
    }
    .wentitle>p:nth-child(3){
        margin-right: 40px;
        padding-top:20px;
    }
    .wentitle>p:nth-child(4){
        padding-top:20px;
    }
    .wentitle>button{
        width:120px;
        height:40px;
        background:rgba(15,6,111,1);
        border-radius:20px;
        font-size:18px;
        font-weight:400;
        line-height:22px;
        color:rgba(255,255,255,1);
        margin-left:46px;
        outline: none;
        border:none;
        cursor:pointer;
        margin-top:20px;
    }
    .wentitle>img{
        margin-right: 158px;
        vertical-align: middle;
    }
    .wen>.qiangdiao{
        width:126px;
        height:24px;
        font-size:18px;
        font-family:Microsoft YaHei;
        font-weight:400;
        line-height:22px;
        color:rgba(15,6,111,1);
        margin-bottom:51px;
    }
    .geren>p{
        width:130px;
        height:31px;
        font-size:24px;
        font-weight:400;
        line-height:29px;
        color:rgba(51,51,51,1);
        margin-bottom:13px;
    }
    .geren>div{
        text-indent: 5rem;
        width:784px;
        height:260px;
        font-size:16px;
        font-weight:400;
        line-height:34px;
        color:rgba(51,51,51,1);
    }
    /*配音选项卡*/
    .el-tab-pane>ul{
        margin-top:34px;
        height:400px;
    }
    .el-tab-pane>ul>li{
        margin-top:20px;
        margin-left:31px;
        display: flex;
        font-size:14px;
        font-family:DIN;
        font-weight:500;
        color:rgba(102,102,102,1);
        align-items: center;
    }
    .el-tab-pane>ul>li>img{
        cursor: pointer;
        margin-left:26px;
    }
    .el-tab-pane>ul>li>p{
        width:592px;
        height:19px;
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        line-height:17px;
        color:rgba(51,51,51,1);
        margin-left:29px;
        margin-right:98px;
    }
    .el-pagination{
        text-align: center;
        margin-top:70px;
    }
   
</style>
