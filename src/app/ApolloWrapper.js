"use client";

import { ApolloProvider } from "@apollo/client";
import { client } from "./api/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import styles from "./page.module.css";

export default function ApolloWrapper({ children }) {
  return (
    <ApolloProvider client={client}>
      <section className={styles.bgcover}></section>
      <Heading title="Heading" />
      <Header />
      {children}
      <Footer />
    </ApolloProvider>
  );
}
