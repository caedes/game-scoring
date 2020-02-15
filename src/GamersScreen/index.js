import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";

import firestore from "../firestore";

firestore
  .collection("gamers")
  .get()
  .then(querySnapshot => {
    querySnapshot.forEach(doc => {
      console.log(`${doc.id} => ${doc.data().name}`);
    });
  });

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

  return (
    <>
      <Fab className={classes.fab} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      {headerComponent && <Header title="Gamers" />}
      <List component="nav">
        <ListItem>
          <ListItemText primary="Julia" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Romain" />
        </ListItem>
      </List>
    </>
  );
}
