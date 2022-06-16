import Carousel from "react-grid-carousel";
import MediaCard from "../Card/Card";

const responsiveLayout = [
  {
    breakpoint: 800,
    gap: 50,
    loop: true,
    autoplay: 5000,
  },
];

const CarouselComponent = ({message, products}) => {

  return (
    <div className="carousel-container" style={{width: '80%'}}>
      <h1>Best of - {message}</h1>
      <Carousel cols={4} rows={1} loop responsiveLayout={responsiveLayout}>
      {products.map(product => (
          <Carousel.Item key={product._id}>
          <MediaCard name={product.name} brand={product.brand} image={product.image} price={product.price} color={product.colorway} id={product._id}/>
          </Carousel.Item>
      ))}
      </Carousel>
    </div>
  );
};
export default CarouselComponent;
