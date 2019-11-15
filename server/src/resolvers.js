import { Todo } from "./models/Todo";

export const resolvers = {
  Query: {
    getTodos: () => Todo.find()
  },
  Mutation: {
    createTodo: async (_, { task, completed }) => {
      const todo = new Todo({ task, completed });
      await todo.save();
      return todo;
    },
    deleteTodo: async (_, { id }) => {
      const delTodo = Todo.findOneAndDelete({ _id: id });
      if (!delTodo) {
        throw new Error("Cannot delete todo");
      }
      return delTodo;
    },
    updateCompleted: async (_, { id, completed }) => {
      return await Todo.findByIdAndUpdate(
        { _id: id },
        { $set: { completed } },
        {
          returnOriginal: false
        }
      );
    },
    updateTask: async (_, { id, task }) => {
      return await Todo.findByIdAndUpdate(
        { _id: id },
        { $set: { task } },
        { returnOriginal: false }
      );
    }
  }
};
