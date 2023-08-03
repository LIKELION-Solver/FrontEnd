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
  SlideFadeInDropdown,
  SlideFadeOutDropdown,
} from "./headercss";
//버튼 누를시 dropdown 애니메이션 함수
// interface DropdownProps {
//   visibility: boolean;
//   children: React.ReactNode;
// }

// const Dropdown: React.FC<DropdownProps> = ({ visibility, children }) => {
//   const [visibilityAnimation, setVisibilityAnimation] = useState(false);
//   const [repeat, setRepeat] = useState<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     if (visibility) {
//       if (repeat) {
//         clearTimeout(repeat);
//         setRepeat(null);
//       }
//       setVisibilityAnimation(true);
//     } else {
//       setRepeat(setTimeout(() => {
//         setVisibilityAnimation(false);
//       }, 400));
//     }
//   }, [visibility, repeat]);

//   return (
//     <article className={`components-dropdown ${visibility ? 'slide-fade-in-dropdown' : 'slide-fade-out-dropdown'}`}>
//       {visibilityAnimation && children}
//     </article>
//   );
// };



const LayoutHeader = (): JSX.Element => {
  const router = useRouter();
  const [isLoginVisible, setIsLoginVisible] =useRecoilState(isLoginVisibleState);
  const [userName, setUserName] = useRecoilState(userNameState); // Use the Recoil state for userName
  const [isUserNameButtonSelected, setIsUserNameButtonSelected] =useState(false);

  //dropdown 상태
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
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

  const onMouseEnterDropdown = () => {
    setDropdownVisibility(true);
  };

  const onMouseLeaveDropdown = () => {
    setDropdownVisibility(false);
  };

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
          <div>
          <NavLink
            onClick={() => {
              onClickHeader("/QuestionRoom");
            }}
            onMouseEnter={onMouseEnterDropdown}
            onMouseLeave={onMouseLeaveDropdown}
            className={router.pathname === "/QuestionRoom" ? "selected" : ""}
          >
            질문방
          </NavLink>
          {dropdownVisibility ? (
        <SlideFadeInDropdown>
          <ul>
            <li>질문방 들어가기</li>
            <li>글쓰기</li>
            <li>글 수정하기</li>
            
          </ul>
        </SlideFadeInDropdown>
      ) : (
        <SlideFadeOutDropdown>
          <ul>
          <li>질문방 들어가기</li>
            <li>글쓰기</li>
            <li>글 수정하기</li>
          </ul>
        </SlideFadeOutDropdown>
      )}
          </div>
          
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
