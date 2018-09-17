<template>
  <div>
    <li>
        <input id="cbDoOne" type="checkbox" v-model="todo.status" @change="changeStatus"/>
        
        <span id="todo" v-bind:style="[todo.status ? { 'textDecoration':'line-through','color':'#e6e6e6','transition':'color 0.5s'}:{'textDecoration':'none'}]" v-if="!dbClick" @dblclick="inputDblClick">{{todo.do}}</span>
        <input id="inputItem" v-else type="text"  v-model="todo.do" @keyup.enter="editTodo" />
        <img src="../assets/delete.svg" id="delete" @click="deleteToDo">
    </li>
  </div>
</template>

<script>
export default {
  name: "ListItems",
  props: ["itemOfTodos", "index"],
  data() {
    return {
      todo: this.itemOfTodos,
      dbClick: false
    };
  },
  watch:{
    itemOfTodos(){
      this.todo=this.itemOfTodos;
    }
  },
  methods: {
    changeStatus() {
      this.$emit("todos-change", "changeStatus", {
        index: this.index,
        status: this.todo.status
      });
    },
    inputDblClick() {
      this.dbClick=true;
    },
    editTodo() {
       this.$emit("todos-change", "editTodo", {
        index: this.index,
        todo: this.todo.do
      });
      this.dbClick=false;
    },
    deleteToDo() {
      this.$emit("todos-change", "deleteToDo", {
        index: this.index
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#delete {
    content: url("../assets/delete.svg");
    position: absolute; right:25px;
    margin: 0px;
    width: 12px;
    visibility: hidden;
}
#delete:hover {
    visibility: visible;
    content: url("../assets/deleteHover.svg");
}

li {
    position: relative;
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 0.1px gray;
    line-height: 65px;
    padding-left: 10px;
    width: 540px;
}
li:hover #delete {
    visibility: visible;
}
#cbDoOne:checked::before{
    content: url(../assets/checked.svg);
    position: absolute;
    left: 8px;
    top: 15px;
}
#cbDoOne::before{
    content: url(../assets/nocheck.svg);
    display: block;
    width: 36px;
    height: 36px;
    position: absolute;
    left: 8px;
    top: 15px;
}
#todo {
    width: 200px;
    margin: 0px;
    padding-left: 31px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size:24px;
    font-family:Helvetica;
}
#inputItem{
    font-size:24px;
    font-family:Helvetica; 
    margin-left: 30px !important;
    margin-top: 1px !important;
    height: 58px;
    width: 490px;
    border: solid 0.5px gray;
}
#inputItem:focus{
    outline: none;
}
</style>
