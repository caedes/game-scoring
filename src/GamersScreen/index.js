import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";

import fetchGamers from "../fetch-gamers";

const useStyles = makeStyles(theme => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2) + 56,
    right: theme.spacing(2)
  }
}));

export default function GamersScreen({ headerComponent }) {
  const Header = headerComponent;
  const classes = useStyles();
  const { data: gamers } = useQuery("gamers", fetchGamers);
  const history = useHistory();

  const gotoGamersNew = () => history.push("/gamers/new");

  return (
    <>
      <Fab
        className={classes.fab}
        color="primary"
        aria-label="add"
        onClick={gotoGamersNew}
      >
        <AddIcon />
      </Fab>
      {headerComponent && <Header title="Joueurs" />}
      {gamers && (
        <List component="nav">
          {gamers.map(gamer => (
            <ListItem key={gamer.id}>
              <ListItemText primary={gamer.name} />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
}
