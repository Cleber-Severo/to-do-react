import { PlusCircle } from "@phosphor-icons/react";
import { ChangeEvent, FormEvent, useState } from "react";

interface AddTaskFormProps {
  addNewTodo: (text: string) => void
}

const AddTaskForm = ({ addNewTodo }: AddTaskFormProps) => {
  const [todo, setTodo] = useState("");

  const updateTodo = (e: ChangeEvent<HTMLInputElement>) =>
    setTodo(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewTodo(todo)
  };

  return (
    <form
      className="flex gap-2 w-full"
      onSubmit={handleSubmit}
      style={{ transform: "translateY(-50%)" }}
    >
      <input
        className={`
          bg-todo-gray-500 text-todo-gray-300 outline-none focus:text-todo-gray-100 
          border-1 rounded-2xl  border-gray-950  p-4 w-full
        `}
        placeholder="Adicione uma nova tarefa"
        value={todo}
        onChange={updateTodo}
      />

      <button
        className={`
          text-todo-gray-100 bg-todo-blue-dark hover:bg-todo-blue
          border-none rounded-xl flex flex-row items-center gap-1 p-[16px]
        `}
      >
        <span className="font-bold">Criar</span>
        <PlusCircle className="-mb-" size={20} weight="bold" />
      </button>
    </form>
  );
};

export default AddTaskForm;
