import React, { Component } from "react";
import Todos from "./todos";
import Addtodo from "./addtodo";
import FinishedTodos from "./finishedtodos";
import { fetchTodos, updateTodo } from "./api";

class App extends Component {
  state = {
    todos: [],
  };

  async componentDidMount() {
    try {
      const { data } = await fetchTodos();
      this.setState({ todos: data });
    } catch (error) {
      console.log(error);
    }
  }

  deletetodo = (todo) => {
    const todosCopy = [...this.state.todos];
    const index = todosCopy.indexOf(todo);
    todosCopy[index] = { ...todosCopy[index] };
    todosCopy[index].completed = !todo.completed;
    console.log(todosCopy);
    updateTodo(todo._id, todosCopy[index]).then((response) => {
      console.log("content", response.data);
      this.setState({
        todos: todosCopy,
      });
    });
  };

  addTodo = (s) => {
    //console.log(s);
    this.setState(function (state) {
      //state.todos.push(s);// state is immutable object in react so we can not edit it.
      //console.log(state);
      const newtodos = state.todos.concat(s); // we can generate new array instead //updates the array and returns the new updated array
      //console.log(newtodo);
      return {
        todos: newtodos,
      };
    });
  };
  render() {
    return (
      <div className="App container">
        <h1 className="center teal-text ">TODOS</h1>
        <Todos
          todos={this.state.todos.filter((todo) => todo.completed === false)}
          deleteTodo={this.deletetodo}
        />
        <Addtodo addTodo={this.addTodo} />
        <h1 className="center red-text darken-4-text">FINISHED</h1>
        <FinishedTodos
          ftodos={this.state.todos.filter((todo) => todo.completed === true)}
          deleteTodo={this.deletetodo}
        />
      </div>
    );
  }
}

export default App;
