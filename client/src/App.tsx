import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import Person from './components/Person'

const client = new ApolloClient({
  uri: process.env.GRAPHQL_URL || 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <main>
        <Person />
      </main>
    </ApolloProvider>
  );
}

export default App;
