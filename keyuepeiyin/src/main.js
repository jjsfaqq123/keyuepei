import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import header from './components/header.vue'
import footer from './components/footer.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';


Vue.prototype.axios=axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.component('myHeader',header);
Vue.component('myFooter',footer);

Vue.prototype.musicPauseAll = function(){
  var self = this;
  var audios = document.getElementsByTagName("audio");
  console.log(audios.length);
  if(audios.length > 0){
    [].forEach.call(audios, function (i) {
        // 将audios中其他的audio全部暂停
        i !== self && i.pause();
    });
  }
}

Vue.prototype.musicListenPlay = function(){
  var audios = document.getElementsByTagName("audio");
  console.log(audios.length);
  if(audios.length > 0){
    [].forEach.call(audios, function (i) {
      console.log('musicPlay 11111', typeof musicPauseAll, typeof this.musicPauseAll);
      i.addEventListener("play", this.musicPauseAll.bind(i));
    })
  }
}

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
