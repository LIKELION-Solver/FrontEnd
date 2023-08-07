import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

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

const SectionContainer = styled.div`
  padding: 40px;
  background-color: #f5f5f5;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;//행을 벗어날시 줄바꿈
  
`;

const ListItem = styled.div`
width: calc(33.33% - 60px);
margin-right: 20px;
margin-bottom: 20px;
padding: 20px;
background-color: #fff;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
transition: background-color 0.3s ease;
cursor:pointer;
&:hover {
  background-color: #f5f5f5;
}
`;

const ItemTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ItemDescription = styled.p`
  font-size: 14px;
  color: #777;
`;
const NoticeLayout= styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
`
const NoticeButton = styled.button`
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 18px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`


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
  const router = useRouter(); // useRouter 훅을 밖에서 가져옵니다.

  const onClickNoticeItem = (path: string): void => {
    // 지정된 경로로 이동
    void router.push(path);
  };
  return (
    <>
      <SliderComponent />

      <SectionContainer>
        <NoticeLayout>
        <SectionTitle>공지사항</SectionTitle>
          <NoticeButton onClick={() => onClickNoticeItem("/Notice")}>+</NoticeButton>
        </NoticeLayout>
        
        
        <ListContainer>
          <ListItem onClick={() => onClickNoticeItem("/Notice")}>
            <ItemTitle >공지사항 1</ItemTitle>
            <ItemDescription>이벤트 안내 및 공지사항 내용입니다.</ItemDescription>
          </ListItem>
          <ListItem onClick={() => onClickNoticeItem("/Notice")}>
            <ItemTitle >공지사항 2</ItemTitle>
            <ItemDescription>주요 업데이트 및 변경 사항을 안내합니다.</ItemDescription>
          </ListItem>
          <ListItem onClick={() => onClickNoticeItem("/Notice")}>
            <ItemTitle>공지사항 3</ItemTitle>
            <ItemDescription>서비스 이용 안내 및 업데이트 예정 사항입니다.</ItemDescription>
          </ListItem>
          <ListItem onClick={() => onClickNoticeItem("/Notice")}>
            <ItemTitle>공지사항 1</ItemTitle>
            <ItemDescription>이벤트 안내 및 공지사항 내용입니다.</ItemDescription>
          </ListItem>
          <ListItem onClick={() => onClickNoticeItem("/Notice")}>
            <ItemTitle>공지사항 2</ItemTitle>
            <ItemDescription>주요 업데이트 및 변경 사항을 안내합니다.</ItemDescription>
          </ListItem>
          <ListItem onClick={() => onClickNoticeItem("/Notice")}>
            <ItemTitle>공지사항 3</ItemTitle>
            <ItemDescription>서비스 이용 안내 및 업데이트 예정 사항입니다.</ItemDescription>
          </ListItem>
        

        </ListContainer>
      </SectionContainer>

      <SectionContainer>
      <NoticeLayout>
        <SectionTitle>자료실</SectionTitle>
          <NoticeButton onClick={() => onClickNoticeItem("/Resource")}>+</NoticeButton>
        </NoticeLayout>
        <ListContainer>
          <ListItem onClick={() => onClickNoticeItem("/Notice")}>
            <ItemTitle>자료 1</ItemTitle>
            <ItemDescription>유용한 자료 및 파일을 제공합니다.</ItemDescription>
          </ListItem>
          <ListItem onClick={() => onClickNoticeItem("/Notice")}>
            <ItemTitle>자료 2</ItemTitle>
            <ItemDescription>학습 자료와 참고 문서를 다운로드하세요.</ItemDescription>
          </ListItem>
          <ListItem onClick={() => onClickNoticeItem("/Notice")}>
            <ItemTitle>자료 3</ItemTitle>
            <ItemDescription>관련된 자료들을 손쉽게 찾아보세요.</ItemDescription>
          </ListItem>
          <ListItem onClick={() => onClickNoticeItem("/Notice")}>
            <ItemTitle>자료 1</ItemTitle>
            <ItemDescription>유용한 자료 및 파일을 제공합니다.</ItemDescription>
          </ListItem>
          <ListItem onClick={() => onClickNoticeItem("/Notice")}> 
            <ItemTitle>자료 2</ItemTitle>
            <ItemDescription>학습 자료와 참고 문서를 다운로드하세요.</ItemDescription>
          </ListItem>
          <ListItem onClick={() => onClickNoticeItem("/Notice")}>
            <ItemTitle>자료 3</ItemTitle>
            <ItemDescription>관련된 자료들을 손쉽게 찾아보세요.</ItemDescription>
          </ListItem>
        </ListContainer>
      </SectionContainer>
    </>
  );
}
