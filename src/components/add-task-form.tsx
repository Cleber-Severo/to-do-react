import { PlusCircle } from "@phosphor-icons/react";
import clsx from "clsx";
import { ChangeEvent, FormEvent, useRef, useState } from "react";

interface AddTaskFormProps {
  addNewTodo: (text: string) => void;
}

const AddTaskForm = ({ addNewTodo }: AddTaskFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [todo, setTodo] = useState("");

  const updateTodo = (e: ChangeEvent<HTMLInputElement>) =>
    setTodo(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addNewTodo(todo);
    setTodo("");

    if (inputRef?.current) inputRef.current.focus();
  };

  return (
    <form
      className="flex items-center gap-2 w-full"
      onSubmit={handleSubmit}
      style={{ transform: "translateY(-50%)" }}
    >
      <input
        className={`
          bg-todo-gray-500 text-todo-gray-300 outline-none
          focus:text-todo-gray-100 focus:border-todo-purple-dark
          border-1 rounded-2xl  border-gray-950  p-4 w-full
        `}
        placeholder="Adicione uma nova tarefa"
        value={todo}
        onChange={updateTodo}
        ref={inputRef}
      />

      <button
        className={clsx(
          `
          text-todo-gray-100 bg-todo-blue-dark hover:bg-todo-blue
          border-none rounded-xl flex flex-row items-center gap-1 px-[16px] py-[14px]
        `,
          { "cursor-no-drop": !todo.length }
        )}
        disabled={!todo.length}
      >
        <span className="font-bold">Criar</span>
        <PlusCircle className="-mb-" size={20} weight="bold" />
      </button>
    </form>
  );
};

export default AddTaskForm;
