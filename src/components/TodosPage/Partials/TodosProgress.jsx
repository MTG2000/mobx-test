import React, { useContext } from "react";
import { mainContext } from "../../../stores/Context";
import { observer } from "mobx-react";

const TodosProgress = () => {
  const { TodoStore } = useContext(mainContext);
  return <div>{TodoStore.Progress} of all tasks Has Been Completed</div>;
};

export default observer(TodosProgress);
