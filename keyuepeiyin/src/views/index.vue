<template>
    <div>
        <!-- 推荐样音 -->
       <div class="tuijianyangyin">
           <div style="text-align:right;">
               <img src="../assets/imgs/index/箭头.png" alt="">
           </div>
             <div class="title">
                <div class="titleImgs">
                    <img src="../assets/imgs/柯悦7.26/组 6.png" alt="">
                </div>
                <div class="title_firstText"><span>推荐样音</span> <p></p></div>
                <p>RECOMMENDED SAMPLE</p>
            </div>
            <div class="tuijiangyangyin_nav">
                <ul >
                    <li v-for="(item,index) of tuijianyangyin_nav" :key="index" :class="{tuijianyangyin_on:defaults_li==index}" @click='choosedefaults_tjyy(index)'>{{item}}
                        <div>
                                <div class="nav_left">
                                    <div>
                                        <div>
                                            <p>优秀配音老师推荐</p>
                                        </div>
                                        <ul>
                                            <li @click="jumpMusicTe" v-for="i in 6" :key="i"><img src="../assets/imgs/index/nanrenwu.png" alt=""><br>
                                                <p style="font-size:16px;line-height:30px">男248成熟稳重</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="nav_left">
                                    <div>
                                        <div>
                                            <p>优秀配音老师推荐</p>
                                        </div>
                                        <ul>
                                            <li @click="jumpMusicTe" v-for="i in 6" :key="i"><img src="../assets/imgs/index/nanrenwu.png" alt=""><br>
                                                <p style="font-size:16px;line-height:30px">男248成熟稳重</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                        </div>
                    </li>
                </ul>
                <div class="more">
                    <router-link to="/musicExample">more</router-link> 
                </div>
            </div>
       </div>
       <!-- 优质专业主播 -->
        <p class="yzzy"><span>优质专业主播，提供FM标准音频服务</span><span></span></p>
        <!-- 服务机构 -->
        <div class="fwjg">
            <p>走过十年历程的优质配音服务专家</p>
            <p style="display:flex"><span></span> 专注高端声音定制与设计的一站式服务机构</p>
        </div>
       <!-- 配音人气榜 -->
       <div class="pyrq">
           <!-- aboutus -->
           <div class="aboutus">
               <p>ABOUT US</p>
               <div>
                   关于珂悦文化传媒有限公司，是国内知名商业配音品牌。
                   15年来一直专注于配音事业，配音服务客户超过几万家，
                   凭借专业品质与至诚服务成为包括：北京地铁语音录制、
                   重庆地铁、中国人寿、新华保险..
               </div>
               <div>
                <button @click="jumpAboutky">查看更多</button>
               </div>
           </div>
           <!-- 人气榜 -->
           <div class="renqibang">
               <p>配音人气榜</p>
               <ul>
                    <li
                    class="menVoice" 
                    :class="{rqb_ul_on:defaults_rqb==index}"
                    v-for="(item,index) of rqb_nav" :key='index'
                    @click="chooseMen(index)">
                    {{item}}
                    <div>
                        <div :style="'margin-top:'+up+'px'">
                            <p v-for="i in 10" :key="i"  ><span>0{{i}}男289号</span><span>大气浑厚,激情力度,伤感悲怆</span></p>
                        </div>
                        <div :style="'margin-top:'+up+'-320px'">
                            <p v-for="i in 10" :key="i"  ><span>0{{i}}男289号</span><span>大气浑厚,激情力度,伤感悲怆</span></p>
                        </div>
                    </div>
                    </li>
               </ul>
           </div>
       </div>
       <!-- 我们优秀的配音师 -->
       <div class="pys">
            <div class="title">
                <div class="titleImgs">
                     <img src="../assets/imgs/柯悦7.26/组 6.png" alt=""> 
                </div>
                <div class="title_firstText">
                    <span>我们优秀的配音师</span> <p></p></div>
                <p>RECOMMENDED SAMPLE</p>
            </div>
            <ul>
                <li v-for="i in 5" :key="i" @click="jumpMusicTe">
                    <span>
                        <img src="../assets/imgs/index/00478a7df7ea474812391ba1f6c865e.png" alt="">
                    </span>
                    <p style="color:rgba(15,6,111);font-weight:bold;font-size:18px;">大气稳重</p>
                    <p>女 160</p>
                </li>
            </ul>
       </div>
       <!-- 播音品质背景 -->
       <div class="pzbj">
           <ul>
               <li v-for="(item, index) of musics" :key="index">
                   <aplayer  :music="item"></aplayer>
               </li>
           </ul>
           <p>播音级品质 &nbsp;&nbsp;&nbsp; 每天百万文字转音频 &nbsp;&nbsp;&nbsp; 轻松快速获得高质量音频</p>
       </div>
       <!-- 试听我们的优秀音乐 -->
       <div class="goodmusic">
           <div class="title">
                <div class="titleImgs">
                    <img src="../assets/imgs/柯悦7.26/组 6.png" alt="">
                </div>
                <div class="title_firstText"><span>试听我们优秀的音乐</span><p></p></div>
                <p>WHAT CAN WE DO FOR YOU</p>
            </div>
            <div class="goodmusic_container">
                <div class="goodmusic_container_left">
                    <ul>
                        <li v-for="(item,index) of musics2" :key="index"> 
                            <aplayer  :music="item"></aplayer>
                        </li>
                    </ul>
                    <p>DUBBING</p>
                    <div class="yuanhengxian">
                        <span class="yuan"></span>
                        <span class="heng"></span>
                        <span class="yuan"></span>
                    </div>
                    <p>好内容必有好声音</p>
                </div>
                <div class="goodmusic_container_right">
                    <img src="../assets/imgs/index/主体.png" alt="">
                </div>
            </div>
       </div>
       <!-- 千万用户的选择 -->
       <div class="xuanze">
           <div class="title">
                <div class="titleImgs">
                    <img src="../assets/imgs/柯悦7.26/组 6.png" alt="">
                </div>
                <div class="title_firstText"><span>我们是万千用户的选择</span> <p></p></div>
                <p>WHAT CAN WE DO FOR YOU</p>
                <p>内容与媒体的首选配音工具</p>
                <p>服务近3000家知名媒体用户，提供了超过30万条优质音频内容</p>
            </div>
            <div class="xz_charts">
                <div></div>
                <div></div>
            </div>
       </div>
       <!-- 服务流程 -->
       <div class="fuwuliucheng">
           <div class="title">
                <div class="titleImgs">
                    <img src="../assets/imgs/柯悦7.26/组 6.png" alt="">
                </div>
                <div class="title_firstText"><span>我们的服务流程</span><p></p></div>
                <p>OUR SERVICE PROCESS</p>
            </div>
            <div class="fuwuliucheng_container">
                <div class="fuwuliucheng_container_left"></div>
                <div class="fuwuliuchneng_container_right">
                    <p style="display:flex"><span>服务</span>流程</p> 
                    <p>悦耳音质+优质服务=用户一致好评</p>
                    <ul >
                        <li v-for="(item,index) of fwlc_top" :key="index"><img :src="item.url"  alt="">{{item.name}}</li>
                    </ul>
                    <ul >
                        <li v-for="(item,index) of fwlc_bot" :key="index"><img :src="item.url" alt="">{{item.name}}</li>
                    </ul>
                </div>
            </div>
       </div>
        <p class="yzzy"><span>优质专业主播，提供 FM 标准音频服务</span><span></span></p>
        <!-- 优质配音——block -->
        <div class="yzpy_block">
            <div class="yzpy_block_title">
                <p>优质配音<span>QUALITY DUBBING</span></p>
            </div>
            <div class="yzpy_block_container">
                <div class="yzpy_block_container_left">
                    <div></div>
                    <div></div>
                </div>
                <div class="yazpy_block_container_right">
                    <div class="y_b_c_r_t">
                        <p><span>全</span>世界倾听你的声音</p>
                        <div>
                            <p>“我希望有个如你一样的人，如山涧清爽的风</p>       
                            <p>如古城温暖的光，只要最后是你就好</p>         
                            <p>今天，你路过了谁</p>
                            <p>谁又丢失了你呢？”</p>
                        </div>
                    </div>
                    <div class="y_b_c_r_b" @click="y_b_c_r_b_playMusic">
                        <img :src="!isplay?require(`../assets/imgs/index/点击.png`):require(`../assets/imgs/index/点击收听 (1).png`)" alt="" >点击收听
                        <audio id="y_b_c_r_b_music" src="http://yy.langqiyun.com/live.mp3"></audio>
                    </div>
                </div>
            </div>
        </div>
        <!-- 品牌 -->
        <div class="pinpai">
            <div class="title">
                <div class="titleImgs">
                    <img src="../assets/imgs/柯悦7.26/组 6.png" alt="">
                </div>
                <div class="title_firstText"><span>这些品牌正在使用我们的配音服务</span><p></p></div>
                <p>THESE BRANDS ARE USING OUR DUBBING SERVICE</p>
            </div>
            <div class="pinpai_imgs">
                <ul>
                    <li v-for="(item,index) of pinpai_imgs" :key="index" :style="'background-image:url('+item+')'">
                        <div></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import aplayer from "vue-aplayer";
import { setInterval, clearInterval } from 'timers';

export default {
    components: {
        aplayer: aplayer
    },
    data(){
        return{
            isplay:false,
            t:"",
            up:0,
            tuijianyangyin_nav:['童声配音','广告促销','专题配音','彩铃样音','课件培训',],
            defaults_li:0,
            rqb_nav:['男声推荐','女声推荐'],
            defaults_rqb:0,
            fwlc_top:[
                {name:'试听样音',url:require('../assets/imgs/index/耳机.png')},
                {name:'选定老师',url:require('../assets/imgs/index/老师.png')},
                {name:'免费试音',url:require('../assets/imgs/index/免费 (1).png')},
            ],
            fwlc_bot:[
                {name:'确认小样',url:require('../assets/imgs/index/小样图@3x.png')},
                {name:'客户付款',url:require('../assets/imgs/index/付款 (1).png')},
                {name:'交付成品',url:require('../assets/imgs/index/成品库.png')},
                {name:'售后服务',url:require('../assets/imgs/index/售后.png')},
            ],
            pinpai_imgs:[
                require('../assets/imgs/柯悦7.26/品牌/品牌-1.png'),
                require('../assets/imgs/柯悦7.26/品牌/品牌0.png'),
                require('../assets/imgs/柯悦7.26/品牌/品牌1.png'),
                require('../assets/imgs/柯悦7.26/品牌/品牌2.png'),
                require('../assets/imgs/柯悦7.26/品牌/品牌3.png'),
                require('../assets/imgs/柯悦7.26/品牌/品牌4.png'),
                require('../assets/imgs/柯悦7.26/品牌/组 4.png'),
                require('../assets/imgs/柯悦7.26/品牌/品牌6.png'),
                require('../assets/imgs/柯悦7.26/品牌/品牌7.png'),
                require('../assets/imgs/柯悦7.26/品牌/品牌8.png'),
                require('../assets/imgs/柯悦7.26/品牌/品牌9.png'),
                require('../assets/imgs/柯悦7.26/品牌/品牌10.png')
            ],
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
            musics2: [
                {
                    title: "youkao100",
                    artist: "youkao100",
                    src: 'http://yy.langqiyun.com/live.mp3',
                   
                },
                {
                title: "youkao200",
                artist: "youkao200",
                src: 'http://yy.langqiyun.com/live.mp3',
                 },
                {
                title: "youkao300",
                artist: "youkao300",
                src: 'http://yy.langqiyun.com/live.mp3',

                }
            ],

        }
    },
    mounted(){
        // this.axios.get('http://yinyue.langqiyun.com/').then(res=>{
        //     console.log(res)
        // })
        
        this.t=setInterval(()=>{
            // console.log(this.up);
            this.up--;
            if(this.up<-320){
                console.log(this.up)
                this.up=0;
            }
        },50)
    },
    destroyed(){
        clearInterval(this.t);
    },
    methods:{
      choosedefaults_tjyy(index){
          this.defaults_li=index;
      },
      chooseMen(index){
          this.defaults_rqb=index;
      },
      jumpAboutky(){
          this.$router.push('/aboutkeyue')
      },
      jumpMusicTe(){
          this.$router.push('/musicTeacher_register')
      },
      y_b_c_r_b_playMusic(){
          var audio=document.getElementById('y_b_c_r_b_music');
          if(audio.paused){
              this.musicPauseAll();
              audio.play();
              this.isplay=true;
          }else{
              audio.pause();
              this.isplay=false;
          }
      }
    //   play(){
         
    //   }
    },
    
}
</script>

<style scoped>
    /*通用标题样式*/
    
    /*推荐样音*/
    .tuijianyangyin{
        width:1200px;
        margin:0 auto;
        height:690px;
    }
    .tuijiangyangyin_nav{
        margin-top:10px;
        display:flex;
        justify-content: space-between;
        border-bottom:1px solid rgba(170,170,170,1);
        margin-bottom:22px;
    }
    .tuijiangyangyin_nav>ul{
        display:flex;
        align-items: center;  
        padding-bottom:12px;
        position: relative;
    }
    .tuijiangyangyin_nav>ul>li{
        width:130px;
        height:41px;
        line-height:41px;
        text-align: center;
        font-size:18px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(22,22,22);
        cursor:pointer;
        margin-right:5px;    
    }
    .tuijiangyangyin_nav>ul>li>div{
        width:1200px;
        /* height:500px; */
        position:absolute;
        top:85px;
        left:0;   
        display:none;
    }
    .tuijiangyangyin_nav>ul>li:hover{
        background:rgba(15,6,111,1);
        color:#fff;
    }
    /*左边nav*/
    .nav_left>div{
        width:80%;
        margin:0 auto;
    }
    .nav_left>div>div{
        display:flex;
        justify-content: space-between;
        font-size:18px;
        margin-bottom:15px;
    }
    .nav_left>div>ul{
        display: flex;
        justify-content: space-between;
        flex-flow:wrap ;
    }
    .nav_left>div>ul>li{
        width:30%;
        margin-top:5px;
    }
    .nav_left>div>ul>li:hover  img{
        transform: scale(1.1);
        transition:.5s linear;
    }
    .tuijianyangyin_on{
        background:rgba(15,6,111,1);
        color:#fff!important;
    }
     .tuijianyangyin_on>div{
        display: flex!important;
        justify-content: space-between;
    }
    .tuijianyangyin_on>div>div{
        width:572px;
        height:375px;
        background:rgba(15,6,111,1);
        box-shadow:0px 12px 10px rgba(13,7,77,0.13);
    }
  
   
    .tuijiangyangyin_nav>div{
        height:41px;
        line-height:41px;
        font-size:18px;
        color:rgba(15,6,111,1);
    }
    /*优质专业主播*/
    .yzzy{
        width:1087px;
        color:#8c8c8c;
        font-size:13px;
        margin:0 auto;
        padding-left:10px;
        position:relative;
       height:14px;
    }
  
    .yzzy>span:first-child{
        background:rgba(255,255,255,1);
        position:absolute;
        z-index:100;
        top:0;
        left:36px;
    }
    .yzzy>span:nth-child(2){
        position: absolute;
        width:1087px;
        height:5px;
        background:rgb(82,82,82);
        top:7px;
        left:0;
    }
    /*服务机构*/
    .fwjg{
        width:1200px;
        height:138px;
        background:rgba(241,241,241,1);
        box-shadow:0px 6px 10px rgba(222,222,222,1);
        margin:50px auto;
        padding:17px 0 0 112px;
        background:url('../assets/imgs/柯悦7.26/背景.png ');
        
        
    }
    .fwjg>p{
        font-size:36px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(100,100,100,1);
    }
    .fwjg>p:nth-child(2)>span{
        display:block;
        width:72px;
        height:2px;
        background:rgba(100,100,100,1);
        margin-top:20px;
        margin-right:10px;
    }
    /*配音人气榜*/
    .pyrq{
        height:526px;
        background:url('../assets/imgs/柯悦7.26/额.png') rgb(244,244,244) no-repeat;
        position:relative;
        margin-bottom:10px;
        background-size:100%;
    }
    .aboutus{
        width:649px;
        height:404px;
        background:rgba(255,255,255,.8);
        position:absolute;
        top:80px;
        left:15%;
    }
    .aboutus>p{
        width:506px;
        height:31px;
        font-size:24px;
        font-family:Microsoft YaHei;
        font-weight:bold;
        line-height:24px;
        color:rgba(1,1,1,1);
        margin: 50px auto ;
    }
    .aboutus>div{
        width:506px;
        height:122px;
        font-size:16px;
        font-family:Microsoft YaHei;
        font-weight:400;
        line-height:36px;
        color:rgba(76,76,76,1);
        margin:0 auto;
    }
    .aboutus>div>button{
        margin-top:50px;
        width:131px;
        height:40px;
        background:rgba(15,6,111,1);
        box-shadow:0px 4px 6px rgba(30,2,76);
        border-radius:20px;
        color:rgb(255,255,255); 
        outline: none;
        border:none;
        cursor: pointer;
    }
    /*人气榜*/
    .renqibang{
        width:381px;
        height:547px;
        background:rgba(255,255,255);
        box-shadow:0px 12px 27px rgba(154,154,154,0.56);
        opacity:0.9;
        position:absolute;
        top:-2%;
        right:15%;
        padding:26px 0 0 22px;
    }
    .renqibang>p{
        width:90px;
        height:24px;
        font-size:18px;
        font-family:Microsoft YaHei;
        font-weight:400;
        line-height:25px;
        color:rgb(28,28,28);
    }
    .renqibang>ul{
        margin-top:40px;
        display: flex;
        position: relative;
    }
    .renqibang>ul>li{
        width:90px;
        height:34px;
        border:1px solid rgb(15,6,111);
        border-radius:17px;
        font-size:14px;
        line-height:34px;
        text-align: center;
        font-family:Microsoft YaHei;
        margin-right:20px;
        color:rgb(15,6,111);
        cursor: pointer;
    }
    .renqibang>ul>li>div{
        display:none;
    }
    .rqb_ul_on{
        background:rgb(15,6,111);
        color:#fff!important;
    }
    .renqibang>ul>.rqb_ul_on>div{
        display:block!important;
        position:absolute;
        top:60px;
        left:0;
        height:300px;
        overflow: hidden;
    }
    .renqibang>ul>.rqb_ul_on>div>div{
        margin-top:0px;
    }
    .renqibang>ul>.rqb_ul_on>div>div>p{
        width:331px;
        height:32px;
        line-height:32px;
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgb(49,49,49);
        text-align: left;
        display: flex;
        justify-content: space-between
    }
    /*配音师*/
    
    .pys>ul{
        width:1200px;
        margin:20px auto;
        display: flex;
        justify-content: center;
    }
    .pys>ul>li{
        width:15%;
        margin-right:3%;
    }
    .pys>ul>li>span{
        width:100%;
        height:180px;
        display: block;
        border-radius:50%;
        background:url('../assets/imgs/index/nvgeshou.png') no-repeat -35px 1px;
        background-size:cover;
        cursor: pointer;
        position: relative;
    }
    .pys>ul>li>span>img{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        margin:auto;
        display:none;
    }
    .pys>ul>li>span:hover{
        transform: scale(1.1);
        transition:.5s linear;
    }
    .pys>ul>li>span:hover img{
        display:inline-block;
    }
    .pys>ul>li>p{
        text-align: center;
        margin-top:20px;
    }
   
   /*播音品质*/
   .pzbj{
        height:438px;
        background:rgba(3,3,3,1)  url('../assets/imgs/index/fundo-abstrato-de-ondas-de-particulas-de-equalizador_23-2148185705.png') no-repeat; 
        background-position: center;
        text-align: center;
   }
   .pzbj>ul{
        width:1200px;
        display:flex;
        margin:0 auto;
        align-items: center;
        justify-content: space-between;
        padding-top:80px;
   }
   .pzbj>ul>li{
        width:430px;
        height:243px;
        background: url('../assets/imgs/index/c66f4d427de77e3adea97ea5b8bb1d4.png') rgba(198,198,198,0.97);
        border-radius: 5px;
   }
   .pzbj>ul>li:nth-child(2){
       margin:0 20px;
       background:url('../assets/imgs/index/2dcaee2b37ca9ad6c15bad4ae109921.png')
   }
 
   .pzbj>ul>li>.aplayer{
       box-shadow: none;
       background-color: transparent;
       height:100%;
   }
    
   .pzbj>p{
       margin-top:50px;
       color:#fff;
       font-size:30px;
       text-align: center;
   }
   /*试听优秀音乐*/
   .goodmusic{
       width:1200px;
       margin:0 auto;
       margin-top:50px;
   }
   .goodmusic_container{
       display: flex;
        justify-content: space-between;

   }
   .goodmusic_container_left>ul>li{
        width:551px;
        height:70px;
        box-shadow:0px 12px 13px rgba(13,7,77,0.23);
        margin-top:20px;
   }
  
   .goodmusic_container_left>p:nth-child(2){
        width:354px;
        height:87px;
        font-size:72px;
        font-family:Century751 SeBd BT;
        font-weight:normal;
        line-height:87x;
        color:rgb(0,0,0);
        margin:0 auto;
   }
    .goodmusic_container_left>p:nth-child(4){
        width:352px;
        height:44px;
        font-size:44px;
        font-family:Source Han Sans CN;
        font-weight:200;
        line-height:44px;
        color:rgb(0,0,0);
        margin:0 auto;
    }
    .goodmusic_container_right>img:hover{
        cursor: pointer;
        transform: rotate(3600deg);
        transition:30s ease;
    }
    .yuanhengxian{
        display: flex;
        margin:0 auto;
       
    }
    .yuan{
        display: block;
        width:12px;
        height:12px;
        background:rgba(0,0,0);
        border-radius:50%;
    }
    .heng{
        width:443px;
        height:0px;
        margin-top:5px;
        border:1px solid rgba(0,0,0);
    }
    /*我们是万千用户的选择*/
    .xuanze{
        width:1200px;
        margin:0 auto;
        margin-top:50px;
    }
    .xuanze>.title>p:nth-child(4){
        font-size:18px;
        color:rgba(11,22,37);
        font-family:Microsoft YaHei;
        font-weight:400;
    }
    .xuanze>.title>p:nth-child(5){
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(86,89,94,1)
    }
    .xz_charts{
        margin-top:10px;
        display: flex;
        justify-content: space-around;
    }
    .xz_charts>div{
        width:516px;
        height:310px;
        background: #fff  url('../assets/imgs/index/0ca553ed7d5404435ec62f08fb548c8.png');
        background-size:100%;
        border:1px solid #000;
        border-radius: 5px;
        cursor: pointer;
        transition: .5s;
    }
    .xz_charts>div:hover{
        transform: scale(1.02);
    }
    .xz_charts>div:last-child{
        background: url('../assets/imgs/index/4171d7b66d201af298f66b94eee3618.png');
        background-size:cover;
       
    }
    /*服务流程*/
    .fuwuliucheng{
        margin-top:50px;
        height:506px;
        background:url('../assets/imgs/index/fundo-abstrato-de-ondas-de-particulas-de-equalizador_23-2148185705.png');
        background-color:rgba(15,6,111,1);
        margin-bottom:50px;
    }
    .fuwuliucheng>.title{
        color:rgba(255,255,255,1);
    }
    .fuwuliucheng>.title>.title_firstText>p{
        border:2px solid rgba(255,255,255,0.5);
    }
    .fuwuliucheng>.title>.title_firstText>span{
        background:transparent;
    }
    .fuwuliucheng_container{
        width:1200px;
        margin:0 auto;
        display: flex;
        /* justify-content: space-around; */
    }
    .fuwuliucheng_container_left{
        width:401px;
        height:401px;
        background:url('../assets/imgs/柯悦7.26/组 3.png');
        cursor: pointer;
    }
    .fuwuliucheng_container_left:hover{
        transform: rotate(3600deg);
        transition: 50s linear;
    }
    .fuwuliuchneng_container_right>ul>li>img{
        margin-right:5px;
        
    }
    .fuwuliuchneng_container_right>ul>li{
        cursor: pointer;
        transition: .5s linear;
    }
    .fuwuliuchneng_container_right>ul>li:hover{
        transform: scale(1.1);

    }
    .fuwuliuchneng_container_right{
        color:rgba(255,255,255,1);
        padding-top:30px;
        margin-left:10px;
    }
    .fuwuliuchneng_container_right>p{
        margin-top:25px;
    }
    .fuwuliuchneng_container_right>p>span{
        display: block;
        height:40px;
        border-bottom:3px solid #fff;
    }
    .fuwuliuchneng_container_right>ul{
         margin-top:20px;
        display: flex;      
    }
    .fuwuliuchneng_container_right>ul>li{
        width:177px;
        height:78px ;
        margin-right:20px;
        background:rgba(255,255,255,1);
        text-align: center;
        line-height: 78px;
        font-size:18px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(43,43,43,1);
    }
    .fuwuliuchneng_container_right>ul>li>img{
        vertical-align: middle;
    }
    /*优质配音——block*/
    .yzpy_block{
        width:1201px;
        height:480px;
        background:rgba(236,236,236,1);
        margin:0 auto;
        margin-top:50px;
        padding:60px 90px;
        font-size:14px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(64,64,64,1);
    }
    .yzpy_block>.yzpy_block_title>p{
        height:18px;
        font-size:18px;
        color:rgba(64,64,64,1);
        position:relative;

    }
    .yzpy_block>.yzpy_block_title>p>span{
        font-size:14px;
        margin-left:10px;
    }
   
    .yzpy_block_container{
        margin-top:20px;
        display:flex;
        justify-content: space-between;
    }
    .yzpy_block_container_left{
        width:573px;
        height:350px;
        background:url('../assets/imgs/index/analogue-audio-cdj-860707.png');
        position:relative;
        transition:.5s linear;
        cursor: pointer;
    }
    .yzpy_block_container_left:hover{
        transform: scale(1.1);   
    }
    .yzpy_block_container_left>div:first-child{
        width:29px;
        height:350px;
        background:rgba(229,229,229,1);
        position: absolute;
        top:0;
        right:100px;
    }
    .yzpy_block_container_left>div:nth-child(2){
        position:absolute;
        width:14px;
        height:350px;
        background:rgba(229,229,229,1);
        top:0;
        right:20px;
    }
    .y_b_c_r_t{
        width:340px;
        height:252px;
        background:rgba(255,255,255,1);
        padding:50px 0 0 30px;
    }
    .y_b_c_r_b{
        width:340px;
        height:95px;
        background:rgba(0,0,0,1);
        margin-top:10px;
        line-height: 95px;
        text-align: right;
        font-size:14px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(255,255,255,1);
        padding-right: 20px;
    }
    .y_b_c_r_b>img{
        vertical-align: middle;
        margin-right: 10px;
        cursor: pointer;
        transition: .5s linear;
    }
    .y_b_c_r_b>img:hover{
        transform: scale(1.1);
    }
    .y_b_c_r_t>p{
        font-size:14px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(64,64,64,1);
    }
    .y_b_c_r_t>p>span{
        font-size:36px;
        font-family:Source Han Sans CN;
        font-weight:400;
        line-height:25px;
        color:rgba(255,255,255,1);
        background:crimson;
    }
    .y_b_c_r_t>div{
        width:285px;
        height:86px;
        font-size:14px;
        line-height:26px;
        margin-top:20px;
    }
    /*品牌*/
    .pinpai{
        width:1200px;
        margin:50px auto;
    }
    .pinpai_imgs>ul{
        display: flex;
        justify-content: space-around;
        flex-flow: wrap;
        align-items: center;
    }
    .pinpai_imgs>ul>li{
        margin:5px;
        width:24%;
        height:164px;
        background:url('../assets/imgs/柯悦7.26/品牌/品牌0.png') no-repeat;
        background-size:cover;
        cursor: pointer;
        background-position: 50%;
    }
    .pinpai_imgs>ul>li>div{
        width:100%;
        height:100%;
        background: url('../assets/imgs/柯悦7.26/组 5.png') no-repeat #ddd ;
        opacity: 0.5;
        background-position: 50%;
        box-shadow:1px 1px 5px #000 ;
        display: none;
    }
    .pinpai_imgs>ul>li:hover div{
        display: block;
    }
 
</style>


