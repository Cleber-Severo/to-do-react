import CheckboxItem from "./checkbox-item";
import { ITodo } from "../types/todo";
import { Trash } from "@phosphor-icons/react";
import clsx from "clsx";

interface TodoItemProps {
  updateTodoCompletion: (id: string) => void;
  deleteTodoTask: (id: string) => void;
  task: ITodo;
}

const TodoItem = ({
  updateTodoCompletion,
  deleteTodoTask,
  task,
}: TodoItemProps) => {
  return (
    <div
      key={task.id}
      className="flex items-top justify-between gap-2 p-4 rounded-md bg-todo-gray-400"
    >
      <div className="flex items-top justify-between gap-2">
        <CheckboxItem
          selected={task.isCompleted}
          onClick={() => updateTodoCompletion(task.id)}
        />

        <h5
          className={clsx("text-todo-gray-100 select-none max-w-[632px] -mt-1", {
            "text-todo-gray-300 line-through": task.isCompleted,
            
          })}
        >
          {task.text}
        </h5>
      </div>

      <Trash
        onClick={() => deleteTodoTask(task.id)}
        className="hover:bg-todo-gray-300 hover:text-todo-danger cursor-pointer rounded-md p-1"
        size={26}
      />
    </div>
  );
};

export default TodoItem;
