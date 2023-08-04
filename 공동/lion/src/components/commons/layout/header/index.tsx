// header/index.tsx(LayoutHeader)
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UserOutlined } from "@ant-design/icons";
import { useRecoilState } from "recoil";
import { isLoginVisibleState, userNameState } from "./recoilState";
import LoginButton from "../../../units/login";
import {
  NavBarWrapper,
  Logo,
  StyledLink,
  StyledDropdown,
  DropdownItem,
  DynamicNavBarWrapper,
} from "./headercss";

const LayoutHeader = (): JSX.Element => {
  const router = useRouter();
  const [isLoginVisible, setIsLoginVisible] =
    useRecoilState(isLoginVisibleState);
  const [userName, setUserName] = useRecoilState(userNameState);
  const [isUserNameButtonSelected, setIsUserNameButtonSelected] =
    useState(false);
  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  const onClickHeader = (path: string): void => {
    setIsLoginVisible(false);
    void router.push(path);
  };

  const onClickLogin = (): void => {
    setIsLoginVisible(!isLoginVisible);
  };

  useEffect(() => {
    const handleRouteChange = (): void => {
      setIsLoginVisible(false);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router, setIsLoginVisible]);

  const onClickLogout = (): void => {
    localStorage.removeItem("isLoggedIn");
    setUserName(null);
  };

  const onMouseHeaderDropdown = () => {
    setDropdownVisibility(!dropdownVisibility);
  };

  const onMouseHeaderDropIn = () => {
    setDropdownVisibility(false);
  };

  const renderDropdownContent = () => {
    console.log("Rendering dropdown content");
    return (
      <div>
        <DropdownItem>
          <StyledLink
            onClick={() => {
              onClickHeader("/MyPage");
            }}
            className={router.pathname === "/MyPage" ? "selected" : ""}
          >
            my page
          </StyledLink>
        </DropdownItem>
        <DropdownItem>
          <StyledLink onClick={onClickLogout}>Logout</StyledLink>
        </DropdownItem>
      </div>
    );
  };

  const renderDropdownQuestion = () => {
    console.log("Rendering dropdown question");
    return (
      <div>
        <DropdownItem>
          <StyledLink onClick={() => onClickHeader("/QuestionRoom")}>
            Enter the question room
          </StyledLink>
        </DropdownItem>
        <DropdownItem>
          <StyledLink onClick={() => onClickHeader("/Write")}>Write</StyledLink>
        </DropdownItem>
        <DropdownItem>
          <StyledLink onClick={() => onClickHeader("/EditPost")}>
            Edit post
          </StyledLink>
        </DropdownItem>
      </div>
    );
  };

  return (
    <>
      <DynamicNavBarWrapper
        isExpanded={isLoginVisible}
        isDropdownVisible={dropdownVisibility}
        isHovered={isUserNameButtonSelected || dropdownVisibility}
      >
        <Logo
          onClick={() => {
            onClickHeader("/");
          }}
        >
          <img
            src="/logo.png"
            alt="Logo"
            style={{ width: "130px", height: "70px" }}
          />
        </Logo>

        <div style={{ display: "flex" }}>
          <div>
            <StyledLink
              onClick={() => {
                onClickHeader("/QuestionRoom");
              }}
              onMouseEnter={onMouseHeaderDropdown}
              onMouseLeave={onMouseHeaderDropIn}
              className={router.pathname === "/QuestionRoom" ? "selected" : ""}
            >
              question room
              <StyledDropdown isVisible={dropdownVisibility}>
                {renderDropdownQuestion()}
              </StyledDropdown>
            </StyledLink>
          </div>

          <div>
            <StyledLink
              onClick={() => {
                onClickHeader("/blog");
              }}
              className={router.pathname === "/blog" ? "selected" : ""}
            >
              knowledge sharing
            </StyledLink>
          </div>

          <div>
            <StyledLink
              onClick={() => {
                if (userName) {
                  setIsUserNameButtonSelected(false);
                } else {
                  setIsUserNameButtonSelected((prev) => !prev);
                  onClickLogin();
                }
              }}
              onMouseEnter={onMouseHeaderDropdown}
              onMouseLeave={onMouseHeaderDropIn}
              disabled={!!userName && !isUserNameButtonSelected}
              className={
                (isLoginVisible || (userName && isUserNameButtonSelected)) &&
                !userName
                  ? "selected"
                  : ""
              }
            >
              <UserOutlined />
              {userName ? `Welcome ${userName}!` : "login"}
              <StyledDropdown isVisible={dropdownVisibility}>
                {renderDropdownContent()}
              </StyledDropdown>
            </StyledLink>
          </div>
        </div>
      </DynamicNavBarWrapper>
      {isLoginVisible && !userName && <LoginButton />}
    </>
  );
};

export default LayoutHeader;
