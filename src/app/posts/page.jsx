"use client";
import { ApolloProvider } from "@apollo/client";
import Posts from "../api/Posts";
import { client } from "../api/client";
import Heading from "../components/Heading";
import { Container } from "@mui/material";

export default function page() {
  return (
    <ApolloProvider client={client}>
      <main>
        <section>
          <Heading title="Blogs" />
          <Container>
            <Posts />
          </Container>
        </section>
      </main>
    </ApolloProvider>
  );
}
