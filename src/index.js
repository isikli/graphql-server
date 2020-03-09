require('dotenv').config()
const cors = require('cors')
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { sequelize } = require('./models')
const resolvers = require('./resolvers')
const schema = require('./schema')

const app = express()

app.use(cors())

console.log(resolvers)

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
  }
})

sequelize.sync({
  force: true
})

server.applyMiddleware({ app, path: '/graphql' })

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql')
})
