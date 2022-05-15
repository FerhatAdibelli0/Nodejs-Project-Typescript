import { Router } from "express";
import { Todo } from "../models/todo";

const route = Router();
let todos: Todo[] = [];

route.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});

route.post("/post", (req, res, next) => {
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: req.body.text,
  };
  todos.push(newTodo);
  return res.status(201).json({ message: "Posted successfully" });
});

route.put("/post/:postId", (req, res, next) => {
  const toID = req.params.postId;
  const findIndex = todos.findIndex((todo) => todo.id === toID);
  if (findIndex >= 0) {
    todos[findIndex] = { id: todos[findIndex].id, text: req.body.text };
    return res
      .status(201)
      .json({ message: "Successfully putted", todos: todos });
  }
  res.status(404).json({ message: "Todo is not found" });
});

route.delete("/post/:postId", (req, res, next) => {
  const toID = req.params.postId;
  todos.filter((todo) => todo.id !== toID);
  res.status(404).json({ message: "Todo is not found", todos: todos });
});

export default route;
