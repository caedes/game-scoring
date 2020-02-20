import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function Header({ title, hasBackButton = false }) {
  const history = useHistory();
  const gotoBack = () => history.goBack();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {hasBackButton && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="back"
              onClick={gotoBack}
            >
              <ArrowBack />
            </IconButton>
          )}
          <Typography variant="h6">{title}</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
