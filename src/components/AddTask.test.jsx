import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TodoProvider from "../context/TodoContext";
import AddTask from "./AddTask";

describe("AddTask component", () => {
  const onFinish = jest.fn();
  it("AddTask render", () => {
    render(
      <TodoProvider>
        <AddTask />
      </TodoProvider>
    );
  });
  it("does not submit an empty form", () => {
    render(
      <TodoProvider>
        <AddTask />
      </TodoProvider>
    );
    expect(onFinish).not.toHaveBeenCalled();
  });
  it("AddTask snapshot", () => {
    const addTask = render(
      <TodoProvider>
        <AddTask />
      </TodoProvider>
    );
    expect(addTask).toMatchSnapshot();
  });
});
