import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.API_URL || "https://dev-testing.funnelpageinc.com/graphql",
  cache: new InMemoryCache(),
});

export { client };
