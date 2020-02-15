import { BrowserRouter, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import Footer from "../Footer";
import GamersScreen from "../GamersScreen";
import HistoryScreen from "../HistoryScreen";
import HomeScreen from "../HomeScreen";

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
            <Route path="/" exact component={HomeScreen} />
            <Route path="/history" component={HistoryScreen} />
            <Route path="/gamers" component={GamersScreen} />
          </Switch>
        </div>
        <Route path="/" component={Footer} />
      </BrowserRouter>
    </div>
  );
}
