import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ITodo } from "../types/todo";

const useTodo = () => {
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
      const isCompleted = task.id !== id ? task.isCompleted : !task.isCompleted;

      return { ...task, isCompleted };
    });

    if (!selectedTask) return;

    setTodoList(newTodoList);
  };

  const deleteTodoTask = (id: string) => {
    const newList = todoList.filter((task) => task.id !== id);
    setTodoList([...newList]);
  };

  return {
    todoList,
    addNewTodo,
    updateTodoCompletion,
    deleteTodoTask,
  };
};

export default useTodo;
