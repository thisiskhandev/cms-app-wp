"use client";

import { Container } from "@mui/material";
import Posts from "./api/Posts";

export default function Home() {
  return (
    <main>
      <Container>
        <Posts />
      </Container>
    </main>
  );
}
