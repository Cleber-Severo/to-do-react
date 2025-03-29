import AddTaskForm from "./components/add-task-form";
import Header from "./components/header";
import PageWrapper from "./components/page-wrapper";

function App() {
  return (
    <>
      <Header />
      <PageWrapper>
        <AddTaskForm />
      </PageWrapper>
    </>
  );
}

export default App;
