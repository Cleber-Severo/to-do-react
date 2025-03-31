import { useState } from "react";
import AddTaskForm from "./add-task-form";
import TodoList from "./todo-list";
import { ITodo } from "../types/todo";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const addNewTodo = (text: string) => {
    const newTodo: ITodo = {
      id: Number(uuidv4()),
      text,
      isCompleted: false,
    };

    setTodoList((current) => [...current, newTodo]);
  };

  return (
    <div
      style={{ height: "calc(100vh - 200px)" }}
      className="text-todo-gray-100  max-w-[736px] mx-auto"
    >
      <AddTaskForm addNewTodo={addNewTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
};

export default Todo;
