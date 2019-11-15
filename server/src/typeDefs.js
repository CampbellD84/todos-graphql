import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    getTodos: [Todo!]!
  }

  type Todo {
    id: ID!
    task: String!
    completed: Boolean
  }

  type Mutation {
    createTodo(task: String!, completed: Boolean): Todo!
    deleteTodo(id: ID!): Todo!
    updateCompleted(id: ID!, completed: Boolean): Todo!
    updateTask(id: ID!, task: String): Todo!
  }
`;
