<template>
    <div class="musicMsg">
        <ul class="musicMsg_nav">
            <li v-for="(item,index) of musicMsg_nav" :key="index" :class="{musicMsg_nav_on:index==musicMsg_index}" @click="choosenav(index)" >
                {{item.name}}
                <ul>
                    <li v-for="i in 8" :key="i" @click="jumpRegs">
                        <div class="tu"></div>
                        <div class="wen">
                            <p>《非人学园》公开周年庆声优阵容</p>
                            <div>
                                <p>如何成为一名优秀的配音员？这也是大家所需要了解的问题，四海配音的配音员认为，成为一名优秀的职业配音演员需要具备以下几点：...</p>
                                <p>日期：2019-06-28  点击：541</p>
                            </div>      
                        </div>
                        <div class="action" >了解详情</div>
                    </li>
                </ul>
            </li>
        </ul>
        <el-pagination
        background
         layout="prev, pager, next,total,jumper"
        :total="70">
        </el-pagination>
    </div>
</template>
<style scoped>
.musicMsg{
        width:1200px;
        margin:0 auto;
        margin-top:47px;
        margin-bottom:113px;
}
.musicMsg>.musicMsg_nav{
    display:flex;
    justify-content: center;
    position:relative;
     height: 1316px;
}
.musicMsg>.musicMsg_nav>li{
    cursor: pointer;
    width:64px;
    height:21px;
    font-size:16px;
    font-family:Microsoft YaHei;
    font-weight:400;
    line-height:19px;
    color:rgba(51,51,51,1);
    margin-right: 137px;  
}
.musicMsg>.musicMsg_nav>li>ul{
    display:none;
}
.musicMsg_nav_on{
    color:rgba(15,6,111,1)!important;
     border-bottom:2px solid rgba(15,6,111,1);
     padding-bottom: 3px;
}
.musicMsg>.musicMsg_nav>.musicMsg_nav_on>ul{
    display:block;
}
.musicMsg_nav>li>ul{
    position:absolute;
    top:54px;
    left:0;
}
.musicMsg_nav>li>ul>li{
    width:1200px;
    height:140px;
    border:1px solid rgba(153,153,153,1);
    margin-bottom:20px;
    display:flex;

}
.tu{
    width:200px;
    background:url('../assets/imgs/配音资讯_slices/4c024f44562c375cc788164512e8f0c284c083114c6dd-cfVEJ0_fw658(1).png') no-repeat;
    transition:.5s linear;
}
.tu:hover{
    transform: scale(1.1);
}
.wen{
    width:1000px;
    padding-top:24px;
    padding-left:30px;
    padding-right:86px;
}
.musicMsg_nav>li>ul>li>.wen>p{
    font-weight:bold;
    line-height:22px;
    color:rgba(51,51,51,1);
}
.musicMsg_nav>li>ul>li>.wen>div{
    margin-top:13px;
    width:774px;
    height:62px;
    font-size:14px;
    font-weight:400;
    line-height:18px;
    color:rgba(102,102,102,1);
}
.musicMsg_nav>li>ul>li:hover p{
    color:rgba(15,6,111,1);
}
.musicMsg_nav>li>ul>li:hover .wen>div>p{
    color:rgba(102,102,102,1);
}
.musicMsg_nav>li>ul>li>.wen>div>p{
    overflow: hidden;
    text-overflow: ellipsis;
}
.musicMsg_nav>li>ul>li>.wen>div>p:last-child{
    margin-top:5px;
}
.action{
    width:100px;
    font-size:16px;
    color:rgba(255,255,255,1);
    text-align: center;
    line-height:140px;
    background:rgba(15,6,111,1);
}
/*分页*/
.el-pagination{
    margin-top:70px;
    margin-bottom:113px;
    text-align: center;
}

</style>

<script>
export default {
    data(){
        return{
            musicMsg_nav:[
                {name:'公司动态'},
                {name:'行业资讯'},
                {name:'配音技巧'},
                {name:'配音文案'},
            ],
            musicMsg_index:0,
        }
    },
    methods:{
        choosenav(index){
            event.stopPropagation();
            this.musicMsg_index=index;
        },
        jumpRegs(){
            this.$router.push('./musicMsg_register')
        }
    },
}
</script>

