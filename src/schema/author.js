const  {gql} =  require ('apollo-server-express');

 const authorSchema = gql`
  type Query {
    authors: [Author!]
    author(id: ID!): Author
  }

  type Mutation {
    createAuthor (
      firstName: String!
      lastName: String!
    ): AuthorResult!
    deleteAuthor(id: ID!): Boolean!
  }

  type AuthorResult {
      id: ID!
    }

  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    books: [Book!]
  }
`;

module.exports = authorSchema;
