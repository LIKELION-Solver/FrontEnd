// header/headercss.ts
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

/* 헤더 네비게이션 바를 스타일링하는 컴포넌트 */
export const NavBarWrapper = styled.nav<{
  isLogin: boolean;
  isDropdownVisible: boolean;
  isHovered: boolean;
}>`
  position: fixed; /* 화면 고정 위치 */
  top: 0;
  left: 0;
  right: 0; // top left right를 0으로 하여 fixed로 헤더를 위쪽에 붙임
  width: 100%; // 전체 너비를 차지하도로고 요소 너비를 설정
  display: flex; /* 요소를 가로로 배치 */
  justify-content: flex-start; /* 요소 사이의 여백을 균등 분배 */
  padding: 20px; /* 내부 여백 */
  padding-right: 10px;
  list-style: none; // ul ol 같은 목록에서 기호, 번호 매기기 스타일 삭제
  background-color: #ffffff; /* 배경 색상 */
  border-top: 4px solid #5eb6f6; /* 윗쪽 테두리 색상 */
  border-bottom: 1px solid #d8d8d8; /* 아랫쪽 테두리 색상 */
  z-index: 1000; /* 스택 순서 설정 가장 마지막 (항상 떠있음) */
  height: ${({ isLogin, isDropdownVisible }) =>
    isLogin && isDropdownVisible // 로그인이 되어있고 헤더가 확장되면 250px, 로그인이 안되어 있으면 헤더 확장 안됨
      ? "250px"
      : "70px"};
  transition: max-height 0.3s ease, height 0.3s ease; /* 전환(호버 또는 상태 변경) 효과 설정 */
  /* box-sizing: border-box; */ /* 최소요소 사이즈에 맞게 */
`;

/* 동적으로 확장되는 네비게이션 바 래퍼 */
export const DynamicNavBarWrapper = styled(NavBarWrapper)`
  max-height: ${({ isDropdownVisible }) =>
    isDropdownVisible ? "100%" : "70px"}; /* 최대 높이 설정 */
`;

/* 로고 스타일링 */
export const Logo = styled.div`
  padding-left: 10px;
  padding-right: 50%;
  cursor: pointer;
`;

/* 드롭다운 메뉴 애니메이션 효과를 정의한 키프레임 */
const slideFadeInDropdownAnimation = keyframes`
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
`;

const slideFadeOutDropdownAnimation = keyframes`
  0% {
    transform: translateY(0%);
  }

  100% {
    transform: translateY(-100%);
  }
`;

/* 스타일링된 링크 */
export const StyledLink = styled.ul`
  position: relative;
  list-style: none;
  display: flex; /* 요소를 가로로 배치 */
  justify-content: center; /* 가로 정렬 */
  cursor: pointer; /* 커서 스타일 */
  padding: 10px 20px; /* 내부 여백 설정 */
  font-size: 16px; /* 글자 크기 */
  font-weight: bold; /* 글자 굵기 */
  /* text-transform: uppercase; 대문자 변환 */
  transition: background-color 0.3s ease, transform 0.3s ease; /* 트랜지션 효과 */
  text-align: center; /* 가운데 정렬 */
  text-justify: center;
  /* padding-right: 5%; */

  &:hover {
    background-color: #f2f2f2; /* 호버시 배경 색상 변경 */
    transform: scale(1.05); /* 호버시 크기 확대 효과 */
  }

  &.selected {
    background-color: #5eb6f6; /* Selected background color */
    color: #fff; /* Selected text color */

    &:hover {
      background-color: #5eb6f6; /* Keep the same background color on hover */
      transform: scale(1); /* No hover scaling effect */
    }
  }

  &:last-child {
    margin-right: 20px; /* 오른쪽 여백 설정 */
  }
  transition: none; /* 트랜지션 없음 */
`;

/* 드롭다운 메뉴 항목 스타일링 */
export const DropdownItem = styled.div`
  padding: 10px 20px; /* 내부 여백 설정 */
  font-size: 16px; /* 글자 크기 */
  text-align: center; /* 가운데 정렬 */
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #f2f2f2; /* 호버시 배경 색상 변경 */
  }
`;

/* 드롭다운 메뉴 스타일링 */
export const StyledDropdown = styled.div<{ isVisible: boolean }>`
  position: absolute; /* 절대 위치 설정 */
  top: 100%; /* 상단으로부터의 거리 설정 */
  justify-content: center;
  width: 100%;
  visibility: ${({ isVisible }) =>
    isVisible ? "visible" : "hidden"}; /* 가시성 설정 */
  max-height: ${({ isVisible }) =>
    isVisible ? "300px" : "0"}; /* 최대 높이 설정 */
  overflow: hidden; /* 내용이 넘칠 경우 숨기기 */
  transition: visibility 0.3s ease, max-height 0.3s ease; /* 트랜지션 효과 설정 */
  z-index: 1000; /* 스택 순서 설정 */
  transform-origin: top; /* 변형 기준점 설정 */
  transform: scaleY(
    ${({ isVisible }) => (isVisible ? "1" : "0")}
  ); /* 변형 설정 */

  ${NavBarWrapper} {
    justify-content: center;
    height: ${({ isVisible }) => (isVisible ? "auto" : "70px")}; /* 높이 설정 */
  }

  > div {
    animation: ${({ isVisible }) =>
        isVisible
          ? slideFadeInDropdownAnimation
          : slideFadeOutDropdownAnimation}
      0.4s ease; /* 애니메이션 설정 */
    animation-fill-mode: forwards; /* 애니메이션 상태 설정 */
  }
`;
