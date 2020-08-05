import { isEmpty } from "ramda";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import React from "react";
import TextField from "@material-ui/core/TextField";

import useStyles from "./styles";
import useGamers from "../useGamers";

export default function GamersNewScreen({ headerComponent }) {
  const classes = useStyles();
  const Header = headerComponent;

  const history = useHistory();
  const gotoBack = () => history.goBack();
  const gotoGamers = () => history.push("/gamers");

  const [gamerName, setGamerName] = React.useState("");
  const onChangeGamerName = (event) => {
    setGamerName(event.target.value);
  };

  const [, { addGamer }] = useGamers();

  return (
    <div className={classes.stack}>
      {headerComponent && <Header title="Nouveau joueur" hasBackButton />}
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          id="gamer-name"
          label="Nom"
          value={gamerName}
          onChange={onChangeGamerName}
          autoFocus
        />
        <div className={classes.buttonGroup}>
          <Button color="primary" onClick={gotoBack}>
            Annuler
          </Button>
          <Button
            color="primary"
            onClick={() => addGamer(gamerName).then(gotoGamers)}
            disabled={isEmpty(gamerName)}
          >
            Enregistrer
          </Button>
        </div>
      </form>
    </div>
  );
}
