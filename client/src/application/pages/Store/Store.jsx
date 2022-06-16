import { CircularProgress, Grid,  } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MediaCard from "../../components/Card/Card";
import { getAllProducts } from "../../redux/products/productsSlice";




function Store() {
  const dispatch = useDispatch();
  const {products, status} = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])



  return (
    <div className="store-container">
      <Grid container>
        <Grid item xs={4} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{height: '40px', border: '1px solid black', width: '50%'}}>What's up</div>
            <div style={{height: '40px', border: '1px solid black', width: '50%'}}>What's up</div>
            <div style={{height: '40px', border: '1px solid black', width: '50%'}}>What's up</div>
            <div style={{height: '40px', border: '1px solid black', width: '50%'}}>What's up</div>
        </Grid>
        <Grid xs={6}>
        <div>
      {status === 'loading' ? <div style={{display: 'flex', justifyContent: 'center'}}><CircularProgress size="5rem" /></div> : <Grid container spacing={4}>
        {products.length > 0 && products.map((product) => (
          <Grid item xs={3}>
            <MediaCard name={product.name} brand={product.brand} image={product.image} price={product.price} color={product.colorway} id={product._id}/>
          </Grid>
        )).sort(() => 0.5 - Math.random())}
      </Grid>}
    </div>
        </Grid>
      </Grid>
    </div>
  );
  
}
export default Store;

