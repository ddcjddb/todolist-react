import React from "react";
import InputField from "./InputField";
import List from "./List";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      nextIndex: 2
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(text) {
    let todos = this.state.todos.slice();
    todos.push({
      text: text,
      completed: false,
      id: this.state.nextIndex
    });
    let nextIndex = this.state.nextIndex;
    nextIndex++;
    this.setState({
      todos: todos,
      nextIndex
    });
  }

  removeTodo(id) {
    let todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos
    });
  }

  handleDone(id) {
    let todos = this.state.todos.slice();
    todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({
      todos
    });
  }

  render() {
    return (
      <div>
        <InputField handleAdd={this.handleAdd} />
        <List
          state={this.state}
          removeTodo={this.removeTodo.bind(this)}
          handleDone={this.handleDone.bind(this)}
        />
      </div>
    );
  }
}

export default TodoList;
