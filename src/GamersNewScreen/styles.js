import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  stack: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  form: {
    "& .MuiTextField-root": {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(4),
      width: "80%",
    },
  },
  buttonGroup: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));
