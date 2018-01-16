import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class CreateTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
    }

    renderError() {
        if (!this.state.error) { return null; }

        return <div style={{ color: 'red' }}>{this.state.error}</div>;
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Todo Application</h1>
          <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="What do I need to do?" ref="createInput" />
                <button>Create</button>
                {this.renderError()}
            </form>
        </header>
      </div>
    );
  }

  handleCreate(event) {
    event.preventDefault();

    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = this.validateInput(task);

    if (validateInput) {
        this.setState({ error: validateInput });
        return;
    }

    this.setState({ error: null });
    this.props.createTask(task);
    this.refs.createInput.value = '';
}

validateInput(task) {
    if (!task) {
        return 'Please enter a task.';
    } 
    // else if (this.props.todos) {
    //     return 'Task already exists.';
    // } 
    else {
        return null;
    }
}
}
