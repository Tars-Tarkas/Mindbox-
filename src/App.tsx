import "./App.css";
import React from "react";
import TodoProvider from "./context/TodoContext";
import Form from "./components/TaskForm";

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
