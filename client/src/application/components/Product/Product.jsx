import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"

function Product() {

    const {id} = useParams()
    const {products, brand} = useSelector(state => state.products);

    let product = products.find(product => product._id === id)

    if(!product) { 
        let products = brand.filter(sneakers => sneakers.products.find(product => product._id === id))
        product = products[0].products.find(products => products._id === id)
    } 

  return (
    <div>     
        {product.name}
    </div>
  )
}
export default Product

