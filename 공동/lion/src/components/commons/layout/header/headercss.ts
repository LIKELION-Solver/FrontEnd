// /* header/headercss.ts */
// import styled from "@emotion/styled";
// import { keyframes } from "@emotion/react";

// export const NavBarWrapper = styled.nav<{
//   isExpanded: boolean;
//   isDropdownVisible: boolean;
//   isHovered: boolean;
// }>`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 20px;
//   padding-top: ${({ isHovered }) => (isHovered ? "10px" : "20px")};
//   list-style: none;
//   margin: 0;
//   background-color: #ffffff;
//   border-top: 4px solid #5eb6f6;
//   border-bottom: 1px solid #d8d8d8;
//   z-index: 1000;
//   height: ${({ isExpanded, isDropdownVisible }) =>
//     isExpanded || isDropdownVisible ? "150px" : "70px"};
//   transition: height 0.3s ease;
// `;

// export const Logo = styled.div`
//   width: 100px;
//   height: 70px;
//   cursor: pointer;
// `;

// export const NavLinks = styled.ul`
//   display: flex;
//   list-style: none;
// `;

// export const NavLink = styled.li`
//   position: relative; /* Keep the position relative */
//   display: flex; /* Display content as flex */
//   justify-content: center; /* Center content horizontally */
//   margin-right: 20px;
//   cursor: pointer;
//   padding: 10px 20px;
//   font-size: 16px;
//   font-weight: bold;
//   text-transform: uppercase;
//   color: #000;
//   transition: background-color 0.3s ease, transform 0.3s ease; /* Add transform transition */
//   width: 120px; /* Set a predefined width */
//   height: 40px; /* Set a predefined height */
//   text-align: center;
//   text-justify: center;
//   &:hover {
//     background-color: #f2f2f2;
//     transform: scale(1.05); /* Slightly scale the button on hover */
//     ${NavBarWrapper} {
//       margin-top: 10px;
//     }
//   }

//   &.selected {
//     background-color: #5eb6f6;
//     color: #fff;
//     &:hover {
//       transform: scale(1); /* Remove scaling on selected state */
//     }
//   }

//   &:last-child {
//     margin-right: 20px;
//   }
//   transition: none;
// `;

// export const UserNameSection = styled.div<{
//   isHovered: boolean;
//   isLoggedIn: boolean;
// }>`
//   display: ${({ isHovered, isLoggedIn }) =>
//     isHovered || isLoggedIn ? "block" : "none"};
// `;

// export const UserNameButton = styled(NavLink)`
//   cursor: pointer;
//   position: relative;
//   display: flex; /* Add this line */
//   align-items: center; /* Add this line */
//   /* Smooth hover animation */
//   transition: background-color 0.3s ease;

//   /* Show the UserNameSection on hover */
//   &:hover ${UserNameSection} {
//     display: block;
//   }

//   /* Styles for My Page and Logout links on hover */
//   &:hover ${UserNameSection} ${NavLink} {
//     &:hover {
//       background-color: #5eb6f6;
//       color: #fff;
//     }
//   }

//   /* Add the selected styles when the button is selected */
//   &.selected {
//     background-color: #5eb6f6;
//     color: #fff;

//     /* Add the selected styles for My Page and Logout links when button is selected */
//     ${UserNameSection} ${NavLink} {
//       background-color: transparent;
//       color: #fff;
//     }
//   }
// `;

// export const slideFadeInDropdownAnimation = keyframes`
//   0% {
//     transform: translateY(-100%);
//   }

//   100% {
//     transform: translateY(0);
//   }
// `;

// export const slideFadeOutDropdownAnimation = keyframes`
//   0% {
//     transform: translateY(0%);
//   }

//   100% {
//     transform: translateY(-100%);
//   }
// `;

// export const SlideFadeInDropdown = styled.div<{ isVisible: boolean }>`
//   position: absolute;
//   top: 100%; /* Position directly below the button */
//   left: 0;
//   width: 100%; /* Set width to 100% to match the button's width */
//   visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
//   max-height: ${({ isVisible }) => (isVisible ? "200px" : "0")};
//   overflow: hidden;
//   transition: visibility 0.3s ease, max-height 0.3s ease;
//   z-index: 1000;
//   transform-origin: top; // Add this line to set the transform origin to the top
//   transform: scaleY(
//     ${({ isVisible }) => (isVisible ? "1" : "0")}
//   ); // Use scaleY for smooth height expansion

//   /* Animate NavBarWrapper height */
//   ${NavBarWrapper} {
//     height: ${({ isVisible }) => (isVisible ? "auto" : "70px")};
//   }

//   > ul {
//     animation: ${slideFadeInDropdownAnimation} 0.4s ease;
//   }
// `;

// export const SlideFadeOutDropdown = styled.div<{ isVisible: boolean }>`
//   position: absolute;
//   top: 100%; /* Position directly below the button */
//   left: 0;
//   width: 100%; /* Set width to 100% to match the button's width */
//   visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
//   max-height: ${({ isVisible }) => (isVisible ? "200px" : "0")};
//   overflow: hidden;
//   transition: visibility 0.3s ease, max-height 0.3s ease;
//   z-index: 1000;
//   transform-origin: top; // Add this line to set the transform origin to the top
//   transform: scaleY(
//     ${({ isVisible }) => (isVisible ? "1" : "0")}
//   ); // Use scaleY for smooth height expansion

//   /* Animate NavBarWrapper height */
//   ${NavBarWrapper} {
//     height: ${({ isVisible }) => (isVisible ? "auto" : "70px")};
//   }

//   > ul {
//     animation: ${slideFadeOutDropdownAnimation} 0.4s ease;
//     animation-fill-mode: forwards;
//   }
// `;

/* import { keyframes } from "@emotion/react";
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
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  padding-top: ${({ isHovered }) => (isHovered ? "10px" : "20px")};
  list-style: none;
  margin: 0;
  background-color: #ffffff;
  border-top: 4px solid #5eb6f6;
  border-bottom: 1px solid #d8d8d8;
  z-index: 1000;
  height: ${({ isExpanded, isDropdownVisible }) =>
    isExpanded || isDropdownVisible ? "150px" : "70px"};
  transition: height 0.3s ease;
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

export const StyledNavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

export const StyledNavLink = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: #000;
  transition: background-color 0.3s ease, transform 0.3s ease;
  width: 120px;
  height: 40px;
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

export const StyledUserNameSection = styled.div<{
  isHovered: boolean;
  isLoggedIn: boolean;
}>`
  display: ${({ isHovered, isLoggedIn }) =>
    isHovered || isLoggedIn ? "block" : "none"};
`;

export const StyledUserNameButton = styled(StyledNavLink)`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover ${StyledUserNameSection} {
    display: block;
  }

  &:hover ${StyledUserNameSection} ${StyledNavLink} {
    &:hover {
      background-color: #5eb6f6;
      color: #fff;
    }
  }

  &.selected {
    background-color: #5eb6f6;
    color: #fff;

    ${StyledUserNameSection} ${StyledNavLink} {
      background-color: transparent;
      color: #fff;
    }
  }
`;

export const StyledSlideFadeInDropdown = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  max-height: ${({ isVisible }) => (isVisible ? "200px" : "0")};
  overflow: hidden;
  transition: visibility 0.3s ease, max-height 0.3s ease;
  z-index: 1000;
  transform-origin: top;
  transform: scaleY(${({ isVisible }) => (isVisible ? "1" : "0")});

  ${NavBarWrapper} {
    height: ${({ isVisible }) => (isVisible ? "auto" : "70px")};
  }

  > ul {
    animation: ${slideFadeInDropdownAnimation} 0.4s ease;
  }
`;

export const StyledSlideFadeOutDropdown = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  max-height: ${({ isVisible }) => (isVisible ? "200px" : "0")};
  overflow: hidden;
  transition: visibility 0.3s ease, max-height 0.3s ease;
  z-index: 1000;
  transform-origin: top;
  transform: scaleY(${({ isVisible }) => (isVisible ? "1" : "0")});

  ${NavBarWrapper} {
    height: ${({ isVisible }) => (isVisible ? "auto" : "70px")};
  }

  > ul {
    animation: ${slideFadeOutDropdownAnimation} 0.4s ease;
    animation-fill-mode: forwards;
  }
`; */

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
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  padding-top: ${({ isHovered }) => (isHovered ? "10px" : "20px")};
  list-style: none;
  margin: 0;
  background-color: #ffffff;
  border-top: 4px solid #5eb6f6;
  border-bottom: 1px solid #d8d8d8;
  z-index: 1000;
  height: ${({ isExpanded, isDropdownVisible }) =>
    isExpanded || isDropdownVisible ? "200px" : "70px"};
  transition: height 0.3s ease;
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

const baseLinkStyles = `
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s ease, transform 0.3s ease;
  width: 120px;
  height: 40px;
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

export const StyledLink = styled.li`
  ${baseLinkStyles}
`;

export const StyledUserSection = styled.div<{
  isHovered: boolean;
  isLoggedIn: boolean;
}>`
  display: ${({ isHovered, isLoggedIn }) =>
    isHovered || isLoggedIn ? "block" : "none"};
`;

export const StyledUserButton = styled.div`
  ${baseLinkStyles}
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover ${StyledUserSection} {
    display: block;
  }

  &:hover ${StyledUserSection} ${StyledLink} {
    &:hover {
      background-color: #5eb6f6;
      color: #fff;
    }
  }

  &.selected {
    background-color: #5eb6f6;
    color: #fff;

    ${StyledUserSection} ${StyledLink} {
      background-color: transparent;
      color: #fff;
    }
  }
`;
export const StyledSlideFadeInDropdown = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  max-height: ${({ isVisible }) => (isVisible ? "200px" : "0")};
  overflow: hidden;
  transition: visibility 0.3s ease, max-height 0.3s ease;
  z-index: 1000;
  transform-origin: top;
  transform: scaleY(${({ isVisible }) => (isVisible ? "1" : "0")});

  ${NavBarWrapper} {
    height: ${({ isVisible }) => (isVisible ? "auto" : "70px")};
  }

  > ul {
    animation: ${slideFadeInDropdownAnimation} 0.4s ease;
  }
`;

export const StyledSlideFadeOutDropdown = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  max-height: ${({ isVisible }) => (isVisible ? "200px" : "0")};
  overflow: hidden;
  transition: visibility 0.3s ease, max-height 0.3s ease;
  z-index: 1000;
  transform-origin: top;
  transform: scaleY(${({ isVisible }) => (isVisible ? "1" : "0")});

  ${NavBarWrapper} {
    height: ${({ isVisible }) => (isVisible ? "auto" : "70px")};
  }

  > ul {
    animation: ${slideFadeOutDropdownAnimation} 0.4s ease;
    animation-fill-mode: forwards;
  }
`;
