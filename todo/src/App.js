import React, { Component } from 'react';
import CreateTodo from './create-todo';
import TodoList from './todo-list'

const todos = [
  {
  task: 'Todo application completed',
  isCompleted: false
},
{
  task: 'Parh Lou Yara',
  isCompleted: true
}
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        todos,
        flag : true
    }; 
}
  render() {
    return (
      <div>
      <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)} />
      <TodoList todos={this.state.todos} 
      RemoveTodo = {this.RemoveTodo.bind(this)} 
      flag = {this.state.flag}
      makeFlagFalse = {this.makeFlagFalse.bind(this)}
      makeFlagTrue = {this.makeFlagTrue.bind(this)}
      updateTaskValue = {this.updateTaskValue.bind(this)}
      />
      </div>
    );
  }

  RemoveTodo(ind){
    console.log("In remove todo",ind);
    this.setState({
      todos : this.state.todos.slice(0, ind).concat(this.state.todos.slice(ind + 1))
    })
    console.log(this.state.todos)
  }
  // this fn. is called by CreateTodo
  createTask(task) {
    this.state.todos.push({

        task,
        isCompleted: false
    });
    this.setState({ todos: this.state.todos });
    console.log(this.state.todos);
    console.log(task);
}

makeFlagFalse(){
  this.setState({
    flag : false
  })
}
makeFlagTrue(){
  this.setState({
    flag : true
  })
}

updateTaskValue(val, ind){
console.log(val, ind)
let localTodos = [];
localTodos = this.state.todos;
localTodos[ind] = {
  task: val,
  isCompleted: false
}
this.setState({
  todos : localTodos,
  flag : true
})
}
}

export default App;