"use client";

import styles from "./page.module.css";
import { Container, Grid } from "@mui/material";
import Footer from "./components/Footer";
import Posts from "./api/Posts";
import Header from "./components/Header";
import { ApolloProvider } from "@apollo/client";
import Client from "./api/client";

export default function Home() {
  return (
    <ApolloProvider client={Client}>
      <main>
        <section className={styles.bgcover}></section>
        <Container>
          <Header />
          <h1 className="title">Blogs - Homepage</h1>
          <Posts />
        </Container>
        <Footer />
      </main>
    </ApolloProvider>
  );
}
