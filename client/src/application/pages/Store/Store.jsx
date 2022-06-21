import { Accordion, AccordionDetails, AccordionSummary, Box, Button, CircularProgress, Divider, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography,  } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MediaCard from "../../components/Card/Card";
import { getAllProducts, productActions } from "../../redux/products/productsSlice";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const brands = ['Jordan', 'Nike', 'adidas', 'Vans', 'Reebok', 'Converse']

const Store = () => {
  const [inputValue, setInputValue] = useState("");
  const [radioGroupValue, setRadioGroupValue] = useState('')
  const [expanded, setExpanded] = useState(true)
  const dispatch = useDispatch();
  const {products, status, filteredProducts} = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
  
  const productsSearchHandler = () => {
    dispatch(productActions.searchByName(inputValue))

    setInputValue('')
  }

  useEffect(() => {

  }, [radioGroupValue])

  const expandedHandler = () => {
    setExpanded(prev => !prev)
    console.log(expanded)
  }

  const radioGroupHandler = () => {
    // dispatch(productActions.searchByName(radioGroupValue))
  }



  return (
    <div className="store-container">
      <Grid container>
        <Grid item xs={4} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '35ch' }, marginBottom: '5em', width: '80%'}}>
        <TextField
          id="outlined-multiline-flexible"
          label="Search shoes"
          name="searchshoes"
          multiline
          maxRows={4}
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
          onClick={expandedHandler}
        >
          <Box sx={{display: 'flex', width: '100%', justifyContent: 'space-between', }}>
            <p>Select Your Brand</p>
            <p>{expanded ? <ArrowDownwardIcon/> : <ArrowUpwardIcon/>}</p>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
        <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Brands:</FormLabel>
      <RadioGroup>
        {brands.map((value) => (
          <FormControlLabel key={value} value={value} onChange={(e) => dispatch(productActions.searchByName(e.target.value))} control={<Radio />} label={value}></FormControlLabel>
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
        {filteredProducts.length === 0 ? <Grid item sx={3}><h1>No Results Found</h1></Grid> : filteredProducts.length > 0 && filteredProducts.map((product) => (
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

