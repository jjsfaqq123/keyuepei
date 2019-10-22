<template>
    <div class="teacher_item">
        <div class="tu">

        </div>
        <div class="register">
            <div class='register_header'>
                <img src="../assets/imgs/配音老师_slices (5)/热(1).png" alt="">
                <p>吉吉老师</p>
                <span>交易量：213</span>
            </div>
            <div class='register_content'>
                <div>
                    <p>个人信息：</p>
                    <p>可萌 可攻 可受 还辣么可爱...</p>
                </div>
                <div>
                    <p>语言精通：</p>
                    <p>澳大利亚语  西班牙语  马来...</p>
                </div>
            </div>
            <div class='register_footer'>
                <button @click="jumpMusicT_R">查看详情</button>
                <button>立即咨询</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        jumpMusicT_R(){
            this.$router.push('/musicTeacher_register')
        }
    },
}
</script>

<style scoped>
    .teacher_item{
        width:250px;
        height:400px;
        background:rgba(255,255,255,1);
        box-shadow:1px 2px 12px rgba(15,6,111,0.22);
        border-radius:10px;
        margin-right:40px;
        margin-bottom:42px;
    }
    .tu{
        width:250px;
        height:170px;
        background:url('../assets/imgs/配音老师_slices (5)/摄图网_500882911(1).png') rgba(153,153,153,1) no-repeat;
        border-radius:10px 10px 0px 0px;
        transition: .5s linear;
        cursor: pointer;
    }
    .tu:hover{
        transform: scale(1.05);
    }
    .register{
        padding-top:10px;
        padding-left:9px;
    }
    /*头部*/
    .register>.register_header{
        display:flex;
    }
    .register>.register_header>p{    
        font-size:18px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(15,6,111,1);
        margin-left:9px;
        margin-right:56px;
    }
    .register>.register_header>span{
        font-size:12px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(51,51,51,1);
        margin-top:7px;
    }
    /*内容*/
    .register>.register_content>div{
        margin-top:15px;
    }
    .register>.register_content>div>p:first-child{
        font-size:14px;
        color:rgba(51,51,51,1);
        margin-bottom:5px;
    }
    .register_content>div>p:last-child{
        font-size:14px;
        width:199px;
        color:rgba(153,153,153,1);
    }
    /*尾部*/
    .register_footer{
        margin-top:36px;
    }
    .register_footer>button{
        width:100px;
        height:30px;
        border:1px solid rgba(15,6,111,1);
        border-radius:5px;
        line-height: 30px;
        text-align: center;
        font-size:14px;
        font-weight:400;
        color:rgba(15,6,111,1);
        margin-left:10px;
        background:#fff;
        cursor: pointer;
    }
    .register_footer>button:hover{
        background:rgba(15,6,111,1);
        color:rgba(255,255,255,1);
    }
</style>
