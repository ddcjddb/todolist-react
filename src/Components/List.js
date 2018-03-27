import React from "react";
import Todo from "./Todo";

export default class List extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.state.todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              removeTodo={this.props.removeTodo}
              handleDone={this.props.handleDone}
            />
          ))}
        </ul>
      </div>
    );
  }
}
