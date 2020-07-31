import React, { Component } from "react";
import Todos from "./todo";
import Addtodo from "./addtodo";
import FinishedTodos from "./finishedtodos";
class App extends Component {
  state = {
    todos: [],
    ftodos: [],
  };

  deletetodo = (id) => {
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({
      todos: todos,
    });
  };

  Finishedtodos = (ftodo) => {
    this.setState(function (state) {
      const newtodo = state.ftodos.concat(ftodo);

      return {
        ftodos: newtodo,
      };
    });
  };

  addTodo = (s) => {
    s.id = Math.random();
    //console.log(s);
    this.setState(function (state) {
      //state.todos.push(s);// state is immutable object in react so we can not edit it.
      //console.log(state);
      const newtodo = state.todos.concat(s); // we can generate new array instead //updates the array and returns the new updated array
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
        <Todos
          todos={this.state.todos}
          deleteTodo={this.deletetodo}
          Finishedtodos={this.Finishedtodos}
        />
        <Addtodo addTodo={this.addTodo} />
        <h1 className="center red-text darken-4-text">FINISHED</h1>
        <FinishedTodos ftodos={this.state.ftodos} />
      </div>
    );
  }
}

export default App;
