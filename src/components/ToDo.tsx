import React from "react";
import type { IToDo } from "../types/todo";
import { Checkbox } from "antd";

type Props = {
  todo: IToDo;
  updateTodo: (id: number) => void;
};

export default function ToDo({ todo, updateTodo }: Props) {
  return (
    <div
      style={{ backgroundColor: "#fff", padding: "10px", marginBottom: "10px" }}
    >
      <Checkbox onChange={() => updateTodo(todo.id)} checked={todo.completed}>
        {todo.text}
      </Checkbox>
    </div>
  );
}
