
var toDoApp = new Vue({
    el: "#toDoApp",
    data: {
        todos: [],
        abc: "",
        temp: "",
        stc: false
    },
    computed: {
        showableTodos() {
            if(this.temp === ''){
                return this.todos;
            }
            if(this.temp === 'active'){
                return this.todos.filter(item => !item.status);
            }
            if(this.temp === 'completed'){
                return this.todos.filter(item => item.status);
            }
        },
        clearable: function () {
            let cl = false;
            this.todos.forEach(element => {
                if (element.status == true)
                    cl = true;
            });
            return cl
        },
        numItemActived: function () {
            let count = 0;
            this.todos.forEach(element => {
                if (element.status == false)
                    count++;
            });
            return count+" item left"
        }
    },
    methods: {
        addData: function () {
            if (this.abc != ""){
                this.todos.push({
					id: this.todos.length + 1,
                    do: this.abc,
                    status: false
                });
			}
            this.abc = "";
        },
        deleteToDo: function (index) {
            this.todos.splice(index, 1);
        },
        changeStatus: function (st, index) {
            if (st)
                this.todos[index].status = true;
            else
                this.todos[index].status = false;
            /*  var a="";
             for (let i = 0; i < this.todos.length; i++) {
                 a+=this.todos[i].status;
             }
             alert(a); */
        },
        changeAll: function (stc) {
            if (stc) {
                this.todos.forEach(element => {
                    element.status = true;
                });
            }
            else {
                this.todos.forEach(element => {
                    element.status = false;
                });
            }
        },
        allActive: function () {
            this.temp = "active"
        },
        allCompleted: function () {
            this.temp = "completed";
        },
        allTodos: function () {
            this.temp = ""
        },
        clearCompleted: function () {

            for (let i = 0; i < this.todos.length; i++) {
                if (this.todos[i].status == true) {
                    this.todos.splice(i, 1);
                    i--;
                }
            }
        }

    }
 
});
