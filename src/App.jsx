import { ToastContainer } from "react-toastify";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoListContainer from "./components/TodoListContainer";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-10">
        <div className="wrapper">
          <Form />
          <TodoListContainer />
        </div>
      </main>
      <ToastContainer />
    </>
  );
};

export default App;
