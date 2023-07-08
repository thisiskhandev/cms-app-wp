"use client";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Grid } from "@mui/material";
import Link from "next/link";

export default function Cards({ posts }) {
  console.log(posts);
  return (
    <Grid container spacing={2}>
      {posts.map((items, index) => {
        return (
          <Grid item key={index}>
            <Card sx={{ maxWidth: 345, height: "100%" }}>
              <Image
                src={items.featuredImage.node.sourceUrl}
                alt={items.featuredImage.node.altText}
                width={400}
                height={200}
                style={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {items.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  dangerouslySetInnerHTML={{ __html: items.excerpt }}
                />
              </CardContent>
              <CardActions>
                <Link href={"posts" + items.uri}>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{ display: "block" }}
                  >
                    Learn More
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
