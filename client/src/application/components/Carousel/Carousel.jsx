import Carousel from "react-grid-carousel";
import MediaCard from "../Card/Card";

const responsiveLayout = [
    {
      breakpoint: 800,
      gap: 50,
      loop: true,
      autoplay: 5000
    }
  ]

const CarouselComponent = () => {
  return (
    <div className="carousel-container" style={{width: '80%'}}>
        <h1>New Releases</h1>
        <Carousel cols={4} rows={1} loop responsiveLayout={responsiveLayout}>
        <Carousel.Item>
          <MediaCard/>
        </Carousel.Item>
        <Carousel.Item>
        <MediaCard/>
        </Carousel.Item>
        <Carousel.Item>
          <MediaCard/>
        </Carousel.Item>
        <Carousel.Item>
        <MediaCard/>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default CarouselComponent;


