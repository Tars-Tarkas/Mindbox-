import React, { useState, FormEvent, ChangeEvent } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
type todosType = {
  id: number;
  text: string;
  completed: boolean;
};

export default function ToDo() {
  const [todos, setTodos] = useState<todosType[]>([]);
  const [todo, setTodo] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        text: todo,
        completed: false,
      },
    ]);
    const target = e.target as HTMLFormElement;
    target.reset();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const trimmedText = value.trim();
    if (trimmedText.length > 0) {
      setTodo(value);
    }
  };
  const checkedTodos = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const clearCompleted = (id: number) => {};
  const showAllTodos = () => {};
  const showActiveTodos = () => {};
  const showCompletedTodos = () => {};
  console.log(todos);

  return (
    <Flex alignItems="center" direction="column" p="20px">
      <Card w="900px">
        <CardHeader
          style={{ background: "#ccc", textAlign: "center", fontSize: "48px" }}
          as="h1"
        >
          todos
        </CardHeader>
        <CardBody>
          <form onSubmit={onSubmit}>
            <Input name="todo" type="text" onChange={handleInputChange} />
          </form>
        </CardBody>
        <CardBody>
          {todos.map((item) => {
            return (
              <Box key={item.id} p="2">
                <Checkbox
                  _checked={{
                    "& .chakra-checkbox__label": {
                      textDecoration: "line-through",
                    },
                  }}
                  checked={item.completed}
                  value={item.text}
                  colorScheme="green"
                  onChange={() => checkedTodos(item.id)}
                  style={{ textDecoration: "italic" }}
                >
                  {item.text}
                </Checkbox>
              </Box>
            );
          })}
        </CardBody>
        <CardFooter style={{ background: "#ccc" }}>
          <Grid templateColumns="repeat(3, 1fr)" gap={6} w="100%">
            <GridItem w="100%" h="10" alignContent={"center"}>
              {todos.length} items left
            </GridItem>
            <GridItem
              w="100%"
              h="10"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button variant={"ghost"}>All</Button>
              <Button variant={"ghost"}>Active</Button>
              <Button variant={"ghost"}>Completed</Button>
            </GridItem>
            <GridItem
              w="100%"
              h="10"
              style={{ display: "flex", justifyContent: "end" }}
            >
              <Button variant={"ghost"}>Clear completed</Button>
            </GridItem>
          </Grid>
        </CardFooter>
      </Card>
    </Flex>
  );
}
