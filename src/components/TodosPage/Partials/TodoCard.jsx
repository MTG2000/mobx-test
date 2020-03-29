import React from "react";
import { observer } from "mobx-react";
import Checkbox from "@material-ui/core/Checkbox";
import { Grid, Typography } from "@material-ui/core";

const TodoCard = ({ todo, onClick }) => {
  return (
    <Grid container alignItems="center" style={{ marginBottom: 20 }}>
      <Checkbox
        style={{ marginRight: 20 }}
        checked={todo.completed}
        color="primary"
        onChange={() => onClick(todo.id)}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <Typography variant="h5">{todo.title}</Typography>
    </Grid>
  );
};

export default observer(TodoCard);
