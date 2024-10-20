import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TodoProvider from "../context/TodoContext";
import Filter from "./Filter";

describe("Filter component", () => {
  it("Filter render", () => {
    render(
      <TodoProvider>
        <Filter />
      </TodoProvider>
    );
    expect(screen.getByRole("button", { name: "All" })).toHaveAttribute(
      "disabled"
    );
    expect(screen.getByRole("button", { name: "Active" })).toHaveAttribute(
      "disabled"
    );
    expect(screen.getByRole("button", { name: "Completed" })).toHaveAttribute(
      "disabled"
    );
  });
  it("Filter snapshot", () => {
    const filter = render(
      <TodoProvider>
        <Filter />
      </TodoProvider>
    );
    expect(filter).toMatchSnapshot();
  });
});
