import asyncHandler from "express-async-handler";
import Todo from "../models/todoModel.js";

// GET ALL TODOS
export const getAllTodos = asyncHandler( async (req, res) => {
  const allTodos = await Todo.find({});

  if (!allTodos) {
    res.status(404);
    throw new Error("No Todos Found");
  }

  res.status(200).json({
    message: "All Todos fetched successfully",
    data: allTodos,
  });
});

// GET SINGLE TODO
export const getSingleTodo = asyncHandler( async (req, res) => {
  const { id } = req.params;

  const todo = await Todo.findById(id);

  if (!todo) {
    res.status(404);
    throw new Error("No Todo Found");
  }

  res.status(200).json({
    message: "Todo found successfully",
    data: todo,
  });
});

// CREATE A TODO
export const createTodo = asyncHandler( async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    res.status(400);
    throw new Error("Fields are required");
  }

  const newTodo = await Todo.create({
    title,
    description,
  });

  if (!newTodo) {
    res.status(500);
    throw new Error("Failed to create Todo");
  }

  res.status(201).json({
    message: "Todo created successfully",
    data: newTodo,
  });
});

// UPDATE TODO
export const updateTodo = asyncHandler( async (req, res) => {
  const { id } = req.params;

  const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, {new: true});

  if (!updatedTodo) {
    res.status(500);
    throw new Error("Something went wrong...!");
  }

  res.status(201).json({
    message: "Todo updated successfully",
    data: updatedTodo
  });
});

// DELETE A TODO
export const deleteTodo = asyncHandler(  async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(400);
    throw new Error("Todo ID is required");
  }

  const deletedTodo = await Todo.findByIdAndDelete(id);

  if (!deletedTodo) {
    res.status(500);
    throw new Error("Something went wrong while deleting todo...");
  }

  res.status(200).json({
    message: "Todo deleted successfully!",
  });
});