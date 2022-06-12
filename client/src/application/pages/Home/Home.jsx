import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Header from "../../components/Header/Header"
import Recommandation from "../../components/Recommandation/Recommandation"
import { getProductByBrand } from "../../redux/products/productsSlice"

const brands = ['Jordan', 'Nike', 'adidas']


const Homepage = () => {

  const dispatch = useDispatch();
  const {brand} = useSelector(state => state.products);
  const {auth} = useSelector(state => state)

  
  useEffect(() => {
    brands.map(brand => dispatch(getProductByBrand(brand)))
  }, []);

  useEffect(() => {
    console.log(auth)
  }, [auth.isAuth])

 

  return (
    <div className="homepage-container">
        <Header/>
        {brand.length > 0 && brand.map(brand => <Recommandation key={brand.message} products={brand.products} message={brand.message}/>)}
    </div>
  )
}
export default Homepage



