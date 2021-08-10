import React, { Component } from "react";
import { createTodo } from "./api";

class Addtodo extends Component {
  state = { id: null, content: "" };

  readTodos = (value) => {
    this.setState({
      content: value,
    });
  };
  submitTodos = (event) => {
    event.preventDefault();
    if (this.state.content === "") {
      alert("please add your todo");
    } else {
      createTodo({ content: this.state.content, completed: false }).then(
        (response) => {
          console.log("content", response.data);
          this.props.addTodo({
            content: response.data.content,
            completed: false,
          });
        }
      );

      this.setState({
        id: null,
        content: "",
      });
    }
  };
  render() {
    return (
      <form onSubmit={(event) => this.submitTodos(event)}>
        <div className="input-field col s6 ">
          <input
            placeholder="what's in your mind...."
            type="text"
            id="newToto"
            onChange={(event) => this.readTodos(event.target.value)}
            value={this.state.content}
          />

          <label className="active" htmlFor="newToto">
            Add TODO
          </label>
        </div>

        <button className="btn waves-effect waves-light">ADD</button>
      </form>
    );
  }
}

export default Addtodo;
