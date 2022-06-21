import { Avatar, Button, Divider, Drawer, Paper, Typography } from "@mui/material"
import { Box } from "@mui/system"
import BackspaceIcon from '@mui/icons-material/Backspace';
import { useState } from "react";
import { cartHandler, removeFromCart } from "../../redux/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import CancelIcon from '@mui/icons-material/Cancel';


function Cart() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {cartProducts, isCartOpen} = useSelector(state => state.cart);
    
    
    console.log(cartProducts)

    const closeCart = () => {
        dispatch(cartHandler())
    }

    const emptyCartHandler = () => {
        navigate('/store')
        dispatch(cartHandler())
    }

    

  return (
    <Drawer onClose={() => dispatch(cartHandler())} open={isCartOpen} anchor="right" PaperProps={{
        sx:{
            width: 400,
            borderRadius: 0
        }
    }}>
        <Box sx={{p:2}} display="flex" flexDirection="column" alignItems="center">
            <Box display="flex" justifyContent='space-between' width="100%">
            <Typography onClick={closeCart} sx={{'&:hover': {cursor: 'pointer'}}} variant="h4" color="black"><BackspaceIcon/></Typography>
            <Typography variant="h4" color="black">Cart</Typography>
            </Box>
            {cartProducts && cartProducts.map((product) => (
                  <Paper elevation={0} sx={{mt: 2, width: '100%', padding: 1}}>
                    <CancelIcon onClick={(product) => dispatch(removeFromCart(product))} style={{cursor: 'pointer'}}/>
                  <Box>
                      <Box display='flex' alignItems="center" justifyContent='space-between'>
                          <Avatar src={product.image} sx={{width: 100, height: 'auto', mr: 2}} />
                          <Box display="flex" flexDirection="column">
                              <Typography variant="body1">{product.name}</Typography>
                          </Box>
                          <Box sx={{width: '30%'}}>
                          <Typography variant="body1" > {product.cartQuantity} x {product.price}$</Typography>
                          </Box>
                      </Box>
                      <Divider/>
                  </Box>  
                      </Paper>
            ))}
            {cartProducts.length === 0 ? <Box variant="h4" color="black">Your Cart is empty.</Box> : null}
            {cartProducts.length === 0 ? <Button onClick={emptyCartHandler}  sx={{mt: 4}} variant="contained">Go shopping!</Button> : <Button sx={{mt: 4}} variant="contained">Proceed to payment</Button>}
        </Box>
    </Drawer>
  )
}
export default Cart
