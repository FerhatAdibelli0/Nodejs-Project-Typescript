// const express = require("require");
import express from "express";
import todosRoute from "./routes/todos";

const app = express();
app.use(todosRoute);

app.listen(3000);
