import React from "react";
import { observer } from "mobx-react";

const TodoCard = ({ todo, onClick }) => {
  return (
    <div onClick={() => onClick(todo.id)}>
      <h2>{todo.value}</h2>
      <h6>{todo.isCompleted ? "Completed" : "Waitting to be done"}</h6>
    </div>
  );
};

export default observer(TodoCard);
