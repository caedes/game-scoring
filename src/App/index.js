import { BrowserRouter, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import Footer from "../Footer";
import Gamers from "../Gamers";
import History from "../History";
import Home from "../Home";

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
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/history" component={History} />
            <Route path="/gamers" component={Gamers} />
          </Switch>
        </div>
        <Route path="/" component={Footer} />
      </BrowserRouter>
    </div>
  );
}
