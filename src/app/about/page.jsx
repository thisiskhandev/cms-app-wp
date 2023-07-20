"use client";

import { Button, Container } from "@mui/material";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Container>
        <Button variant="outlined">
          <Link href="/">Homepage</Link>
        </Button>
      </Container>
    </>
  );
}
