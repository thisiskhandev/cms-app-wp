"use client";

import styles from "./page.module.css";
import { Container } from "@mui/material";
import Footer from "./components/Footer";
import Posts from "./api/Posts";
import Header from "./components/Header";
import { ApolloProvider } from "@apollo/client";
import { client } from "./api/client";
import Heading from "./components/Heading";

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <main>
        <section className={styles.bgcover}></section>
        <Container>
          <Header />
          <Heading title="Homepage" />
          <Posts />
        </Container>
        <Footer />
      </main>
    </ApolloProvider>
  );
}
