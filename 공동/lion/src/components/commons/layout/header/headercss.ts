// header/headercss.ts
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const NavBarWrapper = styled.nav<{
  isExpanded: boolean;
  isDropdownVisible: boolean;
  isHovered: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  list-style: none;
  margin: 0;
  background-color: #ffffff;
  border-top: 4px solid #5eb6f6;
  border-bottom: 1px solid #d8d8d8;
  z-index: 1000;
  height: ${({ isExpanded, isDropdownVisible }) =>
    isExpanded || isDropdownVisible ? "300px" : "70px"};
  transition: max-height 0.3s ease, height 0.3s ease;

  /* Add this style to keep content from overlapping when header expands */
  /* box-sizing: border-box; */
`;

export const DynamicNavBarWrapper = styled(NavBarWrapper)`
  max-height: ${({ isExpanded, isDropdownVisible }) =>
    isExpanded || isDropdownVisible ? "100%" : "70px"};
`;

export const Logo = styled.div`
  width: 100px;
  height: 70px;
  cursor: pointer;
`;

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

export const StyledLink = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
  padding: 10px 20px; /* Adjust padding here */
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s ease, transform 0.3s ease;
  text-align: center;
  text-justify: center;

  &:hover {
    background-color: #f2f2f2;
    transform: scale(1.05);
  }

  &.selected {
    background-color: #5eb6f6;
    color: #fff;

    &:hover {
      transform: scale(1);
    }
  }

  &:last-child {
    margin-right: 20px;
  }
  transition: none;
`;
export const DropdownItem = styled.div`
  padding: 10px 20px;
  font-size: 16px;
  text-align: center;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const StyledDropdown = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  max-height: ${({ isVisible }) => (isVisible ? "300px" : "0")};
  overflow: hidden;
  transition: visibility 0.3s ease, max-height 0.3s ease;
  z-index: 1000;
  transform-origin: top;
  transform: scaleY(${({ isVisible }) => (isVisible ? "1" : "0")});

  ${NavBarWrapper} {
    height: ${({ isVisible }) => (isVisible ? "auto" : "70px")};
  }

  > div {
    animation: ${({ isVisible }) =>
        isVisible
          ? slideFadeInDropdownAnimation
          : slideFadeOutDropdownAnimation}
      0.4s ease;
    animation-fill-mode: forwards;
  }
`;
