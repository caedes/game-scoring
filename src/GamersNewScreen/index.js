import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import React from 'react';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  stack: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  form: {
    '& .MuiTextField-root': {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(4),
      width: '80%',
    },
  },
  buttonGroup: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

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
