"use client";

import styles from "./page.module.css";
import Cards from "./components/Cards";
import { Container, Grid } from "@mui/material";
import Footer from "./components/Footer";
import { ApolloProvider } from "@apollo/client";
import Client from "./api/client";
import GraphQL from "./components/GraphQL";

export default function Home() {
  return (
    <ApolloProvider client={Client}>
      <main>
        <section className={styles.bgcover}></section>
        <Container>
          <h1 className="title">Blogs - Homepage</h1>
          <Grid container spacing={3}>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </Grid>
        </Container>
        <Footer />
      </main>
      <GraphQL />
    </ApolloProvider>
  );
}
