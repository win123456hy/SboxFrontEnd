<template>
  <div class="underList">
    <div class="features">
      <span id="numbitem">{{numberItem}}</span>
      <button id="btnAll" @click="allTodos">All</button>
      <button @click="allActive">Active</button>
      <button @click="allCompleted">Completed</button>
      <button id="btnClearC" v-show="clear" @click="clearCompleted">Clear Completed</button>
    </div>
    <div class="flatdown1"></div>
    <div class="flatdown2"></div>
  </div>
</template>

<script>
export default {
  name: "Features",
  props:['numberItem','clear'],
  data() {
    return {
    };
  },
  methods: {
    allTodos(){
      this.$emit("feature-clicked","all");
    },
    allActive(){
      this.$emit("feature-clicked","active");

    },
    allCompleted(){
      this.$emit("feature-clicked","completed");

    },
    clearCompleted(){
      this.$emit("feature-clicked","clearcompleted");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.underList{
    position: relative;
}
.features{
    width: 550px;
    height: 45px;
    position: absolute;
    z-index: 3;
    background: white;
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 10px 0px #B4B4B4;
}
.flatdown1{
    position: absolute;
    left:5px;
    top:5px;
    z-index: 2;
    width: 540px;
    height: 45px;
    box-shadow: 0px 0px 10px 0px #B4B4B4;
    background: white;
}
.flatdown2{
    position: absolute;
    left:10px;
    top:11px;
    z-index: 1;
    width: 530px;
    height: 45px;
    box-shadow: 0px 0px 10px 0px #B4B4B4;
    background: white;
}
button {
    margin-right: 10px;
    padding: 5px 8px 5px 8px;
    font-size: 14px;
    border: none;
    font-family:Helvetica;
    font-size: 14px;
    color: #777777;
    background: white;
}
button:focus{
    outline: none;
    border:solid 1px #EFD5D5;
    border-radius: 5px;
}
button:focus:hover{
    border:solid 1px #EFD5D5;
    border-radius: 5px;
}
button:hover{
    border:solid 1px #F7EAEA;
    border-radius: 5px;
}
#btnAll{
    margin-left: 55px;
}
#btnClearC{
    padding-right: 0px;
    width: 150px;
    margin-left: 73px;
    border: none !important;
}
#numbitem {
    width: 100px;
    height: 20px;
    font-family:Helvetica;
    font-size: 13px;
    color: #777777;
    padding-left: 15px;
}
</style>
