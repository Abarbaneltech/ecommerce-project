import { useEffect } from "react"
import { useStyles } from "./styles"
import {useSelector, useDispatch} from 'react-redux';
import { getAllProducts } from "../../redux/products/productsSlice";

const Header = () => {

  const classes = useStyles()
  const dispatch = useDispatch()

  const {products} = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  useEffect(() => {
    console.log(products)
  })


  return (
    <div className={`header-container ${classes.div}`}>

    </div>
  )
}
export default Header