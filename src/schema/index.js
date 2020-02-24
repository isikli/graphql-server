const  gql =  require ('apollo-server-express');
const authorSchema = require ('./author');
const bookSchema = require ('./book');

module.exports = [ authorSchema, bookSchema];
