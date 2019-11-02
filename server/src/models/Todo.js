import mongoose from "mongoose";
export const _id = mongoose.Schema.Types.ObjectId;
export const Todo = mongoose.model("Todo", {
  task: String,
  completed: Boolean
});
