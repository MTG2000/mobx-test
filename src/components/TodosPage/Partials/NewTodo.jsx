import React, { useState, useContext } from "react";
import { TextField, Box, Button } from "@material-ui/core";
import { mainContext } from "../../../stores/Context";

const NewTodo = () => {
  const [todo, setTodo] = useState("");
  const { TodoStore } = useContext(mainContext);

  const handleAdd = () => {
    if (!todo) return;
    TodoStore.AddTodo(todo);
    setTodo("");
  };

  return (
    <Box py={5} display="flex" alignItems="center">
      <TextField
        value={todo}
        onChange={e => setTodo(e.target.value)}
        label="New Task"
        variant="outlined"
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginLeft: 20 }}
        onClick={handleAdd}
      >
        Add Task
      </Button>
    </Box>
  );
};

export default NewTodo;
