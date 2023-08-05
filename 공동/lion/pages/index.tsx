import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

const images = ["/main1.png", "/main2.png", "/main3.png"];

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 550px;
`;

const Slide = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 550px;
`;

const SlideText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 70px;
  color: white;
  text-align: center;
  font-family: "Cafe24Ohsquare-v2.0", sans-serif;
  letter-spacing: 1px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Slide key={index}>
            <Image src={image} alt={`Slide ${index}`} />
            <SlideText>공부 그 이상의 모든 것</SlideText>
          </Slide>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default function Home(): JSX.Element {
  return (
    <>
      <SliderComponent />
    </>
  );
}
