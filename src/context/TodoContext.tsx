import React, { useState, useEffect } from "react";
import type { IToDo, ToDoContextType } from "../types/todo";

export const ToDoContext = React.createContext<ToDoContextType | null>(null);

const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<IToDo[]>([]);
  const [filter, setFilter] = useState(todos);

  useEffect(() => {
    setFilter(todos);
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: IToDo = {
      id: new Date().getTime(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  const updateToDo = (id: number) => {
    todos.filter((todo: IToDo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        setTodos([...todos]);
      }
    });
  };

  const clearCompleted = () => {
    let removeCompleted = todos.filter((todo) => {
      if (todo.completed === false) {
        return todo;
      }
    });
    setTodos(removeCompleted);
  };

  return (
    <ToDoContext.Provider
      value={{
        todos,
        updateToDo,
        addTodo,
        filter,
        setFilter,
        clearCompleted,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export default TodoProvider;
