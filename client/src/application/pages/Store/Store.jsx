import { Grid, ListItem, Paper } from "@mui/material";
import MediaCard from "../../components/Card/Card";
import { useStyles } from "./styles";



function Store() {
  const classes = useStyles();

  return (
    <div className="store-container">
      <Grid container>
        <Grid item xs={5} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{height: '40px', border: '1px solid black', width: '50%'}}>What's up</div>
            <div style={{height: '40px', border: '1px solid black', width: '50%'}}>What's up</div>
            <div style={{height: '40px', border: '1px solid black', width: '50%'}}>What's up</div>
            <div style={{height: '40px', border: '1px solid black', width: '50%'}}>What's up</div>
        </Grid>
        <Grid xs={6}>
        <div>
      <Grid container>
        <Grid item xs={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={4}>
          <MediaCard />
        </Grid>
      </Grid>
    </div>
        </Grid>
      </Grid>
    </div>
  );
  
}
export default Store;

