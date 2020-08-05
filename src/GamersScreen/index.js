import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import {
  CircularProgress,
  Fab,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import React from "react";

import useGamers from "../useGamers";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2) + 56,
    right: theme.spacing(2),
  },
}));

export default function GamersScreen({ headerComponent }) {
  const Header = headerComponent;
  const classes = useStyles();

  const [gamers, { isLoading }] = useGamers();

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
      {isLoading && <CircularProgress />}
      {!isLoading && gamers && (
        <List component="nav">
          {gamers.map((gamer) => (
            <ListItem key={gamer.id}>
              <ListItemText primary={gamer.name} />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
}
