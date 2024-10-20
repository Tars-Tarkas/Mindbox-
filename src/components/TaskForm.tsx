import React, { useContext } from "react";
import type { ToDoContextType } from "../types/todo";
import { ToDoContext } from "../context/TodoContext";
import AddToDo from "./AddTask";
import ToDos from "./TaskList";
import Filter from "./Filter";
import { Card, Button, Flex, Typography } from "antd";
const { Meta } = Card;
const { Title } = Typography;

export default function TaskForm() {
  const { clearCompleted, filter } = useContext(ToDoContext) as ToDoContextType;
  return (
    <Flex justify="center">
      <Card
        title={<Title level={2}>todos</Title>}
        bordered={false}
        styles={{ header: { textAlign: "center" } }}
        style={{ width: 640, backgroundColor: "#fafafa" }}
      >
        <AddToDo />
        <ToDos />

        <Meta
          description={
            <Flex justify="space-between" align="center">
              <span>{filter.length} items left</span>
              <Filter />

              <Button
                disabled={filter.length === 0}
                variant={"filled"}
                color="default"
                name="Clear Completed"
                onClick={clearCompleted}
              >
                Clear completed
              </Button>
            </Flex>
          }
        />
      </Card>
    </Flex>
  );
}
