import AddBoxIcon from "@material-ui/icons/AddBox";
import Button from "@material-ui/core/Button";
import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Home() {
  return (
    <>
      <Typography variant="h1">Game Scoring</Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        startIcon={<AddBoxIcon />}
      >
        Nouvelle partie
      </Button>
    </>
  );
}
