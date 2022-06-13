import CarouselComponent from "../Carousel/Carousel"
import { useStyles } from "./styles"

const Recommandation = ({message, products}) => {
    const styles = useStyles()
  return (
    <div className={`recommendation-container ${styles.div}`}>
        <CarouselComponent message={message} products={products}/>
    </div>
  )
}
export default Recommandation