import React, { useContext } from "react";
import { IToDo, ToDoContextType } from "../types/todo";
import { ToDoContext } from "../context/TodoContext";
import ToDo from "../components/ToDo";

export default function ToDos() {
  const { updateToDo, filter } = useContext(ToDoContext) as ToDoContextType;

  return (
    <div style={{ width: "100%", marginBottom: "30px" }}>
      {filter.length !== 0 ? (
        filter.map((todo: IToDo) => (
          <ToDo key={todo.id} updateTodo={updateToDo} todo={todo} />
        ))
      ) : (
        <div style={{ textAlign: "center" }}><span>not found to do</span></div>
      )}
    </div>
  );
}
