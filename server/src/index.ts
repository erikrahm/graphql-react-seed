import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { ApolloServer } from "apollo-server-express";

import { DataSource } from "./datasource";
import { typeDefs } from "./graphql-schema";
import { resolvers } from "./resolvers";

// Graph our environment variables from our .env file and create a variable for our JWT secret
dotenv.config();

// Create express app
const app = express();

// Add Middleware to our Express server
app.use(cors());

// Create a new apollo server instance and provide our Datasource to be accessed in our resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    externalAPI: new DataSource(),
  }),
  introspection: true,
  playground: true,
});

// Applying middleware to the newly created Apollo Server and
// specify a queriable path (also where GraphQL Playground will display in browser)
server.applyMiddleware({ app, path: "/" });

// Open up a port and start the express server on it
app.listen({ port: process.env.GRAPHQL_PORT || 4000 }, () => {
  console.log(`Server live at ${process.env.GRAPHQL_URI}`);
});
