import { PlusCircle } from "@phosphor-icons/react";
import { ChangeEvent, FormEvent, useState } from "react";

const AddTaskForm = () => {
  const [todo, setTodo] = useState("");

  const updateTodo = (e: ChangeEvent<HTMLInputElement>) =>
    setTodo(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form className="flex gap-2 trans" onSubmit={handleSubmit} style={{ transform: 'translateY(-50%)' }}>
      <input
        className="w-full bg-todo-gray-500 text-todo-gray-300 outline-none rounded-2xl p-4 focus:text-todo-gray-100 border-1 border-gray-950"
        placeholder="Adicione uma nova tarefa"
        value={todo}
        onChange={updateTodo}
      />

      <button className="border-none p-[16px] text-todo-gray-100 bg-todo-blue-dark hover:bg-todo-blue rounded-xl flex flex-row items-center gap-1">
        <span className="font-bold">Criar</span>
        <PlusCircle className="-mb-" size={20} weight="bold" />
      </button>
    </form>
  );
};

export default AddTaskForm;
