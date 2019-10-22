import Vue from "vue";
import Router from "vue-router";
import index from './views/index.vue';
import musiceExample from './views/musicExample.vue' ;
import musicTeacher from './views/musicTeacher.vue' ;
import musicTeacher_register from './views/musicTeacher_register.vue' ;
import aboutkeyue from './views/aboutkeyue.vue' ;
import musicMsg from './views/musicMsg.vue' ;
import musicMsg_register from './views/musicMsg_register.vue' ;
import keyueExample from './views/keyueExample.vue' ;

Vue.use(Router);

export default new Router({
  routes: [
    {name:"index",path: "/", component: index},
    {name:"index",path: "/index", component: index},
    {name: "musicExample",path: "/musicExample", component:musiceExample},
    {name:"musicTeacher",path: "/musicTeacher", component:musicTeacher},
    {name:"musicTeacher",path: "/musicTeacher_register", component:musicTeacher_register},
    {name:"aboutkeyue",path: "/aboutkeyue", component:aboutkeyue},
    {name:"musicMsg",path: "/musicMsg", component:musicMsg},
    {name:"musicMsg_register",path: "/musicMsg_register", component:musicMsg_register},
    {name:"keyueExample",path: "/keyueExample", component:keyueExample},
   
  ]
});
