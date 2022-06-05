import Carousel from "../../components/Carousel/Carousel"
import Header from "../../components/Header/Header"
import Recommandation from "../../components/Recommandation/Recommandation"

const Homepage = () => {
  return (
    <div className="homepage-container">
        <Header/>
        <Recommandation/>
        <Recommandation/>
        <Recommandation/>
    </div>
  )
}
export default Homepage