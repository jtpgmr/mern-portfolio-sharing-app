import React, { useEffect, useState } from "react";
import { Container, Grid, Grow } from "@mui/material";
import { useDispatch } from "react-redux";

import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import { getPosts } from "../../actions/posts";

import useStyles from "./styles";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          className={classes.mainContainer}
          spacing={5}
          justifyContent="space-between"
          alignItems="stretch"
        >
          <Grid item xs={12} md={8}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
