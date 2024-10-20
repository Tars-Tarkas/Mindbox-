import React, { useContext } from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import type { IToDo } from "../types/todo";
import Task from "./Task";

const mockData = {
  id: 3,
  text: "ReactJS",
  completed: false,
} as IToDo;

describe("Task component", () => {
  const updateToDo = jest.fn();
  it("Task render", () => {
    render(<Task todo={mockData} updateToDo={updateToDo} key={mockData.id} />);
  });
  it("should show text of todos", () => {
    render(<Task todo={mockData} updateToDo={updateToDo} key={mockData.id} />);
    expect(screen.getByText(mockData.text)).toBeInTheDocument();
  });
  it("Task snapshot", () => {
    const task = render(
      <Task todo={mockData} updateToDo={updateToDo} key={mockData.id} />
    );
    expect(task).toMatchSnapshot();
  });
  it("Checkbox not checked", () => {
    render(<Task todo={mockData} updateToDo={updateToDo} key={mockData.id} />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });
});
