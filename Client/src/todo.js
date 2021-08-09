import React from "react";

const Todos = function ({ todos, deleteTodo, Finishedtodos }) {
  const todoList = todos.length ? (
    todos.map(function (todo) {
      return (
        <div
          onClick={() => {
            deleteTodo(todo._id);
            Finishedtodos(todo);
          }}
          className="collection-item"
          key={todo.id}
        >
          <span className="teal-text text-lighten-2">{todo.content}</span>
        </div>
      );
    })
  ) : (
    <p className="center teal lighten-2">there is no todos</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
