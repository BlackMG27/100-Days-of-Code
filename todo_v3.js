var todoList = {
  todos: ["item1", "item2", "item3"],

  displayTodos: function(){
    console.log("My todos", this.todos);
  },

  addTodos: function(todo){
    this.todos.push(todo);//'this' refers to the todos array
    this.displayTodos();
  },

  changeTodos: function(position, newValue){
    this.todos[position] = newValue;
    this.displayTodos();
  },

  deleteTodo: function(position){
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};
