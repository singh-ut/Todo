import TodoListGroup from "./TodoListGroup";

const TodoListContainer = () => {
  return (
    <div className="todo-list-container mt-5">
      <hr className="border-b" />
      <TodoListGroup />
    </div>
  );
};

export default TodoListContainer;
