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
    deleteTodo: async (_, { _id }) => {
      const delTodo = Todo.findOneAndDelete({ _id });
      if (!delTodo) {
        throw new Error("Cannot delete todo");
      }
      return delTodo;
    }
  }
};
