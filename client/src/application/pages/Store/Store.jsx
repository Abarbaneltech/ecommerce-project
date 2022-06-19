import { Accordion, AccordionDetails, AccordionSummary, Box, Button, CircularProgress, Divider, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography,  } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MediaCard from "../../components/Card/Card";
import { getAllProducts } from "../../redux/products/productsSlice";

const brands = ['Jordan', 'Nike', 'adidas', 'Vans', 'Rebook', 'Converse']

const Store = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null)
  const dispatch = useDispatch();
  const {products, status} = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  const handleClick = () => {
    console.log(inputRef.current.value)
  }

  const productsSearchHandler = (input) => {
    // products.filter(product => console.log(product))
    console.log(inputValue)
  }

  // const inputHandler = (value) => {
  //   setInputValue(value)
  // }

  return (
    <div className="store-container">
      <Grid container>
        <Grid item xs={4} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Box component="form" ref={inputRef} sx={{'& .MuiTextField-root': { m: 1, width: '35ch' }, marginBottom: '5em', width: '80%'}}>
        <TextField
          id="outlined-multiline-flexible"
          label="Search shoes"
          name="searchshoes"
          multiline
          maxRows={4}
        //  ref={inputRef}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <Button onClick={productsSearchHandler} variant="contained">Search</Button>
      </Box>
        <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '35ch' }, border: '1px solid black', width: '80%'}}>
        <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> Select your brand</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Brands:</FormLabel>
      <RadioGroup>
        {brands.map((value) => (
          <FormControlLabel value={value} control={<Radio/>} label={value}></FormControlLabel>
        ))}
      </RadioGroup>
    </FormControl>
        </AccordionDetails>
      </Accordion>
      </Box>
        </Grid>
        <Grid xs={6}>
        <div>
      {status === 'loading' ? <div style={{display: 'flex', justifyContent: 'center'}}><CircularProgress size="5rem" /></div> : <Grid container spacing={4}>
        {products.length > 0 && products.map((product) => (
          <Grid item xs={3}>
            <MediaCard name={product.name} brand={product.brand} image={product.image} price={product.price} color={product.colorway} id={product._id}/>
          </Grid>
        ))}
      </Grid>}
    </div>
        </Grid>
      </Grid>
    </div>
  );
  
}
export default Store;

