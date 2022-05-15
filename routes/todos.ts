import { Router } from "express";
import { Todo } from "../models/todo";

const route = Router();
const todos: Todo[] = [];

route.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});

route.post("/post", (req, res, next) => {
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: req.body.text,
  };
  todos.push(newTodo);
});

export default route;
