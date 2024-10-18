import React, { useContext, useState, MouseEvent } from "react";
import { Button, Flex } from "antd";
import { ToDoContext } from "../context/TodoContext";
import type { ToDoContextType } from "../types/todo";

const buttonObj = [
  { id: "all", text: "All" },
  { id: "active", text: "Active" },
  { id: "completed", text: "Completed" },
];

export default function Filter() {
  const { setFilter, todos } = useContext(ToDoContext) as ToDoContextType;
  const [active, setActiv] = useState("");

  const handleFilter = (e: MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.id;
    setActiv(id);
    if (id === "all") {
      setFilter(todos);
    }
    if (id === "active") {
      setFilter(
        [...todos].filter((todo) => {
          if (todo.completed === false) {
            return todo;
          }
        })
      );
    }
    if (id === "completed") {
      setFilter(
        [...todos].filter((todo) => {
          if (todo.completed === true) {
            return todo;
          }
        })
      );
    }
  };

  return (
    <Flex justify="space-between" style={{ gap: "10px" }}>
      {buttonObj.map((btn, index) => {
        return (
          <Button
            disabled={todos.length === 0}
            color="default"
            key={index}
            name={btn.id}
            id={btn.id}
            variant={active !== btn.id ? "filled" : "outlined"}
            onClick={handleFilter}
          >
            {btn.text}
          </Button>
        );
      })}
    </Flex>
  );
}
