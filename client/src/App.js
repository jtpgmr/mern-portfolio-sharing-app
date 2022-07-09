import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grid, Grow } from "@mui/material";
import appfolio from "./assets/images/appfolio.png";
import { Form, Posts } from "./components";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

import useStyles from "./styles";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar
        className={classes.appBar}
        position="static"
        color="inherit"
        style={{ flexDirection: "row" }}
      >
        <Typography className={classes.heading} variant="h2" align="center">
          App-Folio
        </Typography>
        <img
          className={classes.image}
          src={appfolio}
          alt="appfolio"
          height="45"
          width="45"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            spacing={4}
            justifyContent="space-between"
            alignItems="stretch"
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
