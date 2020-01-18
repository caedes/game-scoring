import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Gamers() {
  return (
    <div>
      <Typography variant="h4">Gamers</Typography>
      <List component="nav">
        <ListItem>
          <ListItemText primary="Julia" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Romain" />
        </ListItem>
      </List>
    </div>
  );
}
