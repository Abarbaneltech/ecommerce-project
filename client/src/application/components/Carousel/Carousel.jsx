import { Fragment, useEffect } from "react";
import Carousel from "react-grid-carousel";
import { useDispatch, useSelector } from "react-redux";
import { getProductByBrand } from "../../redux/products/productsSlice";
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
      {products.map(item => (
          <Carousel.Item key={item._id}>
          <MediaCard name={item.name} brand={item.brand} image={item.image} price={item.price} color={item.color}/>
          </Carousel.Item>
      ))}
      </Carousel>
    </div>
  );
};
export default CarouselComponent;
