import React, { useContext } from "react";
import type { IToDo, ToDoContextType } from "../types/todo";
import { ToDoContext } from "../context/TodoContext";
import Task from "./Task";

export default function TaskList() {
  const { updateToDo, filter } = useContext(ToDoContext) as ToDoContextType;

  return (
    <ul
      style={{
        width: "100%",
        marginBottom: "30px",
        listStyleType: "none",
        marginLeft: 0,
        paddingLeft: 0,
      }}
    >
      {filter.length !== 0 ? (
        filter.map((todo: IToDo) => (
          <Task updateToDo={updateToDo} todo={todo} key={todo.id} />
        ))
      ) : (
        <div style={{ textAlign: "center" }}>
          <span>not found to do</span>
        </div>
      )}
    </ul>
  );
}
