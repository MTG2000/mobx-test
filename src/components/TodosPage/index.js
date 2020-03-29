import React from "react";
import TodosList from "./Partials/TodosList";
import TodosProgress from "./Partials/TodosProgress";
import NewTodo from "./Partials/NewTodo";
const TodosPage = () => {
  return (
    <div>
      <NewTodo />
      <TodosList />
      <TodosProgress />
    </div>
  );
};

export default TodosPage;
