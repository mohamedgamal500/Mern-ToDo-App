import React, { Component } from "react";
import Todos from "./todo";
import Addtodo from "./addtodo";

class App extends Component {
  state = {
    todos: [],
  };

  deletetodo = (id) => {
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({
      todos: todos,
    });
  };

  addTodo = (s) => {
    s.id = Math.random();
    //console.log(s);
    this.setState(function (state) {
      //const newtodo = state.todos.push(s); //it does not work because it updates the array but returns the lenght of new array
      //console.log(state);
      const newtodo = state.todos.concat(s); // updates the array and returns the new updated array
      //console.log(newtodo);
      return {
        todos: newtodo,
      };
    });
  };
  render() {
    return (
      <div className="App container">
        <h1 className="center teal-text ">TODOS</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deletetodo} />
        <Addtodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
