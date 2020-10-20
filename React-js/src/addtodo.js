import React, { Component } from "react";

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
      this.props.addTodo(this.state);
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
