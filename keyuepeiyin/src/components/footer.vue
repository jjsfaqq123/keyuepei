<template>
    <div class="footer_wc">
        <!-- 底层中心内容 -->
        <div class="footer_container">
            <div class="footer_container_bg">

                <p>立即开启有声世界</p>
                <div class="tozhenren">
                <button>制作真人配音 GO</button>
                </div>
            </div>
            <div class="footer_container_footer">
                <!-- 关于珂悦 -->
                <div class="gyky">
                    <div class="gyky_title">关于珂悦</div>
                    <ul>
                        <li>关于我们</li>
                        <li>关于我们</li>
                        <li>关于我们</li>
                        <li>关于我们</li>
                    </ul>
                    <div class="gyky_title">关于珂悦</div>
                    <ul>
                        <li>关于我们</li>
                        <li>关于我们</li>
                        <li>关于我们</li>
                        <li>关于我们</li>
                    </ul>
                </div>
                <!-- 在线客服 -->
                <div class="zxkf">
                    <p><img src="../assets/imgs/footer/电话.png" alt="">0551-66331366</p>
                    <button>在线客服</button>
                </div>
                <!-- 二维码扫描 -->
                <div class="erweima">
                    <div class="erweimaDiv">
                    <img src="../assets/imgs/footer/二维码.png" alt="">
                    </div>
                    <p>关注我们的公众号</p>
                </div>
            </div>
        </div>
        <!-- 最底层 -->
        <div class="footer_dicheng">Copyright © 成都珂悦文化传媒有限公司 All Rights Reserved. Designed by Langqi</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    /*外层*/
    .footer_wc{
        width:100%; 
        background:rgba(4,0,41,1)
    }
    /*中间*/
    .footer_container{
        height:493px;
        /* background:#fff; */
        margin:0 auto;
    }
    .footer_container_bg>p{
        width:313px;
        height:36px;
        font-size:36px;
        font-family:Source Han Sans CN;
        font-weight:bold;
        color:rgba(234,236,242,1);
        margin:0 auto;
        padding:50px 0 86px 0;
    }
    .tozhenren{
        width:240px;
        height:50px;
        border-radius:25px;
        margin:0 auto;
        background:rgba(255,255,255,1);
    }
    .footer_container_bg{
         background:url('../assets/imgs/footer/06572f0711b5c33a5d1fe8a70a709d0c.png') no-repeat;
         background-position: 50% 0%;
       
    }

    .footer_container_bg>.tozhenren>button{
        display: block;
        width:100%;
        height:100%;
        border-radius: 25px;
        background-image:linear-gradient(360deg,rgba(15,63,185,1) 0%,rgba(171,27,139,1) 100%);
        background-clip:text; 
        -webkit-text-fill-color:transparent; 
        cursor:pointer;     
    }
    /*中心地层*/
    .footer_container_footer{
        width:1236px;
        margin:0 auto;  
         margin-top:100px;
        display: flex;
        justify-content: space-between;
        color:rgba(234,236,242,1);
    }
    .footer_container_footer>div{
        border-right:2px solid rgba(0,71,157,1);
        padding-right:50px;
        padding-left:50px;
        width:30%;    
    }
    .gyky{
        width:40%;
        padding-right:50px;
        padding-left:50px;
       
    }
    .gyky>.gyky_title{
        font-size:18px;
        font-family:Microsoft YaHei;
        font-weight:400; 
        margin-bottom:20px;
    }
    .gyky>ul{
        display: flex;
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(234,236,242,1);
        margin-bottom:20px;
    }
    .gyky>ul>li{
        margin-right:10px;
    }
    .zxkf{
        padding-top:20px;
    }
    .zxkf>p{
        display: flex;
    }
    .zxkf>p>img{
        display:block;
        margin-right:12px;
        /* margin-top:20px; */
    }
    .zxkf>button{
        display:block;
        width:235px;
        height:46px;
        background:rgba(9,0,89,1);
        border-radius:23px;
        font-size:18px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(255,255,255,1);
        border:none;
        outline: none;
        margin-top:30px;
        cursor: pointer;
    }
    .zxkf>button:hover{
        transform:scale(1.2);
        color:crimson;
    }
    .erweimaDiv{
        background:#fff;
        width:124px;
        height:124px;
        padding:10px;
    }
    .erweima>p{
        width:124px;
        height:16px;
        font-size:12px;
        font-family:Microsoft YaHei;
        font-weight:400;
        text-align: center;
        margin-top:5px;
    }
   
    /*底层*/
    .footer_dicheng{
        height:36px;
        background:rgba(5,3,22,1);
        font-size:12px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(84,88,106,1);
        text-align: center;
    }
</style>
