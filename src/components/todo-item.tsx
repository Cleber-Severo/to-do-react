import CheckboxItem from "./checkbox-item";
import { ITodo } from "../types/todo";
import { Trash } from "@phosphor-icons/react";

interface TodoItemProps {
  updateTodoCompletion: (id: string) => void;
  deleteTodoTask: (id: string) => void;
  task: ITodo;
}

const TodoItem = ({updateTodoCompletion, deleteTodoTask, task}: TodoItemProps) => {
  return (
    <div key={task.id} className="flex">
      <CheckboxItem
        selected={task.isCompleted}
        onClick={() => updateTodoCompletion(task.id)}
      />

      <span>{task.text}</span>

      <Trash onClick={() => deleteTodoTask(task.id)} />
    </div>
  );
};

export default TodoItem;
