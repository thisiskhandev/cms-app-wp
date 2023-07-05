"use client";

import styles from "./page.module.css";
import Cards from "./components/Cards";
import { Container, Grid } from "@mui/material";
import Footer from "./components/Footer";

export default function Home() {
  return (
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
  );
}
