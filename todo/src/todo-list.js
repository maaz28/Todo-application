import React, { Component } from 'react';


class TodoList extends Component {
    // printAllTodos(){
    //     for(let i=0; i<this.props.todos.length; i++){
    //         return (<div>{this.props.todos[i]}</div>)
    //     }
    // }
    removeHandler(ind){
console.log(ind)
this.props.RemoveTodo(ind);
    }

    editHandler(thiskey, event){
      console.log("works",thiskey, event.target);
    }

  render() {
    console.log(this.props);
    return (
    <div>
        { <ul>
            {this.props.todos.map((val, ind) => {
              return <li key={ind}>
               {val.task} {ind}
               <button onClick = {this.removeHandler.bind(this,ind)}>remove </button>
               <button onClick = {this.editHandler.bind(this, this.key)}>Edit </button>
              </li>
            })}
          </ul>}
    </div>
);
  }
}

export default TodoList;
