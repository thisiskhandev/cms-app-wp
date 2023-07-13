"use client";
import { ApolloProvider } from "@apollo/client";
import Posts from "../api/Posts";
import apollo from "../api/apollo";

export default function page() {
  return (
    <ApolloProvider client={apollo}>
      <main>
        <section>
          <Posts />
        </section>
      </main>
    </ApolloProvider>
  );
}
