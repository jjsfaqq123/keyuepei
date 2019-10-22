

<template>
     <div class="musicTeacher">
         <!-- 多重选项卡选项卡设置 -->
            <!-- 多重选项卡选项卡设置 -->
      <div class="Moreselect">
        <div class="title">
          <router-link to="/">全部结果</router-link>>
          <router-link to="/">所有</router-link>

          <span v-for="(value, key) in filter" :key="key" v-show="value>0">
            >{{getFilterName(key, value)}}
            <span @click="close(value,key)">x</span>
          </span>
        </div>
        <div class="selector">
          <span>类别：</span>

          <ul>
            <li
              :class="{selector_on:filter.type==index}"
              v-for=" (item,index) of type"
              :key="index"
              @click="choosetype(index,item)"
            >{{item}}</li>
          </ul>
        </div>
        <div
          class="selector"
          v-for="(item,index) of type2"
          :key="index"
          v-show="index==filter.type-1"
        >
          <span>子类：</span>
          <ul>
            <li
              :class="{selector_on:filter.type2==index2}"
              v-for=" (item2,index2) of item"
              :key="index2"
              @click="choosetype2(index2,item2)"
            >{{item2}}</li>
          </ul>
        </div>
        <div class="selector">
          <span>性别：</span>
          <ul>
            <li
              :class="{selector_on:filter.sex==index}"
              v-for=" (item,index) of sex"
              :key="index"
              @click="choosesex(index,item)"
            >{{item}}</li>
          </ul>
        </div>
        <div class="selector">
          <span class="languageSpan">语言：</span>
          <ul>
            <li
              :class="{selector_on:filter.language==index}"
              v-for=" (item,index) of language"
              :key="index"
              @click="chooselanguage(index,item)"
            >{{item}}</li>
          </ul>
        </div>
        <div class="selector">
          <span>价格：</span>
          <ul>
            <li
              :class="{selector_on:filter.price==index}"
              v-for=" (item,index) of price"
              :key="index"
              @click="chooseprice(index,item)"
            >{{item}}</li>
          </ul>
        </div>
      </div>

         <!-- teacher-item -->
         <ul>
             <li v-for=" i in 12" :key='i'>
                 <teacher-item></teacher-item>
             </li>
         </ul>
         <!-- 分页器 -->
        <el-pagination
        background
        layout="prev, pager, next"
        :total="70">
        </el-pagination>
    </div>
</template>

<script>
import teacherItem from '../components/teacher_item'
export default {
   data() {
    return {
      type: [
        "全部",
        "专题",
        "宣传片",
        "纪录片",
        "课件多媒体",
        "广告",
        "动画动漫",
        "外语",
        "特殊类型"
      ],
      // typeIndex:0,

      type2: [
        [
          "全部",
          "学校院校教育",
          "公安法院监狱派出所",
          "项目规划专题",
          "人物专题",
          "金融银行",
          "企业专题集团概述",
          "医疗/医院专题",
          "产品介绍 产品解说",
          "总结汇报/工作纪实",
          "党建工作专题",
          "教育培训机构",
          "文化历史 探索发现",
          "宗教专题/佛教 寺庙",
          "政府机关专题/军队",
          "新闻播报/时事新闻",
          "其他解说旁白"
        ],
        [
          "全部",
          "招商宣传/招商引资",
          "公益宣传/福利院/慈善",
          "茶酒宣传/乌龙茶普洱茶/酒文化",
          "汽车交通/公交车/交警/道路交通/交通运输",
          "旅游风光/旅游推介/景区",
          "品牌宣传/品牌介绍",
          "城市宣传片/城市地区宣传/城市形象/经济开发区",
          "医疗宣传/医院宣传/医疗平台宣传",
          "集团企业宣传介绍",
          "学校宣传/幼儿园/小学中学大学/驾校/技术学院",
          "其他宣传"
        ],
        [
          "全部",
          "文献类/专栏解说",
          "自然类/地理/远古时代",
          "科教类/电视纪录片/科技",
          "人文历史/长征记录/台北故宫/历史记录片",
          "舌尖风格/美食/重庆小面",
          "人物纪录片/人物纪实/人物历史",
          "其他记录片/申遗等"
        ],
        [
          "全部",
          "项目展示 工程汇报",
          "产品演示",
          "培训课件/教学培训",
          "有声读物/儿童故事",
          "IC语音 游戏语音",
          "PPT幻灯片"
        ],
        [
          "全部",
          "电影电视预告 片头",
          "模仿广告 人物模仿",
          "广播提示 商场广播",
          "节日广告",
          "慈善公益广告",
          "栏目导视/栏目包装",
          "旅游广告宣传",
          "电台包装 电台片花",
          "电话彩铃 手机彩铃",
          "手机通讯 电信联通",
          "酒类广告",
          "房地产广告",
          "医疗医药",
          "汽车交通 品牌汽车",
          "品牌形象",
          "活动宣传",
          "电视购物 电购促销",
          "企业形象",
          "产品广告",
          "招商广告",
          "学校教育 学校招生",
          "促销广告",
          "其他广告"
        ],
        [
          "全部",
          "游戏CG",
          "动画片",
          "模仿",
          "儿童",
          "老人",
          "角色扮演",
          "动画解说"
        ],
        [
          "全部",
          "英语（外籍母语）",
          "英语（国内）",
          "日语配音",
          "德语配音",
          "韩语配音",
          "法语配音",
          "泰语配音",
          "越南语配音",
          "西班牙语配音",
          "意大利语配音",
          "阿拉伯语配音",
          "葡萄牙语配音",
          "马来西亚语配音"
        ],
        [
          "全部",
          "语音导游导游词解说",
          "微电影视频",
          "飞碟说病毒营销",
          "歌曲翻唱",
          "说唱快板",
          "晚会开场",
          "散文诗歌朗诵",
          "悼词",
          "大气颁奖",
          "译制片",
          "教育培训机构",
          "文化历史 探索发现",
          "宗教专题/佛教 寺庙",
          "政府机关专题/军队",
          "新闻播报/时事新闻",
          "其他解说旁白"
        ]
      ],

      sex: ["全部", "男", "女", "童声"],

      language: [
        "全部",
        "普通话",
        "童声",
        "方言",
        "粤语",
        "英语",
        "日语",
        "韩语",
        "俄语",
        "意大利语",
        "印尼",
        "越南 ",
        "马来西亚语",
        "阿拉伯语",
        "波兰语",
        "泰语",
        "其他语种"
      ],

      price: ["全部", "1-30/分", "35-60元/分", "70-80元/分", "90-120/分"],
      typeNav: "",
      type2Nav: "",
      sexNav: "",
      languageNav: "",
      priceNav: "",
      filter: {
        type: 0,
        type2: 0,
        sex: 0,
        language: 0,
        price: 0
      }
    };
  },
    methods: {
    choosetype(index, item) {
      this.filter.type = index;
      this.$router.push({
        name: "musicTeacher",
        query: this.filter
      });
    },
   
    choosetype2(index2, item2) {
        if(this.filter.type!=0){
      this.filter.type2 = index2;
      this.$router.push({
        name: "musicTeacher",
        query: this.filter
      });
      this.type2Nav = item2;
    }else{
        this.filter=type2=0;
    }
    },

    choosesex(index, item) {
      this.filter.sex = index;
      this.$router.push({
        name: "musicTeacher",
        query: this.filter
      });
      this.sexNav = item;
    },
   
    chooselanguage(index, item) {
      this.filter.language = index;
      this.$router.push({
        name: "musicTeacher",
        query: this.filter
      });
      this.languageNav = item;
    },
    
    chooseprice(index, item) {
      this.filter.price = index;
      this.$router.push({
        name: "musicTeacher",
        query: this.filter
      });
      this.priceNav = item;
    },
   
    close(key,value){
        console.log(key,value);
         this.filter[value]=0;
         if(value =="type") {
             this.filter.type2 = 0;
         }
        this.$router.push({name:"musicTeacher",query:this.filter});
    },
    renderPage() {
      this.filter = Object.assign(
        {
          type: 0,
          type2: 0,
          sex: 0,
          language: 0,
          price: 0
        },
        
        this.$route.query
      );
      
    },
    getFilterName(key, value) {
      switch (key) {
        case "type":
          return this.type[value];
          break;
        case "type2":
            var type2Key = this.filter.type - 1;
            if(this.type2[type2Key] && typeof this.type2[type2Key] == 'object'){
                var type2Arr = this.type2[type2Key];
                if(type2Arr[value]){
                    return type2Arr[value];
                }

                
            }
            return '';
          break;
        case "price":
          return this.price[value];
          break;
        case "language":
          return this.language[value];
          break;
        case "sex":
          return this.sex[value];
          break;
        default:
          return "";
      }
    },
    loadData() {}
  },
  mounted() {
    this.renderPage();
  },
  watch: {
    $route: function(to, from) {
      this.filter = Object.assign(
        {
          type: 0,
          sex: 0,
          type2: 0,
          language: 0,
          price: 0
        },
        to.query
      );
    
    }
  },
    components:{teacherItem}
};


</script>

<style scoped>
    .musicTeacher{
        width:1200px;
        margin:0 auto;
        margin-bottom:111px;
    }
    .Moreselect{
        margin-bottom:50px;
    }
    .Moreselect>.title{
       text-align: left;
        height:19px;
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        line-height:17px;
        color:rgba(153,153,153,1);
        margin-top:18px;
    }
     .Moreselect>.title>a{
         color:rgba(153,153,153,1);
     }
     .Moreselect>.title>a:hover{
         color:midnightblue;
         border-bottom: 1px solid midnightblue;
     }
     .Moreselect>.title>span{
        cursor: pointer;
        
    }
    .Moreselect>.title>span>span{
         background: #ddd;
        font-weight: bolder;
        color: #000;
    }
    .selector{
        display: flex;
        width:1200px;
        border-bottom:1px solid rgb(204,204,204);
        padding-bottom:10px;
        
    }
    .selector:last-child{
        border:0;
    }
    .selector>span{
        margin-top:18px;
        display: block;
        width:5%;
    }
   
    .selector>ul{
        width:95%;
        margin-left:29px;
        display:flex;
        align-items:center;
        flex-flow:wrap;
    }
    .selector>ul>li{
        margin-top: 17px;
        box-sizing: content-box;
        height:27px;
        font-size:16px;
        font-family:Microsoft YaHei;
        font-weight:400;
        text-align: center;
        line-height: 27px;
        cursor: pointer;
        margin-right: 39px;
        padding:0px 10px;

    }
    .selector_on{
        background:rgba(15,6,111,1);
        border-radius:5px;
        color:rgba(255,255,255,1);
    }
    .musicTeacher>ul{
        display:flex;
        justify-content: center;
        flex-flow: wrap;
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
