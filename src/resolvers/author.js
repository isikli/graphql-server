const Author = require ('../models/Author');
const Book = require ('../models/Book');


module.exports  = {
  Query: {
    authors:
      async (parent, args) => {
        return await Author.findAll();
    },

   author: async (parent, { id }) => {
      return await Author.findById(id);
    },
 },

 Mutation: {

  createAuthor: async (
    parent,
    {firstName, lastName},
  ) => {
    console.log ("calling createAuthor");
    const author = await Author.create({
      firstName,
      lastName,
    });
    console.log (author.id);
    return  {id:author.id};
  },

  deleteAuthor:
    async (parent, { id }) => {
      await Author.destroy({
        where: { id },
      });
      return true;
    },
},


  Author: {
    books:
      async (author, args) => {
            return await models.Book.findAll({
              where: {
                authorId: author.id,
      },
    });
  },
},
};
