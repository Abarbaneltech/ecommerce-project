import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from "react-router-dom";
import { useStyles } from './styles';

export default function MediaCard({id, name, brand, image, price, color}) {

  const navigate = useNavigate()
  const location = useLocation()
  const classes = useStyles()

  const cardHandler = (id) => {
    navigate(`/product/${id}`)
}
  return (
    <Card className={location.pathname === '/store' ? `${classes.cardInStore}` : `${classes.cardInCarousel}`}>
      <CardMedia
        component="img"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {brand}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {name}
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex', justifyContent: 'space-evenly'}}>
        <Button onClick={() => cardHandler(id)} variant="contained" size="small">Learn More</Button>
        {location.pathname === '/store' ? <Typography variant="h6">{price}$</Typography> : null}
      </CardActions>
    </Card>
  );
}

