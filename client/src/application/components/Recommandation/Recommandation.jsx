import CarouselComponent from "../Carousel/Carousel"
import { useStyles } from "./styles"

const Recommandation = () => {
    const styles = useStyles()

  return (
    <div className={`recommendation-container ${styles.div}`}>
        <CarouselComponent/>
    </div>
  )
}
export default Recommandation