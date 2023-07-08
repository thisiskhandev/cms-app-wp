"use client";

import { Button, Container } from "@mui/material";
import Link from "next/link";
export default function About() {
  return (
    <>
      <Container>
        <section>
          <h1 className="title">About</h1>
          <Button variant="outlined">
            <Link href="/">Homepage</Link>
          </Button>
        </section>
      </Container>
    </>
  );
}
