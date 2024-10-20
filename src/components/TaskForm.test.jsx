import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import "../setupTests";

import TodoProvider from "../context/TodoContext";
import TaskForm from "./TaskForm";

describe("TaskForm component", () => {
  it("TaskForm render", () => {
    render(
      <TodoProvider>
        <TaskForm />
      </TodoProvider>
    );
    expect(
      screen.getByRole("button", { name: "Clear completed" })
    ).toHaveAttribute("disabled");
    expect(screen.getByText(/items left/)).toBeInTheDocument();
  });
  it("TaskForm snapshot", () => {
    let taskForm = render(
      <TodoProvider>
        <TaskForm />
      </TodoProvider>
    );
    expect(taskForm).toMatchSnapshot();
  });
});
