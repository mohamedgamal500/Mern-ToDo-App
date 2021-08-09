import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Todo from "./models/Todo.js";

const app = express();

app.use(cors());
app.use(express.json());

const CONNECTION_URL =
  "mongodb+srv://mgMern:mgMern123@clustercrud.d5k9m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

app.post("/", (req, res) => {
  const { content } = req.body;
  const todo = new Todo({ content: content });
  todo
    .save()
    .then((todo) => {
      res.json(todo);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.get("/", async (req, res) => {
  try {
    const tasks = await Todo.find();
    res.send(tasks);
  } catch (error) {
    res.send(error);
  }
});
