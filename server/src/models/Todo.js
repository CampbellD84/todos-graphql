import mongoose from "mongoose";
export const Todo = mongoose.model("Todo", {
  task: String,
  completed: Boolean
});
