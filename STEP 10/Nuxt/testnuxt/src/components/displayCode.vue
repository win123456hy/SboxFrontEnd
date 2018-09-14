<template>
  <div>
    <div class="right" :style="{width:widthCd}">
      <div class="top">
        <button @click="minimizeCode" :style="{visibility:isShow}"></button>
        <p>{{showRoute}}</p>
      </div>
      <div class="bottom">
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DisplayCode',
  props: ['widthCd','isShow'],
  data(){
    return{
    }
  },
  computed:{
    showRoute(){
     return this.$route.path
    }
  },
  components:{
  },
  methods:{
    minimizeCode(){
      this.widthCd="1100px";
      this.$emit("view-change",this.widthCd,"200px");
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.right{
  background:yellow;
  width:1150px; 
  transition: width 0.3s;
}
.right>.top{
  background:#EEF0F1;
}

.right>.bottom{
  background:#FCFCFC;
  height:500px;
}
.top{
  position: relative;
}
p{
  position: absolute;
  font-size: .9em;
  font-weight: 400;
  letter-spacing: 1px;
  right: 20px;
}
.top>button{
  margin:20px;
  background: url("../assets/showMenu.svg") no-repeat;
  background-size:17px;
  width: 20px;
  height: 20px;
  border: none;
  position: absolute;
  z-index: 10;
}
button:hover{
  cursor: pointer;
}
button:focus{
  outline: none;
}
</style>
