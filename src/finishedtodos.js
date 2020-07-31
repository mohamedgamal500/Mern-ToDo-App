import React, { Component } from "react";

class FinishedTodos extends Component {
  render() {
    return (
      <div className="ftodos collection">
        {this.props.ftodos.length ? (
          this.props.ftodos.map(function (ftodo) {
            return (
              <div className="collection-item" key={ftodo.id}>
                <span className="red-text">{ftodo.content}</span>
              </div>
            );
          })
        ) : (
          <p className="center red ">there is no finished todos</p>
        )}
      </div>
    );
  }
}

export default FinishedTodos;
