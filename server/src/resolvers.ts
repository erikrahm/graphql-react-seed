// Define your custom Query and Mutation resolvers here
export const resolvers = {
  Query: {
    quickSearch: (_, { text }, { dataSources }, __) => {
      // Argument structure: (object, params, context, resolveInfo)
      // Using the text off the params coming in to the query to pass to our
      // Datasource coming from the context of the Apollo server

      // This return should match the format of the return value of the Query defined
      // in your schema.grapqhl, so in this instance { some, values }
      return dataSources.externalAPI.sampleRequest(text);
    },
  },
};
