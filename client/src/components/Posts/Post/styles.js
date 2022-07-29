
import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
    "&:hover": {
      backgroundColor: "grey",
      transform: "scale(1.1)",
      cursor: "pointer"
    }
  },
  media: {
    height: 210,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
    "&:hover": {

    }
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "15px",
    right: "20px",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "0 16px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
}));
