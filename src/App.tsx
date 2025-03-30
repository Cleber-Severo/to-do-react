import AddTaskForm from "./components/add-task-form";
import Header from "./components/header";
import PageWrapper from "./components/page-wrapper";

function App() {
  return (
    <div className="bg-todo-gray-600">
      <Header />
      <PageWrapper>
        <AddTaskForm />
      </PageWrapper>
    </div>
  );
}

export default App;
