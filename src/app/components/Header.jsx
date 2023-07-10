import { Button, Container, Grid, Stack } from "@mui/material";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <Container sx={{ my: 4 }}>
          <Grid container spacing={2} sx={{m: "auto", justifyContent: "center"}}>
            {Navigations.map((items, index) => {
              return (
                <Grid item key={index}>
                  <Link href={items.navLink}>
                    <Button variant="outlined" color="primary">{items.navName}</Button>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </header>
    </>
  );
}

const Navigations = [
  {
    navName: "Home",
    navLink: "/",
  },
  {
    navName: "About",
    navLink: "/about",
  },
  {
    navName: "Blog",
    navLink: "/posts",
  },
  {
    navName: "Contact Us",
    navLink: "/contact",
  },
];
