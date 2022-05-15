import { Router } from "express";

const route = Router();
const todos: string[] = [];

route.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});

export default route;
