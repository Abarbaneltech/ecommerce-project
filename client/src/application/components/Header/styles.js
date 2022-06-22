import { makeStyles } from "@mui/styles";

// https://cms-cdn.flightclub.com/2200/2e023fb5c419-c7aa-ce11-fbce-01cd690f.jpg
// https://cms-cdn.flightclub.com/1800/76f00e22b23f-f55a-ce11-eb1e-09c41be2.jpg

const image =
  "https://cms-cdn.flightclub.com/2200/2e023fb5c419-c7aa-ce11-fbce-01cd690f.jpg";

export const useStyles = makeStyles({
  header: {
    height: 800,
    background: `url(${image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
});
