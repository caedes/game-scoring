import Button from "@material-ui/core/Button";
import React from "react";
import TextField from "@material-ui/core/TextField";

import useStyles from "./styles";

export default function GamersNewScreen({ headerComponent }) {
  const classes = useStyles();
  const Header = headerComponent;

  return (
    <div className={classes.stack}>
      {headerComponent && <Header title="Nouveau joueur" hasBackButton />}
      <form className={classes.form} noValidate autoComplete="off">
        <TextField id="gamer-name" label="Nom" autoFocus />
        <div className={classes.buttonGroup}>
          <Button color="primary">Annuler</Button>
          <Button color="primary" disabled>
            Enregistrer
          </Button>
        </div>
      </form>
    </div>
  );
}
