import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer } from "../src/components/units/login/logincss";
//메인페이지
const images = [
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/300",
  // 여기에 원하는 이미지 URL을 추가합니다.
];

const SliderComponent = () => {
  const [showSlider, setShowSlider] = useState(true);

  const toggleSlider = () => {
    setShowSlider(!showSlider);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div>
      {showSlider && (
        <div className="slider-container">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slide ${index}`} />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default function Home(): JSX.Element {
  return (
    <>
      <SliderComponent />
    </>
  );
}
