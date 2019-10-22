<template>
    <div class="header_wc">
        <div class="header_nc">
            <!-- 联系项 -->
            <div class="lianxi">
                <p>Hi 欢迎来到珂悦配音！</p>
                <p>联系我们:0551-66331366</p>
            </div>
            <!-- 顶部导航栏区 -->
            <div class="top_nav">
                <!-- 左侧图片 -->
                <div class="top_nav_imgs" @click="toIndex">
                    <div class="bolang">
                        <img src="../assets/imgs/header/logo11.gif" width="68px" alt=""> 
                    </div>
                    <div class="keyuchuanmei">
                        <img src="../assets/imgs/header/keyuchuanmei.png" alt="">
                    </div>
                </div>
                <!-- 导航 -->
                <ul class="nav_top">
                        <li @click="chooseNav_top(index)"  v-for="(item,index) of nav_top" :key="index">
                            <router-link :to="'/'+item.url" :class="{nav_top_on:nav_top_default==index}">
                            {{item.name}}
                            </router-link>
                        </li>
                </ul>
            </div>
            <!-- 中间部分 -->
            <div class="header_center">
                <!-- 左侧导航栏 -->
                <div class="nav_left">
                    <ul>
                        <li  class="nav_left_title">全部分类</li>
                        <li v-for="(item,index) of nav_left" :key="index" @click="jumpmusicEx(item.query)">
                            <img :src="require('../assets/imgs/header/'+item.url)" alt="">
                            <span >
                            {{item.data}}
                            </span>       
                            <img src="../assets/imgs/header/箭头 (15) 拷贝 5.png" alt="">
                            
                            <div class="hide_nav">
                                <p>{{item.data}}</p>
                                <div @click.stop>
                                    <router-link :to="{name:'musicExample',query: item2.query}" v-for="(item2,index2) of item.list" :key="index2">{{item2.name}}</router-link>
                                </div>
                            </div>
                        </li>   
                    </ul>
                </div>
                <!-- 右侧图片 -->
                <div class="block_right">
                    <el-carousel :interval="1000" arrow="always" height="533px">
                        <el-carousel-item v-for="item in 4" :key="item">

                        </el-carousel-item>
                     </el-carousel> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { filter } from 'minimatch';
export default {
    data(){
        return{
            nav_top:[{name:"珂悦首页",url:'index'},{name:"样音试听",url:'musicExample'},{name:"配音老师",url:'musicTeacher'},{name:"关于珂悦",url:'aboutkeyue'},{name:"配音资讯",url:'musicMsg'},{name:"珂悦案例",url:'keyueExample'}],
            nav_top_default:0,
            nav_left:[
                {data:'男声配音',url:'男装.png',
                list:[
                    {name:"1-30元/分",query:{sex:1,price:1}},
                    {name:"35-60元/分",query:{sex:1,price:2}},
                    {name:"70-80元/分",query:{sex:1,price:3}},
                    {name:"90-120元/分",query:{sex:1,price:4}},
                    ],
                    query:{type:0,type2:0,sex:1,language:0,price:0}
                    },
                {data:'女声配音',url:'女装.png',
                list:[
                    {name:"1-30元/分",query:{sex:2,price:1}},
                    {name:"35-60元/分",query:{sex:2,price:2}},
                    {name:"70-80元/分",query:{sex:2,price:3}},
                    {name:"90-120元/分",query:{sex:2,price:4}},
                    ],
                    query:{type:0,type2:0,sex:2,language:0,price:0}
                    },
                {data:'专题片',url:'专题.png',
                list:
                [
                    {name:"学校院校教育",query:{type:1,type2:1}},
                    {name:"公安法院监狱派出所",query:{type:1,type2:2}},
                    {name:"项目规划专题",query:{type:1,type2:3}},
                    {name:"人物专题",query:{type:1,type2:4}},
                    {name:"金融银行",query:{type:1,type2:5}},
                    {name:"企业专题集团概述",query:{type:1,type2:6}},
                    {name:"医疗/医院专题",query:{type:1,type2:7}},
                    {name:"产品介绍 产品解说",query:{type:1,type2:8}},
                    {name:"总结汇报/工作纪实",query:{type:1,type2:9}},
                    {name:"党建工作专题",query:{type:1,type2:10}},
                    {name:"教育培训机构",query:{type:1,type2:11}},
                    {name:"文化历史 探索发现",query:{type:1,type2:12}},
                    {name:"宗教专题/佛教 寺庙",query:{type:1,type2:13}},
                    {name:"政府机关专题/军队",query:{type:1,type2:14}},
                    {name:"新闻播报/时事新闻",query:{type:1,type2:15}},
                    {name:"其他解说旁白",query:{type:1,type2:16}}
                ]
                ,query:{type:1,type2:0,sex:0,language:0,price:0}},
                {data:'宣传片',url:'宣传片.png',
                list:[
                    {name:"招商宣传/招商引资",query:{type:2,type2:1}},
                    {name:"公益宣传/福利院/慈善",query:{type:2,type2:2}},
                    {name:"茶酒宣传/乌龙茶普洱茶/酒文化",query:{type:2,type2:3}},
                    {name:"汽车交通/公交车/交警/道路交通/交通运输",query:{type:2,type2:4}},
                    {name:"旅游风光/旅游推介/景区",query:{type:2,type2:5}},
                    {name:"品牌宣传/品牌介绍",query:{type:2,type2:6}},
                    {name:"城市宣传片/城市地区宣传/城市形象/经济开发区",query:{type:2,type2:7}},
                    {name:"医疗宣传/医院宣传/医疗平台宣传",query:{type:2,type2:8}},
                    {name:"集团企业宣传介绍",query:{type:2,type2:9}},
                    {name:"学校宣传/幼儿园/小学中学大学/驾校/技术学院",query:{type:2,type2:10}},
                    {name:"其他宣传",query:{type:2,type2:11}},
                    ],
                    query:{type:2,type2:0,sex:0,language:0,price:0}
                    },
                {data:'纪录片',url:'课件.png',
                list:[
                    {name:"文献类/专栏解说",query:{type:3,type2:1}},
                    {name:"自然类/地理/远古时代",query:{type:3,type2:2}},
                    {name:"科教类/电视纪录片/科技",query:{type:3,type2:3}},
                    {name:"人文历史/长征记录/台北故宫/历史记录片",query:{type:3,type2:4}},
                    {name:"舌尖风格/美食/重庆小面",query:{type:3,type2:5}},
                    {name:"人物纪录片/人物纪实/人物历史",query:{type:3,type2:6}},
                    {name:"其他记录片/申遗等",query:{type:3,type2:7}}
                    ],
                    query:{type:3,type2:0,sex:0,language:0,price:0}
                    },
                {data:'课件多媒体',url:'动漫.png',
                list:[
                    {name:"项目展示 工程汇报",query:{type:4,type2:1}},
                    {name:"产品演示",query:{type:4,type2:2}},
                    {name:"培训课件/教学培训",query:{type:4,type2:3}},
                    {name:"有声读物/儿童故事",query:{type:4,type2:4}},
                    {name:"IC语音 游戏语音",query:{type:4,type2:5}},
                    {name:"PPT幻灯片",query:{type:4,type2:6}}],
                    query:{type:4,type2:0,sex:0,language:0,price:0}
                    },
                {data:'广告配音',url:'广告配音.png',
                list:[
                    {name:"电影电视预告 片头",query:{type:5,type2:1}},
                    {name:"模仿广告 人物模仿",query:{type:5,type2:2}},
                    {name:"广播提示 商场广播",query:{type:5,type2:3}},
                    {name:"节日广告",query:{type:5,type2:4}},
                    {name:"慈善公益广告",query:{type:5,type2:5}},
                    {name:"栏目导视/栏目包装",query:{type:5,type2:6}},
                    {name:"旅游广告宣传",query:{type:5,type2:7}},
                    {name:"电台包装 电台片花",query:{type:5,type2:8}},
                    {name:"电话彩铃 手机彩铃",query:{type:5,type2:9}},
                    {name:"手机通讯 电信联通",query:{type:5,type2:10}},
                    {name:"酒类广告",query:{type:5,type2:11}},
                    {name:"房地产广告",query:{type:5,type2:12}},
                    {name:"医疗医药",query:{type:5,type2:13}},
                    {name:"汽车交通 品牌汽车",query:{type:5,type2:14}},
                    {name:"品牌形象",query:{type:5,type2:15}},
                    {name:"活动宣传",query:{type:5,type2:16}},
                    {name:"电视购物 电购促销",query:{type:5,type2:17}},
                    {name:"企业形象",query:{type:5,type2:18}},
                    {name:"产品广告",query:{type:5,type2:19}},
                    {name:"招商广告",query:{type:5,type2:20}},
                    {name:"学校教育 学校招生",query:{type:5,type2:21}},
                    {name:"促销广告",query:{type:5,type2:22}},
                    {name:"其他广告",query:{type:5,type2:23}},]
                    ,
                    query:{type:5,type2:0,sex:0,language:0,price:0}
                    },
                {data:'动画动漫',url:'记录片.png',
                list:[
                    {name:"游戏CG",query:{type:6,type2:1}},
                    {name:"动画片",query:{type:6,type2:2}},
                    {name:"模仿",query:{type:6,type2:3}},
                    {name:"儿童",query:{type:6,type2:4}},
                    {name:"老人",query:{type:6,type2:5}},
                    {name:"角色扮演",query:{type:6,type2:6}},
                    {name:"动画解说",query:{type:6,type2:7}}
                    ],
                    query:{type:6,type2:0,sex:0,language:0,price:0}
                    },
                {data:'外语配音',url:'外语.png',
                list:[
                    {name:"英语（外籍母语）",query:{type:7,type2:1}},
                    {name:"英语（国内）",query:{type:7,type2:2}},
                    {name:"日语配音",query:{type:7,type2:3}},
                    {name:"德语配音",query:{type:7,type2:4}},
                    {name:"韩语配音",query:{type:7,type2:5}},
                    {name:"法语配音",query:{type:7,type2:6}},
                    {name:"泰语配音",query:{type:7,type2:7}},
                    {name:"越南语配音",query:{type:7,type2:8}},
                    {name:"西班牙语配音",query:{type:7,type2:9}},
                    {name:"意大利语配音",query:{type:7,type2:10}},
                    {name:"阿拉伯语配音",query:{type:7,type2:11}},
                    {name:"葡萄牙语配音",query:{type:7,type2:12}},
                    {name:"马来西亚语配音",query:{type:7,type2:13}}
                    ],
                    query:{type:7,type2:0,sex:0,language:0,price:0}
                    },
                ],
           
        }
    },

    methods:{
        chooseNav_top(index){
            this.nav_top_default=index;
        },
        toIndex(){
            this.nav_top_default = 0;
            this.$router.push({
                name:"index",
            });
        },
        jumpmusicEx(query){
           this.$router.push({
               name:"musicExample",
               query,
           })
        }
    },
    mounted(){
        var _this = this;
        // console.log(this.nav_top);
        // console.log(this.$route)
        console.log(this.$route);
        this.nav_top.forEach( function(ele,index) {
            if(ele.url == _this.$route.name) {
                _this   .nav_top_default = index;   
            }else if(_this.$router.name="musicMsg_register"){
                _this   .nav_top_default=4;
            }
        })
    },
  


}
</script>

<style scoped>

/*头部样式*/
    /*头部外层*/
    /*轮播图*/
    .header_wc{
        width:100%;
        background:url('../assets/imgs/header/background.png') no-repeat rgba(255,255,255,1) ;
        background-size:cover;    
    }
    /*头部内层*/
    .header_nc{
        width:1200px;

        /*！透明度调试*/
        background:rgba(255,255,255,0);
        margin:0 auto;
        /* opacity: 0.5; */
    }
    /*联系项*/
    .lianxi{
        display: flex;
        justify-content: space-between;
    }
    .lianxi{
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(255,255,255,1);
        /* opacity:0;       */
        padding-left:15px;
        padding-right:15px;
        padding-top:5px;
    }
    /*  顶部导航栏区  */
    .top_nav{
        margin-top:28px;
        background:rgba(255,255,255,1);
        display: flex;
        justify-content: space-between;
        padding-left:15px;
     
    }
    .top_nav>.top_nav_imgs{
        padding-top:5px;
        cursor: pointer;
    }
    .top_nav>.top_nav_imgs >.keyuchuanmei{
        padding-left:10px;
    }
    .top_nav>.nav_top{
        display:flex;
        justify-content: space-around;
        align-items:center;
    }
    .top_nav>.nav_top>li{
        width:100px;
        text-align: center;
        height:90%;
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        border-radius:2px;
        line-height:66px;
        padding:0 10px;
    }
     .top_nav>.nav_top>li>a{
         display: block;
         height:90%;
     }
    .top_nav>.nav_top>li:hover a{
        /*border渐变色*/
        color:#FB7988!important;
         border-bottom:3px solid #FFBA33;
         cursor: pointer;
    }
    .nav_top_on{
        color:#FB7988;
        border-bottom:3px solid #FFBA33;
    }
    .border_bottom{
        border-bottom:3px solid #FFBA33!important;
    }
    /*中间区域*/
    .header_center{
        display: flex;
        padding-bottom:18px;
    }
    /*左侧nav*/
    .nav_left>ul{
        margin-top:15px;
        width:226px;

        background:rgba(255,255,255,1);
        align-items: center;
        position:relative;
    }
    .nav_left>ul>li{
        display:flex;
        font-weight:400;
        align-items: center;
        height:10%;
        line-height: 55px;
        padding-left:20px;
        padding-right:15px;
        border-bottom:1px solid rgba(238,238,238,1);
    }
    .nav_left>ul>li img{
        transition:0.3s linear;
    }
    .nav_left>ul>li>.hide_nav{
        position:absolute;
        width:263px;
        background:rgba(255,255,255,0.4);
        height:507px;
        top:40px;
        border:2px solid #ddd;
        left:227px;
        z-index: 9999;
        display: none;
        overflow: auto;
    }
    .nav_left>ul>li>.hide_nav>div{
        line-height: 5px;
    text-overflow:ellipsis;
        overflow:hidden;
    }
    .nav_left>ul>li:not(:first-child) .hide_nav>p{
        height: 34px;
        line-height: 34px;
        font-size: 16px;
        color:#fff;
        font-weight: bold;
        border-bottom: 1px solid #bfbfbf;
    }
    .nav_left>ul>li:not(:first-child) .hide_nav>div>a{
        font-size: 14px;
        line-height: 34px;
        display: inline-block;
        color: #fff;
        margin: 0px 9px;
    }
    .nav_left>ul>li:not(:first-child) .hide_nav>div>a:hover{
        color:salmon;
    }
    .nav_left>ul>li:not(:first-child):hover{
        color:#FFBA33;
        cursor:pointer;
        background:#ddd;
            
    }
    .nav_left>ul>li:not(:first-child):hover .hide_nav{
        display:block;
        padding-top:20px;
        padding-left:10px;
        padding-right: 10px;
    }
    
    .nav_left>ul>li:not(:first-child):hover img:first-child{
        transform: scale(1.5);
    }
    .nav_left>ul>li:not(:first-child):hover img:nth-child(3){
        transform: rotate(90deg);
    }
    .nav_left>ul>li>img{
        vertical-align: center;
    }
    .nav_left>ul>li>span{
        display:block;
        width:120px;
        margin-left:15px;
        margin-right:60px;
    }
    .nav_left_title{
        height:40px!important;
        text-align: center!important;
        color:rgba(255,255,255,1);
        background:rgba(15,6,111,1);
        margin:0!important;
        padding-left:35%;
    }
    /*右侧块元素*/
    .block_right{
        width:951px;
        height:533px;
        background:rgba(0,0,0,0.1);
        box-shadow:0px 0px 43px rgba(255,255,255,1);
       margin-top:30px;
       margin-left:20px;
       position:relative;
    }
    /*轮播图*/
    .el-carousel__item:nth-child(2n) {
   background:url('../assets/imgs/柯悦7.26/蒙版组 4.png')
  }
</style>

