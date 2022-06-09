import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Carousel from "../../components/Carousel/Carousel"
import Header from "../../components/Header/Header"
import Recommandation from "../../components/Recommandation/Recommandation"
import { getProductByBrand } from "../../redux/products/productsSlice"

const brands = ['Jordan', 'Nike', 'adidas']


const Homepage = () => {

  const dispatch = useDispatch();
  const { brand } = useSelector(state => state.products);
  
  useEffect(() => {
    brands.map(brand => dispatch(getProductByBrand(brand)))
  }, []);

 

  return (
    <div className="homepage-container">
        <Header/>
        {brand.length > 0 && brand.map(product => <Recommandation key={product.message} products={product.products} message={product.message}/>)}
    </div>
  )
}
export default Homepage



