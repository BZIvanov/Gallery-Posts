const { gql } = require('apollo-server');

exports.typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    avatar: String
    joinDate: String
    favorites: [Post]
  }

  type Post {
    _id: ID
    title: String!
    imageUrl: String!
    categories: [String]!
    description: String!
    createdDate: String
    likes: Int
    createdBy: User!
    messages: [Message]
  }

  type Message {
    _id: ID
    messageBody: String!
    messageDate: String
    messageUser: User!
  }

  type Token {
    token: String!
  }

  type Query {
    getPosts: [Post]
  }

  type Mutation {
    addPost(
      title: String!
      imageUrl: String!
      categories: [String!]
      description: String!
      creatorId: ID!
    ): Post!
    signinUser(username: String!, password: String!): Token
    signupUser(username: String!, email: String!, password: String!): Token
  }
`;
