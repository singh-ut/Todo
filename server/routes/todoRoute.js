import express from "express";
import { createTodo, deleteTodo, getAllTodos, getSingleTodo, updateTodo } from "../controllers/todoController.js";

const router = express.Router();

router.route('/').get(getAllTodos).post(createTodo);
router.route('/:id').get(getSingleTodo).put(updateTodo).delete(deleteTodo);

export default router;