import React from "react";
import Header from "./components/Shared/Header";
import Footer from "./components/Shared/Footer";
import { Container, Box } from "@material-ui/core";
import TodosPage from "./components/TodosPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Box py={15}>
          <TodosPage />
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
