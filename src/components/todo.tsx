import { useState } from "react";
import AddTaskForm from "./add-task-form";
import TodoList from "./todo-list";

const Todo = () => {
  const [todoList, setTodoList] = useState()
  
  return (
    <div
      style={{ height: "calc(100vh - 200px)" }}
      className="text-todo-gray-100  max-w-[736px] mx-auto"
    >
      <AddTaskForm />
      <TodoList />
    </div>
  );
};

export default Todo;
