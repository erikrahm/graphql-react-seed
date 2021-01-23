import { QueryResolvers, QueryQuickExampleArgs } from "./generated/graphql";
import { IResolvers } from "apollo-server-express";

interface Resolvers extends IResolvers {
  Query: QueryResolvers;
}

// Define your custom Query and Mutation resolvers here
export const resolvers: Resolvers = {
  Query: {
    quickExample: (
      _,
      { id }: QueryQuickExampleArgs,
      { dataSources },
    ) => {
      // Argument structure: (object, params, context, resolveInfo)
      // Using the text off the params coming in to the query to pass to our
      // Datasource coming from the context of the Apollo server

      // This return should match the format of the return value of the Query defined
      // in your schema.grapqhl, so in this instance { some, values }
      return dataSources.externalAPI.quickExample(id);
    },
  },
};
