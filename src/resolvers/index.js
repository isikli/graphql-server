const bookResolvers = require('../resolvers/book')
const authorResolvers = require('../resolvers/author')

module.exports = [bookResolvers,
  authorResolvers
]
