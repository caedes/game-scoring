import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GroupIcon from "@material-ui/icons/Group";
import HistoryIcon from "@material-ui/icons/History";
import HomeIcon from "@material-ui/icons/Home";
import React from "react";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    borderTop: "1px solid #f1f1f1",
  },
});

export default function Footer() {
  const currentLocation = useLocation();
  const footerLocations = ["/", "/history", "/gamers"];
  const currentLocationIndex = footerLocations.indexOf(
    currentLocation.pathname
  );

  const classes = useStyles();
  const [value, setValue] = React.useState(currentLocationIndex);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Accueil"
        icon={<HomeIcon />}
        component={Link}
        to="/"
      />
      <BottomNavigationAction
        label="Historique"
        icon={<HistoryIcon />}
        component={Link}
        to="/history"
      />
      <BottomNavigationAction
        label="Joueurs"
        icon={<GroupIcon />}
        component={Link}
        to="/gamers"
      />
    </BottomNavigation>
  );
}
