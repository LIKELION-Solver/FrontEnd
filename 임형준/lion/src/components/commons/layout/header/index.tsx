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
  NavLink,
  NavLinks,
  UserNameButton,
  UserNameSection,
} from "./headercss";

const LayoutHeader = (): JSX.Element => {
  const router = useRouter();
  const [isLoginVisible, setIsLoginVisible] =
    useRecoilState(isLoginVisibleState);
  const [userName, setUserName] = useRecoilState(userNameState); // Use the Recoil state for userName
  const [isUserNameButtonSelected, setIsUserNameButtonSelected] =
    useState(false);

  const onClickHeader = (path: string): void => {
    setIsLoginVisible(false); // Hide the login floating window before navigating
    void router.push(path);
  };

  const onClickLogin = (): void => {
    setIsLoginVisible(!isLoginVisible);
  };

  // Hide the login floating window when navigating to a different page
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
    setUserName(null); // Set the userName in Recoil state to null upon logout
  };

  // Check if the user is already logged in and hide the login window
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <NavBarWrapper>
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
        <NavLinks>
          <NavLink
            onClick={() => {
              onClickHeader("/QuestionRoom");
            }}
            className={router.pathname === "/QuestionRoom" ? "selected" : ""}
          >
            질문방
          </NavLink>
          <NavLink
            onClick={() => {
              onClickHeader("/blog");
            }}
            className={router.pathname === "/blog" ? "selected" : ""}
          >
            지식 공유
          </NavLink>
          <UserNameButton
            isLoginVisible={isLoginVisible}
            onClick={() => {
              setIsUserNameButtonSelected((prev) => !prev); // Toggle the isUserNameButtonSelected state
              onClickLogin();
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            disabled={!!userName} // Disable the UserNameButton when the user is logged in
            className={
              (isLoginVisible || (userName && isUserNameButtonSelected)) &&
              !userName
                ? "selected"
                : ""
            }
          >
            {userName ? (
              <>
                <UserOutlined />
                {`Welcome ${userName}!`}
                <UserNameSection
                  isHovered={isHovered}
                  isLoggedIn={!userName || isUserNameButtonSelected}
                >
                  <NavLink
                    onClick={() => {
                      onClickHeader("/MyPage");
                    }}
                    className={router.pathname === "/MyPage" ? "selected" : ""}
                  >
                    마이페이지
                  </NavLink>
                  {userName && (
                    <NavLink onClick={onClickLogout}>로그아웃</NavLink>
                  )}
                </UserNameSection>
              </>
            ) : (
              <>
                <UserOutlined />
                login
              </>
            )}
          </UserNameButton>
        </NavLinks>
      </NavBarWrapper>
      {isLoginVisible && !userName && <LoginButton />}
    </>
  );
};

export default LayoutHeader;
