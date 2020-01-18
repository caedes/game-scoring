import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { BrowserRouter, Route } from "react-router-dom";

import Footer from "../Footer";
import Home from "../Home";
import History from "../History";
import Gamers from "../Gamers";

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
      <BrowserRouter>
        <div className={classes.container}>
          <Route path="/" exact component={Home} />
          <Route path="/history" component={History} />
          <Route path="/gamers" exact component={Gamers} />
        </div>
        <Route path="/" component={Footer} />
      </BrowserRouter>
    </div>
  );
}
