import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearEditMode } from "../features/todo/todoSlice.js";
import {
  useCreateTodoMutation,
  useUpdateTodoMutation,
} from "../services/todoDataApi.js";

const Form = () => {
  // RTK QUERY HOOKS
  const [createTodo, { isLoading: isCreating }] = useCreateTodoMutation();
  const [updateTodo, { isLoading: isUpdating }] = useUpdateTodoMutation();
  // REACT-REDUX HOOKS
  const dispatch = useDispatch();
  const { todo: editTodo, isEdit } = useSelector((state) => state.edit);
  // LOCAL STATE
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  //
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (isEdit && editTodo) {
      setFormData({
        title: editTodo.title,
        description: editTodo.description,
      });
    } else {
      setFormData({
        title: "",
        description: "",
      });
    }
  }, [isEdit, editTodo]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEdit) {
      await updateTodo({ id: editTodo._id, ...formData });
      dispatch(clearEditMode());
    } else {
      await createTodo(formData);
      setFormData({
        title: "",
        description: "",
      });
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          name="title"
          onChange={handleChange}
          className="border border-[#5b5b5b42] px-2 py-1 outline-slate-400"
          type="text"
          placeholder="todo title here..."
          value={formData.title}
          required
        />
        <textarea
          className="border border-[#5b5b5b42] w-full px-[8px] py-[10px] outline-slate-400"
          name="description"
          onChange={handleChange}
          id=""
          rows="2"
          placeholder="todo description here..."
          value={formData.description}
        ></textarea>
        <div className="action-btns space-x-3 self-end">
          <button
            type="reset"
            onClick={() => dispatch(clearEditMode())}
            className={
              isEdit
                ? "bg-orange-500 text-white py-2 px-4 self-end font-medium rounded-md hover:cursor-pointer"
                : "hidden"
            }
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-green-300 py-2 px-4 self-end font-medium rounded-md hover:cursor-pointer"
            disabled={isUpdating || isCreating}
          >
            {isEdit ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
