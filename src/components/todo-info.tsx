interface TodoInfoProps {
  createdTasks: number;
  concludedTasks: number;
}

const TaskCounter = ({ count }: { count: number }) => (
  <span
    className="font-bold px-2 text-white h-8 rounded-full bg-todo-gray-400"
    style={{ fontSize: "12px" }}
  >
    {count}
  </span>
);

const TodoInfo = ({ createdTasks = 0, concludedTasks = 0 }: TodoInfoProps) => {
  return (
    <div className="w-full flex justify-between items-center">
      <span className="font-bold text-todo-blue" style={{ fontSize: "14px" }}>
        Tarefas criadas
        <TaskCounter count={createdTasks} />
      </span>
      <span className="font-bold text-todo-purple" style={{ fontSize: "14px" }}>
        Concluídas
        <TaskCounter count={concludedTasks} />
      </span>
    </div>
  );
};

export default TodoInfo;
