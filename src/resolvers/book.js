const Book = require ('../models/Book');

module.exports  = {
  Query: {
    books:
      async (parent, args) => {
        return await Book.findAll();
    },

   book: async (parent, { id }) => {
      return await Book.findByPk(id);
    },
 },

 Mutation: {

  addBook: async (
    parent,
    {authorId, name},
  ) => {
    const book = await Book.create({
      authorId,
      name,
    });
    return book.id;
  },

  deleteBook:
    async (parent, { id }) => {
      await Book.destroy({
        where: { id },
      });
      return "OK";
    },
},


  Author: {
    books:
      async (author, args) => {
            return await Book.findAll({
              where: {
                authorId: author.id,
      },
    });
  },
},
};
