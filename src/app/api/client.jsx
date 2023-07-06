import { ApolloClient, InMemoryCache } from "@apollo/client";

const Client = new ApolloClient({
  uri: "https://dev-learning.funnelpageinc.com/graphql",
  cache: new InMemoryCache(),
});

export default Client;
