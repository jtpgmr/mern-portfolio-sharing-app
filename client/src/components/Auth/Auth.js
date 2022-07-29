import React, { useState } from "react";
import { Container, Paper, Avatar, Typography, Button, Grid } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";

import Input from "./Input";

import useStyles from "./styles";

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false)
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSubmit = () => {

  }

  const handleChange = () => {
    
  }

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignedUp ? "Sign up" : "Sign in"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignedUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignedUp && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submitBtn}
          >
            {isSignedUp ? "Sign Up" : "Sign In"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
