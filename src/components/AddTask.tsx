import React, { useContext } from "react";
import type { ToDoContextType } from "../types/todo";
import type { FormProps } from "antd";
import { ToDoContext } from "../context/TodoContext";
import { Form, Input } from "antd";

type FieldType = {
  text?: string;
};

export default function AddTask() {
  const [form] = Form.useForm();
  const { addTodo } = useContext(ToDoContext) as ToDoContextType;

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    addTodo(values.text!);
    form.resetFields();
    form.setFieldValue("text", "");
  };

  return (
    <Form onFinish={onFinish} name="addToDo" autoComplete="off" form={form}>
      <Form.Item<FieldType> name="text">
        <Input autoFocus />
      </Form.Item>
    </Form>
  );
}
