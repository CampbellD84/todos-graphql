import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    getTodos: [Todo!]!
  }

  type Todo {
    _id: ID!
    task: String!
    completed: Boolean
  }

  type Mutation {
    createTodo(task: String!, completed: Boolean): Todo!
    deleteTodo(_id: ID!): Todo!
  }
`;
