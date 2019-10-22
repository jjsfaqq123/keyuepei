<template>
    <div class="aboutkeyue">
        <!-- 标题 -->
        <div class="title">
            <div class="titleImgs">
                <img src="../assets/imgs/柯悦7.26/组 6.png" alt="">
            </div>
            <div class="title_firstText"><span>关于我们</span> <p></p></div>
            <p>ABOUT US</p>
        </div>
        <!-- 图文 -->
        <div class="tuwen">
            <div class="tu"></div>
            <div class="wen">
                   <p> 珂悦配音成立于2017年5月，隶属于北京微量分贝科技有限公司。是微量分贝旗下的配音平台，由爱尔兰卡罗理工的创新产品学士蒙太奇创立。</p>   
                   <p> 2017年11月，公司成立半年，即成为腾讯等国内知名用户的长期、集团层面的供应商。</p>   
                   <p> 2018年6月闪电配音对外宣布，由兴旺投资领投，获得1500万元 pre-A轮融资。 </p>   
            </div>
        </div>
        <!-- 我们的优势 -->
        <div class="youshi">
            <div class="title">
            <div >
                <img src="../assets/imgs/柯悦7.26/组 6.png" alt="">
            </div>
            <div class="title_firstText"> 我们的优势  <p></p></div>
            <p>OUR ADVANTAGES</p>
            </div>
            <!-- 高质量交付 -->
            <ul class="pay">
                <li v-for="(item,index) of pay_nav" :key='index'>
                    <div class="pay_numbers" :style="'background-image:url('+item.numbers+' )'"></div>
                    <div class="pay_imgs" :style="'background-image:url('+item.imgs+')'"></div>
                    <div class="pay_wen">
                        <p>高质量交付</p>
                        <p>
                            闪电配音提供：千字／ 15分钟快速交付
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 业务范畴 -->
        <div class="yewu">
            <div class="title">
            <div class="titleImgs">
                <img src="../assets/imgs/柯悦7.26/组 6.png" alt="">
            </div>
            <div class="title_firstText"><span>业务范畴</span> <p></p></div>
            <p>BUSINESS SCOPE</p>      
            </div>
             <ul>
                <li v-for="(item,index) of yewu_nav" :key="index">
                    <img :src="item.url" alt="">
                    <p>{{item.title1}}</p>
                    <p>{{item.title2}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            pay_nav:[
                {numbers:require('../assets/imgs/关于柯悦_slices/切图_03.jpg'),imgs:require('../assets/imgs/关于柯悦_slices/智能服务.png')},
                {numbers:require('../assets/imgs/关于柯悦_slices/切图_05.jpg'),imgs:require('../assets/imgs/关于柯悦_slices/云平台维护.png')},
                {numbers:require('../assets/imgs/关于柯悦_slices/切图_09.jpg'),imgs:require('../assets/imgs/关于柯悦_slices/智能.png')},
                {numbers:require('../assets/imgs/关于柯悦_slices/切图_10.jpg'),imgs:require('../assets/imgs/关于柯悦_slices/质量认证.png')},
            ],
            yewu_nav:[
                {title1:"配音、录音类",title2:'Dubbing and recording',url:require('../assets/imgs/关于柯悦_slices/切图_14.jpg')},
                {title1:"广播、播报类",title2:'Broadcasting and broadcasting',url:require('../assets/imgs/关于柯悦_slices/切图_16.jpg')},
                {title1:"影视多媒体类",title2:'Film and TV Multimedia Class',url:require('../assets/imgs/关于柯悦_slices/切图_18.jpg')},
                {title1:"教学课程类",title2:'Teaching Courses',url:require('../assets/imgs/关于柯悦_slices/切图_21.jpg')},
                {title1:"工业机械用声",title2:'Sound for Industrial Machinery',url:require('../assets/imgs/关于柯悦_slices/切图_23.jpg')},
                {title1:"车站机场配音",title2:'Dubbing at Station and Airport',url:require('../assets/imgs/关于柯悦_slices/切图_30.jpg')},
                {title1:"出版文章",title2:'Publishing articles',url:require('../assets/imgs/关于柯悦_slices/切图_31.jpg')},
                {title1:"解说类",title2:'Commentary',url:require('../assets/imgs/关于柯悦_slices/切图_32.jpg')},
                {title1:"翻译类",title2:'Translation',url:require('../assets/imgs/关于柯悦_slices/切图_33.jpg')},
                {title1:"后期制作",title2:'Post production',url:require('../assets/imgs/关于柯悦_slices/切图_34.jpg')},
            ],
        }
    },
}
</script>


<style scoped>  
    .aboutkeyue{
        margin-top:35px;
    }
    /*图文*/
    .tuwen{
        margin-top:17px;
        display: flex;
        justify-content: center;
        margin-bottom:50px;
    }
    .tu{
        cursor: pointer;
        width:550px;
        height:330px;
        background:url('../assets/imgs/关于柯悦_slices/摄图网_500450997(1).png');
        border-radius:10px;
    }
    .tu:hover{
        transform: scale(1.1);
        transition: .5s linear;
    }
    .wen{
        width:454px;
        height:328px;
        font-size:18px;
        font-weight:400;
        color:rgba(51,51,51,1);
        padding-top:26px;
        margin-left:50px;
    }
    .wen>p{
        line-height:30px;
        margin-bottom:30px;
    }
    /*我们的优势*/
    .youshi{
        height:625px;
        background:url('../assets/imgs/关于柯悦_slices/fundo-abstrato-de-ondas-de-particulas-de-equalizador_23-2148185705.png') rgba(4,0,41,1);
    }
    .youshi>.title{
        margin-top:50px;
        color:rgba(255,255,255,1); 
        margin-bottom:20px;
    }
    .youshi>.title>div>img{
        margin-top:49px;
    }
    
    .youshi>.pay{
        width:1200px;
        margin:0 auto;
        display: flex;
        flex-flow: wrap;
        justify-content: space-between;
        
    }
    .youshi>.pay>li{
        width:555px;
        height:195px;
        background:linear-gradient(90deg,rgba(2,80,197,1) 0%,rgba(212,63,141,1) 100%);
        border-radius:10px;
        margin-bottom:40px;
        display:flex;
        position: relative;
    }
    .youshi>.pay>li>.pay_numbers{
        width:30px;
        height:45px;
        background: rgba(15,6,111,1) no-repeat;
        top:0;
        left:30px;
        position:absolute;
    }
    .youshi>.pay>li>.pay_imgs{
        width:130px;
        height:130px;
        background: rgba(247,247,247,1) no-repeat;
        background-position: 50%;
        border-radius:50%;
        margin-right:52px;
        margin-left:38px;
        margin-top:32px;
        cursor: pointer;
    }
    .youshi>.pay>li>.pay_imgs:hover{
        transform: rotate(360deg);
        transition:1s linear;
    }
    .youshi>.pay>li>.pay_wen{
            font-size:16px;
            font-weight:400;
            color:rgba(255,255,255,1);
            margin-top:52px;
     }
    .youshi>.pay>li>.pay_wen>p:first-child{
          font-size:20px;
          margin-bottom:21px;
      }
    /*业务范畴*/
    .yewu{
        width:1200px;
        margin:0 auto;
        padding-top:50px;
        margin-bottom:72px;
    }
    .yewu>ul{
        display: flex;
        flex-flow:wrap;
        justify-content: center;
        margin-top:27px;
    }
    .yewu>ul>li{
        width:20%;
        text-align:center;
        margin-bottom:39px;
        cursor: pointer;
    }
    .yewu>ul>li:hover{
        transform: scale(1.2);
        transition: .5s linear;
    }
    .yewu>ul>li>p{
        font-size:18px;
        color:rgba(51,51,51,1);
    } 
    .yewu>ul>li>p:last-child{
        font-size:12px;
        font-family:Arial;   
        color:rgba(153,153,153,1);
    }
</style>
