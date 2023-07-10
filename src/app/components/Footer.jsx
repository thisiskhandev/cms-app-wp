"use client";

import { Grid, Typography, Container } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{...style}}>
      <Container style={{paddingTop: 40, paddingBottom: 40, marginTop: 90}}>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Typography variant="h3">LOGO</Typography>
            <Typography variant="h6">Deserunt laborum quis ipsum</Typography>
          </Grid>
          <Grid item xs={2}>
          <List sx={{width: "100%", lineHeight: "1rem"}}>
            {
              quickList.map((item, ind) => {
              return(
                <ListItem sx={{padding: 0, textTransform: "capitalize"}} key={ind}>
                <Link href={item.link}><ListItemText primary={item.text}/></Link>
              </ListItem>
              );
              })
            }
            </List>
          </Grid>
          <Grid item xs={2}>
          <List sx={{width: "100%", lineHeight: "1rem"}}>
            {
              quickList.map((item, ind) => {
              return(
                <ListItem sx={{padding: 0, textTransform: "capitalize"}} key={ind}>
                <Link href={item.link}><ListItemText primary={item.text}/></Link>
              </ListItem>
              );
              })
            }
            </List>
          </Grid>
          <Grid item xs={2}>
          <List sx={{width: "100%", lineHeight: "1rem"}}>
            {
              quickList.map((item, ind) => {
              return(
                <ListItem sx={{padding: 0, textTransform: "capitalize"}} key={ind}>
                <Link href={item.link}><ListItemText primary={item.text}/></Link>
              </ListItem>
              );
              })
            }
            </List>
          </Grid>
          <Grid item xs={2}>
          <List sx={{width: "100%", lineHeight: "1rem"}}>
            {
              quickList.map((item, ind) => {
              return(
                <ListItem sx={{padding: 0, textTransform: "capitalize"}} key={ind}>
                <Link href={item.link}><ListItemText primary={item.text}/></Link>
              </ListItem>
              );
              })
            }
            </List>
          </Grid>
        </Grid>
        <Typography style={{textAlign: "center", paddingTop: 30}} variant="h6">Copyright to Hassan Khan</Typography>
      </Container>
    </footer>
  );
}

const style = {
  backgroundColor: "#111",
  color: "#fff",
};

const quickList = [
  {
    text: "dummy1",
    link: "/",
  },
  {
    text: "dummy2",
    link: "/",
  },
  {
    text: "dummy3",
    link: "/",
  },
];
