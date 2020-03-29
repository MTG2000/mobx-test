import React from "react";

import TodoStore from "./TodosStore";

export const mainContext = React.createContext();

export const ContextProvider = props => {
  return (
    <mainContext.Provider value={{ TodoStore }}>
      {props.children}
    </mainContext.Provider>
  );
};
