// src/index.js
const { ApolloServer } = require('apollo-server-express');  // Use apollo-server-express
const express = require('express');
const path = require('path');
const typeDefs = require('./schema/productSchema');
const resolvers = require('./resolvers/productResolver');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = async () => {
  // Start the Apollo Server
  await server.start();

  // Create an Express app
  const app = express();

  // Serve static files from the 'public' directory
  app.use(express.static(path.join(__dirname, '../public')));

  // Apply Apollo GraphQL middleware to Express
  server.applyMiddleware({ app, path: '/graphql' });

  // Serve the HTML page when accessing the root
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  // Start the Express server
  app.listen(4000, () => {
    console.log('Server ready at http://localhost:4000/graphql');
    console.log('Open http://localhost:4000/ to view the product list');
  });
};

// Call the async function to start the server
startServer();
