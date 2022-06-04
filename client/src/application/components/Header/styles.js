import { makeStyles } from "@mui/styles";

const image =
  "https://cms-cdn.flightclub.com/1800/76f00e22b23f-f55a-ce11-eb1e-09c41be2.jpg";

export const useStyles = makeStyles({
  div: {
    height: 800,
    background: `url(${image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
});
