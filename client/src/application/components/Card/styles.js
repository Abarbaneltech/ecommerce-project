import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => {
  return {
    cardInStore: {
      maxWidth: 275,
      [theme.breakpoints.down("sm")]: {
        maxWidth: 100,
      },
    },
    cardInCarousel: {
      maxWidth: 275,
    },
  };
});
