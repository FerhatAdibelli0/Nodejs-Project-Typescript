"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = (0, express_1.Router)();
let todos = [];
route.get("/", (req, res, next) => {
    res.status(200).json({ todos: todos });
});
route.post("/post", (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text,
    };
    todos.push(newTodo);
    return res.status(201).json({ message: "Posted successfully", todos: todos });
});
route.put("/todo/:postId", (req, res, next) => {
    const body = req.body;
    const params = req.params;
    const toID = params.postId;
    const findIndex = todos.findIndex((todo) => todo.id === toID);
    if (findIndex >= 0) {
        todos[findIndex] = { id: todos[findIndex].id, text: body.text };
        return res
            .status(201)
            .json({ message: "Successfully putted", todos: todos });
    }
    res.status(404).json({ message: "Todo is not found" });
});
route.delete("/todo/:postId", (req, res, next) => {
    const params = req.params;
    const toID = params.postId;
    todos = todos.filter((todo) => todo.id !== toID);
    res.status(201).json({ message: "Todo is deleted", todos: todos });
});
exports.default = route;
