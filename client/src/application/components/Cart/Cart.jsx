import { Avatar, Button, Divider, Drawer, Paper, Typography } from "@mui/material"
import { Box } from "@mui/system"
import BackspaceIcon from '@mui/icons-material/Backspace';
import { useEffect, useState } from "react";
import { addToCart, cartHandler, decreaseCart, getTotalPrice, removeFromCart } from "../../redux/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import CancelIcon from '@mui/icons-material/Cancel';


function Cart() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {cartProducts, isCartOpen, cartTotalAmount, cartTotalQuantity} = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(getTotalPrice())
    }, [cartTotalAmount, cartTotalQuantity])
    
    
    console.log(cartProducts)

    const closeCart = () => {
        dispatch(cartHandler())
    }

    const emptyCartHandler = () => {
        navigate('/store')
        dispatch(cartHandler())
    }

    const decreaseProductHandler = (product) => {
        dispatch(decreaseCart(product))
        dispatch(getTotalPrice())
    }

    const increaseProductHandler = (product) => {
        dispatch(addToCart(product))
        dispatch(getTotalPrice())
    }

    

  return (
    <Drawer onClose={() => dispatch(cartHandler())} open={isCartOpen} anchor="right" PaperProps={{
        sx:{
            width: 600,
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
                    <CancelIcon onClick={() => dispatch(removeFromCart(product))} style={{cursor: 'pointer'}}/>
                  <Box>
                      <Box display='flex' alignItems="center" justifyContent='space-between'>
                          <Avatar src={product.image} sx={{width: 100, height: 'auto', mr: 2}} />
                          <Box display="flex" flexDirection="column">
                              <Typography variant="body1">{product.name}</Typography>
                          </Box>
                          <Box sx={{width: '30%'}}>
                          <Typography variant="body1" > {product.price}$</Typography>
                          </Box>
                          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px', border: '1px solid black', borderRadius: '15px', width: '30%'}}>
                            <Button onClick={() => decreaseProductHandler(product)} sx={{width: '30%', background: 'transparent', border: 0, cursor: 'pointer'}}>-</Button>
                          <Typography variant="body1" > {product.cartQuantity}</Typography>
                            <Button onClick={() => increaseProductHandler(product)} sx={{width: '30%', background: 'transparent', border: 0, cursor: 'pointer'}}>+</Button>
                          </Box>
                      </Box>
                      <Divider/>
                  </Box>  
                      </Paper>
            ))}
            {/* {cartProducts.length === 0 ? <Button onClick={emptyCartHandler}  sx={{mt: 4}} variant="contained">Go shopping!</Button> : <Button sx={{mt: 4}} variant="contained">Proceed to payment</Button>} */}
            {cartProducts.length === 0 ? 
            <Box display='flex' flexDirection="column">
            <Typography variant="h4" color="black">Your Cart is empty.</Typography>
            <Button onClick={emptyCartHandler}  sx={{mt: 4}} variant="contained">Go shopping!</Button>
            </Box> : 
            <Box display="flex" flexDirection='column' width='100%'>
                <Box display="flex" justifyContent='space-between'>
                    <Typography variant="h6">Total</Typography>
                    <Typography variant="h6">{cartTotalAmount}</Typography>
                </Box>
                <Box display="flex" justifyContent={'center'}>
                <Button sx={{mt: 4, display:"flex", width:'100%'}} variant="contained">Proceed to payment</Button>
                </Box>
                
            </Box>
            }
        </Box>
    </Drawer>
  )
}
export default Cart

