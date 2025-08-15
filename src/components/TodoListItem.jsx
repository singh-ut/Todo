import { useDispatch, useSelector } from "react-redux";
import { setEditMode } from "../features/todo/todoSlice.js";
import { useDeleteTodoMutation } from "../services/todoDataApi.js";

const TodoListItem = ({ todo }) => {
  const [deleteTodo] = useDeleteTodoMutation();
  const { isEdit } = useSelector((state) => state.edit);
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    await deleteTodo(id);
  };

  return (
    <li className="todo-list-item my-5 border flex items-center px-3 py-1">
      <div className="text-box">
        <h2 className="font-medium text-lg leading-6">{todo.title}</h2>
        <p>{todo.description}</p>
      </div>
      <div className="action-btns space-x-3 ml-auto">
        <button
          onClick={() => dispatch(setEditMode(todo))}
          className={`py-2 px-3 font-medium rounded-md ${
            isEdit
              ? "bg-gray-300 text-gray-500"
              : "bg-amber-500 text-white hover:cursor-pointer"
          }`}
          disabled={isEdit}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => handleDelete(todo._id)}
          className="bg-red-600 text-white py-2 px-3 font-medium rounded-md hover:cursor-pointer"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoListItem;
