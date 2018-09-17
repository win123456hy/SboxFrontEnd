<template>
  <div id="app">
    <h1>todos</h1>
    <div class="mytodolist">
      <InputTodo :todosLength="todos.length" @addData="addTodo" @change-all="changeAllTodos"/>
      <ul>
        <ListItems @todos-change="todoChange" v-for="(todo,index) in showableTodos" :index="index" :itemOfTodos="todo" :key="todo.id"/>
      </ul>
      <Features v-show="todos.length>0" :numberItem="numItemActived" :clear="clearable" @feature-clicked="handlerEvent"/>
    </div>
  </div>
</template>

<script>
import InputTodo from "./components/inputTodo.vue";
import ListItems from "./components/listItems.vue";
import Features from "./components/features.vue";

export default {
  name: "app",
  components: {
    InputTodo,
    ListItems,
    Features
  },
  data() {
    return {
      todos: [],
      temp: "all"
    };
  },
  computed: {
    showableTodos() {
      if (this.temp === "all") {
        return this.todos;
      }
      if (this.temp === "active") {
        return this.todos.filter(item => !item.status);
      }
      if (this.temp === "completed") {
        return this.todos.filter(item => item.status);
      }
    },
    numItemActived() {
      let count = 0;
      this.todos.forEach(element => {
        if (element.status == false) count++;
      });
      return count + " item left";
    },
    clearable: function() {
      let cl = false;
      this.todos.forEach(element => {
        if (element.status == true) cl = true;
      });
      return cl;
    }
  },
  methods: {
    addTodo(todo) {
      this.todos.push({
        id: this.todos.length + 1,
        do: todo,
        status: false
      });
    },
    todoChange(action, object) {
      if (action === "deleteToDo") {
        let { index } = object;
        this.todos.splice(index, 1);
      }
      if (action === "changeStatus") {
        let { index, status } = object;
        this.todos[index].status = status;
      }
      if (action === "editTodo") {
        let { index, todo } = object;
        this.todos[index].do = todo;
      }
    },
    changeAllTodos(status) {
      if (status) {
        this.todos.forEach(element => {
          element.status = true;
        });
      } else {
        this.todos.forEach(element => {
          element.status = false;
        });
      }
    },
    handlerEvent(action) {
      switch (action) {
        case "all":
          this.temp = action;
          break;
        case "active":
          this.temp = action;
          break;
        case "completed":
          this.temp = action;
          break;
        case "clearcompleted":
          this.clearCompleted();
          break;
        default:
          break;
      }
    },
    clearCompleted: function() {
      this.todos = this.todos.filter(item => !item.status);
    }
  }
};
</script>

<style>
ul {
  list-style: none;
  margin: 0px;
  padding: 0px;
}
::placeholder {
  font-size: 26px;
  color: #e6e6e6;
  font-style: italic;
}
h1 {
  margin: 0px;
  margin-bottom: 10px;
  color: #ead7d7;
  text-align: center;
  font-size: 100px;
  font-family: Helvetica;
  font-weight: normal;
}
.mytodolist {
    width: 550px;
    display: block;
    margin-left:30%;
    box-shadow: 0px 5px 20px 0px #B4B4B4;
}
</style>
