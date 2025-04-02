import ClipBoard from '../assets/Clipboard.png'

const TodoListPlaceholder = () => {
  return (
    <div className="flex flex-col items-center pt-20 mt-4 border-t rounded-md border-todo-gray-400">
      <img src={ClipBoard} className="mb-2"/>

      <h3 className="font-bold text-todo-gray-300">
        Você ainda não tem tarefas cadastradas
      </h3>
      <span className="text-todo-gray-300">
        Crie tarefas e organize seus itens a fazer
      </span>
    </div>
  );
};

export default TodoListPlaceholder;
