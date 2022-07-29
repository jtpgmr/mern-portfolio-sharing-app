import React from 'react'
import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import appfolio from "../../assets/images/appfolio.png";

import useStyles from "./styles";

const NavBar = () => {
  const classes = useStyles();

  const user = null;

  return (
    <AppBar
    className={classes.appBar}
    position="static"
    color="inherit"
    style={{ flexDirection: "row" }}
    >

    <div className={classes.brandContainer}>
      <Typography className={classes.heading} variant="h2">
        App-Folio
      </Typography>
      <img
        className={classes.image}
        src={appfolio}
        alt="appfolio"
        height="45"
        width="45"
      />
    </div>

    <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick="">Logout</Button>
          </div>
        ) : (
          <Button element={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
  </AppBar>
  )
}

export default NavBar