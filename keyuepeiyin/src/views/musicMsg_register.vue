<template>
    <div class="peiyinzixun">
        <div class="pyzx_title">
            <p>
                <router-link to="/musicMsg">配音咨询</router-link>
                >
                <router-link to="/musicMsg_register">配音详情</router-link>
            </p>
        </div>
        <article>
            <h1>《非人学园》公开周年庆声优阵容</h1>
            <p>
                <span>发布时间：2019-06-08 10:33</span>
                <span>阅读次数：542次</span>
            </p>
            <article>
                <div>   
                    盛大狂欢今日开启，《非人学园》周年庆明日来袭！为了迎接一周岁生日，学园放出声优悬念视频，超豪华的CV阵容引发大讨论
                    。钉宫理惠、田村由香里、佐仓绫音、立花慎之介、阪口大助、小山力也等超多重磅日语CV大咖，你最喜欢谁呢？快来加入同学们的讨论吧！<br>
                星光熠熠大咖云集 周年庆声优名单公布
                </div>
                <div>   
                    除了声优悬念视频，今日《非人学园》更正式公布周年庆全新一波声优名单，众多声优大咖齐聚，让人大呼过瘾！在《非人学园》里，非人明星们拥有魔性的人设，
                    二次元的清爽画风，而要让诸多性格分明的角色鲜活起来，优秀的CV演绎不可或缺。不知不觉间，《非人学园》已陪伴同学们走过一年时光。在这一年里，又有八戒、
                    司夜、游光、昴日等众多鲜活的角色，踏上非都这片奇妙的土地，在声优的倾情演绎下，展现他们独特的个性，其中谁给你留下最深刻的印象呢？           
                </div>
                <div>          
                    近期登场学园的昴日，是一个调皮捣蛋的少女，为她配音的是新生代日语CV大咖佐仓绫音。佐仓绫音，演绎过《我的英雄学院》中的丽日御茶子，本身声线适应性很广，
                    曾在舰娘动画创下一人九角的记录。这次由她来给昴日配音，除了绫音本身萌萌哒的性格外，可能也是联想到她在《十二大战》中配了同样是“鸡”的庭取吧。
                </div>
                <div>   
                除了以上两位，日语CV中，还有出演了《钢之炼金术师》阿尔冯斯·艾尔利克、《灼眼的夏娜》夏娜、《银魂》神乐等的钉宫理惠；代表作《元气少女缘结神》巴卫、
                《鹡鸰女神》佐桥皆人，声音透明且清爽的立花慎之介，出演学园奶狗吸血鬼德古拉；以及阪口大助、小山力也、大久保瑠美、梶裕贵等一众大家熟悉的CV，你最喜欢谁在
                学园里的配音呢？     
                </div>
                <div> 
                    想要加入《非人学园》周年庆盛夏狂欢，想要感受CV大咖们声线的魔力，就赶紧登录学园官网，下载游戏最新版本吧！最后再给大家爆一个猛料，声优悬念视频中尚未出现
                    的周年庆神秘英雄——悟空，他的中配据说是阿杰，日配更是一个超人气大咖！想听到两位大大比拼对悟空的演绎，请期待周年庆上悟空的正式登场咯！    
                </div>
            </article>
            <span>
                <router-link to="/">上一条：英雄学院赢了比偶...</router-link>
                <router-link to="/">下一条：英雄学院赢了比偶...</router-link>
            </span>
        </article>
    </div>
</template>

<style scoped>
    .peiyinzixun{
        width: 1200px;
        margin:0 auto;
    }
    /*标题*/
    .peiyinzixun>.pyzx_title{
        margin-top:17px;
        margin-bottom:40px;
    }
    .peiyinzixun>.pyzx_title>p{
        width:133px;
        height:19px;
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        line-height:17px;
        
    }
    .peiyinzixun>.pyzx_title>p>a{
        color:rgba(153,153,153,1)!important;
    }
    .peiyinzixun>.pyzx_title>p>a:hover{
        color:midnightblue!important;
        border-bottom:1px solid midnightblue!important;
    }
    /*文章内容*/
    article>h1{
        text-align: center;
        font-size:30px;
        font-family:Microsoft YaHei;
        font-weight:bold;
        color:rgba(51,51,51,1);
        margin-bottom: 22px;
    }
    article>p{
        font-size:14px;
        font-weight:400;
        text-align: center;
        color:rgba(51,51,51,1);
    }
    article>p>span{
        margin-right:29px;
    }
    article>article>div{
        font-size:16px;
        font-family:Microsoft YaHei;
        font-weight:400;
        line-height:30px;
        color:rgba(51,51,51,1);
        text-indent: 2rem;
    }
    article>article{
        margin-top:7px;
        padding-top:15px;
        padding-bottom:60px;
        margin-bottom:6px;
        border-top:1px solid rgba(242,242,242,1);
        border-bottom: 1px solid rgba(242,242,242,1);
        
    }
    article>span{
        display: flex;
        justify-content: space-between;
        margin-bottom:110px;
    }
    article>span>a{
        display:block;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        width:197px;
        height:19px;
        font-size:14px;
        font-weight:400;
        color:rgba(153,153,153,1)!important;
     }
     article>span>a:hover{
         color: midnightblue!important;
         border-bottom: 1px solid midnightblue;
     }
</style>
