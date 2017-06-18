var todoList = {
  todos: [],

  displayTodos: function(){
    console.log("My todos", this.todos);
  },

  addTodos: function(todoText){//addTodo(hi)
    this.todos.push({
      todoText: todoText,
      completed: false
      });//'this' refers to the todos array
    this.displayTodos();
  },

  changeTodos: function(position, todoText){
   this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  deleteTodo: function(position){
    this.todos.splice(position, 1);
    this.displayTodos();
  },

  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;//changes the completed part from false to true
    this.displayTodos();
  }
};
