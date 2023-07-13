import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.API_URL || "https://dev-learning.funnelpageinc.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
