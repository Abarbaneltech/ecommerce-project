import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    height: "700px",
    // display: "flex",
    // justifyContent: "space-evenly",
    // alignItems: "center",
    width: "100%",
  },
  navbar: {
    position: "fixed !important",
    background: "transparent !important",
    boxShadow: "0px 0px !important",
  },
  logo: {
    marginRight: "10px",
    height: 80,
    width: "auto",
  },
});
