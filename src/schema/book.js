const  {gql} =  require ('apollo-server-express');
const bookSchema = gql`

  extend type Query {
    books: [Book!]!
    book(id: ID!): Book!
  }

  extend type Mutation {
    addBook (authorId:ID!, name:String!):ID!
    deleteBook (id:ID!):String!
  }

  input BookIn {
    authorId:ID!
    name:String!
  }

  type Book {
    id: ID!
    name: String!
    author: Author!
  }
  `;
module.exports = bookSchema;
