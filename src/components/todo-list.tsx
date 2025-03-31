import { ITodo } from "../types/todo";
import TodoInfo from "./todo-info";

interface TodoListProps {
  todoList: ITodo[];
}

const TodoList = ({ todoList }: TodoListProps) => {
  const createdTasks = todoList.length
  const concludedTasks = todoList.filter(task => task.isCompleted).length
  
  return (
    <div>
      <TodoInfo 
        concludedTasks={concludedTasks} 
        createdTasks={createdTasks} 
      />

      {/* <TodoPlaceHolder />
      <TodoList /> */}
    </div>
  );
};

export default TodoList;
