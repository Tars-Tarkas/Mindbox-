import "./App.css";
import React from "react";
import TodoProvider from "./context/TodoContext";
import Form from "./components/ToDoForm";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Form />
      </TodoProvider>
    </div>
  );
}

export default App;
