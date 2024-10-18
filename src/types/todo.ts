import { Dispatch } from "react";

export interface IToDo {
  id: number;
  text: string;
  completed: boolean;
}
export type ToDoContextType = {
  todos: IToDo[];
  addTodo: (text: string) => void;
  updateToDo: (id: number) => void;
  filter: IToDo[];
  setFilter: Dispatch<React.SetStateAction<IToDo[]>>;
  clearCompleted: () => void;
};
