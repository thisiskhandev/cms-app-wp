"use client";

import styles from "./page.module.css";
import Cards from "./components/Cards";
import { Container, Grid } from "@mui/material";
import Footer from "./components/Footer";
import { ApolloProvider } from "@apollo/client";
import Client from "./api/client.js";
import Posts from "./api/Posts";
export default function Home() {
  return (
    <ApolloProvider client={Client}>
      <main>
        <section className={styles.bgcover}></section>
        <Container>
          <h1 className="title">Blogs - Homepage</h1>
          <Posts />
        </Container>
        <Footer />
      </main>
    </ApolloProvider>
  );
}
