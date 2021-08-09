import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  content: String,
});

let Todo = mongoose.model("Todo", todoSchema);

export default Todo;
