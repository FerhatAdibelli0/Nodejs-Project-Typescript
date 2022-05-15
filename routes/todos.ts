import { Router } from "express";
import { Todo } from "../models/todo";

const route = Router();
const todos: Todo[] = [];

route.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});

export default route;
