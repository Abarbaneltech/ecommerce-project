import { useEffect } from "react"
import { useStyles } from "./styles"
import {useSelector, useDispatch} from 'react-redux';
import { getAllProducts } from "../../redux/products/productsSlice";


const Header = () => {

  const classes = useStyles()
  const dispatch = useDispatch()


  return (
    <div className={`header-container ${classes.header}`}></div>
  )
}
export default Header