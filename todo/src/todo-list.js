import React, { Component } from 'react';


class TodoList extends Component {
  constructor (props){
    super(props);
    this.state = {
      index : 0,
    }
  }

  removeHandler(ind) {
    console.log(ind)
    this.props.RemoveTodo(ind);
  }

  editHandler(val, ind) {
    console.log("works", val);
    this.props.makeFlagFalse(val.task);
    this.setState({
      index : ind
    })
  }

  cancelBtnHandler(){
    console.log(this.props)
    this.props.makeFlagTrue();
  }

  updateHandler(){
    console.log(this.state.index);
    console.log(this.refs.todoUpdate.value)
    if(this.props.defaultVal === this.refs.todoUpdate.value){
      this.props.makeFlagTrue();
    }
    else {
      this.props.updateTaskValue(this.refs.todoUpdate.value, this.state.index);
    }

  }

  render() {
    console.log(this.props);
    return (
      <div>
        {(this.props.flag) ? 
        <ul>
          {this.props.todos.map((val, ind) => {
            return <li key={ind}>
              {val.task} {ind}
               <button onClick={this.removeHandler.bind(this, ind)}>remove </button>
              <button onClick={this.editHandler.bind(this, val, ind)}>Edit </button>
            </li>
          })}
        </ul>
        :
        <div>
            <input type="text" ref="todoUpdate" defaultValue={this.props.defaultVal} />
            <button onClick = {this.updateHandler.bind(this)}>Update Todo</button>
            <button onClick = {this.cancelBtnHandler.bind(this)}>Cancel</button>
        </div>
      }
      </div>
    );
  }
}

export default TodoList;
