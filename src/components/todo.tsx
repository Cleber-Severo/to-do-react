import AddTaskForm from "./add-task-form";
import TodoList from "./todo-list";
import useTodo from "../hooks/useTodo";

const Todo = () => {
  const { todoList, addNewTodo, updateTodoCompletion, deleteTodoTask } =
    useTodo();

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
