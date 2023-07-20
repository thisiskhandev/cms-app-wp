"use client";

import Posts from "../api/Posts";
import { Container } from "@mui/material";

export default function page() {
  return (
    <main>
      <section>
        <Container>
          <Posts />
        </Container>
      </section>
    </main>
  );
}
