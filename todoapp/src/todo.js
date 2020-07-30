import React from "react";

const Todos = function ({ todos, deleteTodo }) {
  const todoList = todos.length ? (
    todos.map(function (todo) {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center teal lighten-2">there is no todos</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
