import React, { Component } from "react";
import "./App.css";
import TodoList from "./Components/TodoList";
import Header from "./Components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="todo-wrapper">
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
