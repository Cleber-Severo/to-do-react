import { useState } from "react";
import AddTaskForm from "./add-task-form";
import TodoList from "./todo-list";
import { ITodo } from "../types/todo";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const addNewTodo = (text: string) => {
    console.log(uuidv4());
    const newTodo: ITodo = {
      id: uuidv4(),
      text,
      isCompleted: false,
    };

    setTodoList((current) => [...current, newTodo]);
  };

  const updateTodoCompletion = (id: string) => {
    const selectedTask = todoList.find((task) => task.id === id);
    const newTodoList = todoList.map((task) => {
      const isCompleted = task.id !== id ? task.isCompleted : !task.isCompleted
      
      return ({...task, isCompleted})
    });

    if (!selectedTask) return;

    setTodoList(newTodoList);
  };

  const deleteTodoTask = (id: string) => {
    const newList = todoList.filter(task => task.id !== id)
    setTodoList([...newList])
  }

  return (
    <div
      style={{ height: "calc(100vh - 200px)" }}
      className="text-todo-gray-100  max-w-[736px] mx-auto"
    >
      <AddTaskForm addNewTodo={addNewTodo} />
      <TodoList
        todoList={todoList}
        updateTodoCompletion={updateTodoCompletion}
        deleteTodoTask={deleteTodoTask}
      />
    </div>
  );
};

export default Todo;
