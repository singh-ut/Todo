import TodoListItem from "./TodoListItem";
import { useGetAllTodosQuery } from "../services/todoDataApi.js";

const TodoListGroup = () => {
  // TAKING CHANCE TO BRING ALL THE TODOS HERE
  const {
    data: allTodos,
    isLoading: isGetting,
    error: gettingError,
  } = useGetAllTodosQuery();
  // TAKING CHANCE TO BRING ALL THE TODOS HERE

  if (isGetting) return <h3>Loading...</h3>;
  if (gettingError) return <h3>Error!</h3>;

  return (
    <ul className="todo-list-group">
      {allTodos.data.map((todo, index) => (
        <TodoListItem key={index} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoListGroup;
