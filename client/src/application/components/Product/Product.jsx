import { Box, Button, Chip, Divider, Grid, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { addToCart } from "../../redux/cart/cartSlice";
import { useStyles } from "./styles";


function Product() {

    const {id} = useParams()
    const classes = useStyles()
    const dispatch = useDispatch()

    const {products, brand} = useSelector(state => state.products);
    let product = products.find(product => product._id === id)

    if(!product) { 
        let products = brand.filter(sneakers => sneakers.products.find(product => product._id === id))
        product = products[0].products.find(products => products._id === id)
    } 
    
    const addToCartHandler = (product) => {
      dispatch(addToCart(product))
    }
  
  return (
    <div className={`${classes.container} product-container`}> 
    <Box sx={{my: 3}}>
       <Grid container spacing={2}>
          <Grid style={{height: '500px'}} justifyContent='center' alignItems='center' container item lg={6} md={3}>
            <Grid item sx={4}>
              <img src={product.image} style={{height: '250px'}}/>
            </Grid>
          </Grid>
          <Grid spacing={0} justifyContent='center' item lg={5}>
          <Grid item xs container>
            <Grid item lg={12}><Typography variant="h4">{product.name}</Typography></Grid>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h5">{product.brand}</Typography>
            <Divider style={{height: '25px'}}/>
          </Grid>
          <Grid container item xs={12} sx={{my: 3}} justifyContent='space-between' alignItems="self-end">
          <Grid item><Typography variant="h6">{product.colorway}</Typography></Grid>
          <Grid item>{product.price}$</Grid>
          </Grid>
            <Divider style={{height: '25px'}}/>
          <Grid container item xs={12} sx={{my:6}} justifyContent='space-between' alignItems="self-end">
          <Grid item><Typography variant="h6">Amount</Typography></Grid>
          <Grid item>{product.amount === 0 ? 'Out Of Stock' : `${product.amount} Remaining`}</Grid>
          </Grid>
          <Divider style={{height: '5px'}}/>
          <Grid container item xs={12} sx={{my:6}}>
          <Button onClick={() => addToCartHandler(product)} variant="contained" style={{width: '100%'}}>Add To Cart</Button>
          </Grid>
        </Grid>
       </Grid>
    </Box>
    </div>
  )
}

<Grid sx={2}></Grid>
export default Product

