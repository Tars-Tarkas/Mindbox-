import React from "react";
import type { IToDo } from "../types/todo";

import { Checkbox } from "antd";

type Props = {
  todo: IToDo;
  updateToDo: (id: number) => void;
};

export default function Task({ todo, updateToDo }: Props) {
  return (
    <li
      style={{
        backgroundColor: "#fff",
        padding: "10px",
        marginBottom: "10px",
        listStyle: "none",
      }}
    >
      <Checkbox
        onChange={() => updateToDo(todo.id)}
        checked={todo.completed}
        name="ckeckbox"
        id={todo.text}
      >
        {todo.text}
      </Checkbox>
    </li>
  );
}
