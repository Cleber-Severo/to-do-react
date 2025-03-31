/* eslint-disable no-extra-boolean-cast */
import { ITodo } from "../types/todo";
import TodoInfo from "./todo-info";
import TodoItem from "./todo-item";
import TodoListPlaceholder from "./todo-list-placeholder";

interface TodoListProps {
  todoList: ITodo[];
  updateTodoCompletion: (id: string) => void;
  deleteTodoTask: (id: string) => void;
}

const TodoList = ({
  todoList,
  updateTodoCompletion,
  deleteTodoTask,
}: TodoListProps) => {
  const createdTasks = todoList.length;
  const concludedTasks = todoList.filter((task) => task.isCompleted).length;

  return (
    <div>
      <TodoInfo concludedTasks={concludedTasks} createdTasks={createdTasks} />
      {!createdTasks ? (
        <TodoListPlaceholder />
      ) : (
        todoList.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            updateTodoCompletion={updateTodoCompletion}
            deleteTodoTask={deleteTodoTask}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
