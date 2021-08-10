import React from "react";

const FinishedTodos = ({ ftodos, deleteTodo }) => {
  return (
    <div className="ftodos collection">
      {ftodos.length ? (
        ftodos.map(function (ftodo) {
          return (
            <div
              onClick={() => {
                deleteTodo(ftodo);
              }}
              className="collection-item"
              key={ftodo._id}
            >
              <span className="red-text deleted">{ftodo.content}</span>
            </div>
          );
        })
      ) : (
        <p className="center red ">there is no finished todos</p>
      )}
    </div>
  );
};

export default FinishedTodos;
