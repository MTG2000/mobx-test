import React from "react";
import { useContext } from "react";
import { mainContext } from "../../../stores/Context";
import TodoCard from "./TodoCard";
import { observer } from "mobx-react";

const TodosList = () => {
  const { TodoStore } = useContext(mainContext);
  return (
    <div>
      {TodoStore.todos.map(t => (
        <TodoCard
          key={t.id}
          todo={t}
          onClick={id => TodoStore.ToggleTodo(id)}
        />
      ))}
    </div>
  );
};

export default observer(TodosList);
