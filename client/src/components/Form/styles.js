import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  // [theme.breakpoints.down("sm")]: {
  //   paper: {
  //     padding: theme.spacing(4)
  //   },
  // },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "95%",
    margin: "10px 0",
  },
}));
