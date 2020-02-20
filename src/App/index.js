import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import Footer from '../Footer';
import GamersNewScreen from '../GamersNewScreen';
import GamersScreen from '../GamersScreen';
import Header from '../Header';
import HistoryScreen from '../HistoryScreen';
import HomeScreen from '../HomeScreen';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
  },
  container: {
    minHeight: '100vh',
  },
});

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <div className={classes.container}>
          <Switch>
            <Route path="/" exact>
              <HomeScreen />
            </Route>
            <Route path="/history">
              <HistoryScreen headerComponent={Header} />
            </Route>
            <Route path="/gamers">
              <GamersScreen headerComponent={Header} />
            </Route>
          </Switch>
        </div>
        <Route path="/" component={Footer} />
        <Route path="/gamers/new">
          <GamersNewScreen headerComponent={Header} />
        </Route>
      </BrowserRouter>
    </div>
  );
}
