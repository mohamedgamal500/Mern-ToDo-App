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
  const { content, completed } = req.body;
  const todo = new Todo({ content, completed });
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
    res.json(tasks);
  } catch (error) {
    res.json(error);
  }
});

app.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  //console.log(req.body);
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No todo with id: ${id}`);

  const updatedTodo = await Todo.findByIdAndUpdate(
    id,
    { completed },
    {
      new: true,
    }
  );

  res.json(updatedTodo);
});
