<template>
  <span>{{number}}</span>
</template>
<script>
// import { setInterval } from 'timers';

export default {
  name: "numberIncrease",
  data(){
      return {
          number: 0
      }
  },
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 1
    },
    time: {
      type: Number,
      default: 10
    }
  },
  methods: {
    increase(number) {
      if(this.max >= 0 && this.step >= 0){
          if(this.max <= this.min + this.step){
            this.number = this.max;
          }else{
            var that = this;
            this.number = this.min;
            this.startPlus();
          }
      }
    },
    startPlus(){
        var that = this;
        setTimeout(function(){
            // console.log(that.number);
            that.number += that.step;
            if (that.number < that.max) {
                that.startPlus();
            }else{
                that.number = that.max;
            }
        }, this.time);
    }
  },
  mounted(){
      this.increase();
  }
};
</script>