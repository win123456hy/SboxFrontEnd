<template>
  <div id="mainForm">
    <div class="cbDoFull">
      <input id="cbDoAll" type="checkbox" @change="changeAll(status)" v-show="todosLength>0" v-model="status" />
    </div>
    <input id="mainInput" placeholder="What needs to be done?" type="text" v-model="mainInput" @keyup.enter="addData" />
  </div>
</template>

<script>
export default {
  name: "InputTodo",
  props: ['todosLength'],
  data() {
    return {
      status: false,
      mainInput:""
    };
  },
  methods:{
    addData(){
      if(this.mainInput!="")
      this.$emit("addData",this.mainInput);
      this.mainInput="";
    },
    changeAll(){
      this.$emit("change-all",this.status);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mainForm{
    width: 550px;
    box-shadow:0px 0px 1px #e6e6e6;
    display: flex;
    align-items: center;
}
.cbDoFull{
    display: inline-block;width: 58px;height: 30px;
}
#mainInput{
    width: 450px;
    height: 69px;
    border:none;
    font-size:24px;
    font-family:Helvetica;
}
#mainInput:focus{
    outline: none;
}
#cbDoAll:checked::before{
    content: url(../assets/downChecked.svg);
}
#cbDoAll{
    margin-top: 7px;
    margin-left: 15px;
}
#cbDoAll::before{
    content: url(../assets/downUnChecked.svg);
    display: block;
    width: 24px;
}
</style>
