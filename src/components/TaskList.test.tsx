import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TodoProvider, { ToDoContext } from "../context/TodoContext";
import TaskList from "./TaskList";
import type { IToDo } from "../types/todo";

const mockData = [
  {
    id: 1,
    text: "ReactJS",
    completed: false,
  },
  {
    id: 2,
    text: "NextJs",
    completed: true,
  },
  {
    id: 3,
    text: "TailwindCSS",
    completed: false,
  },
] as IToDo[];

describe("TaskList component", () => {
  it("TaskList render", () => {
    render(
      <TodoProvider>
        <TaskList />
      </TodoProvider>
    );
  });
  it("TaskList snapshot", () => {
    const taskList = render(
      <TodoProvider>
        <TaskList />
      </TodoProvider>
    );
    expect(taskList).toMatchSnapshot();
  });
  it("Render list mockdata", () => {
    const addTodo = jest.fn();
    const updateToDo = jest.fn();
    const filter = [{}] as IToDo[];
    const setFilter = jest.fn();
    const clearCompleted = jest.fn();
    render(
      <ToDoContext.Provider
        value={{
          todos: mockData,
          addTodo,
          updateToDo,
          filter,
          setFilter,
          clearCompleted,
        }}
      >
        <TaskList />
      </ToDoContext.Provider>
    );
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
