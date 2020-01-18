import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import AddBoxIcon from "@material-ui/icons/AddBox";

import Footer from "./Footer";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh"
  },
  container: {
    minHeight: "100vh"
  }
});

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Paper elevation={3}>
          <Typography variant="h1">Game Scoring</Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<AddBoxIcon />}
          >
            Nouvelle partie
          </Button>
        </Paper>
      </div>
      <Footer />
    </div>
  );
}
