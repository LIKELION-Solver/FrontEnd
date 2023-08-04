// // header/index.tsx(LayoutHeader)
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { UserOutlined } from "@ant-design/icons";
// import { useRecoilState } from "recoil";
// import { isLoginVisibleState, userNameState } from "./recoilState";
// import LoginButton from "../../../units/login";
// import {
//   NavBarWrapper,
//   Logo,
//   NavLink,
//   NavLinks,
//   UserNameButton,
//   UserNameSection,
//   SlideFadeInDropdown,
//   SlideFadeOutDropdown,
// } from "./headercss";

// const LayoutHeader = (): JSX.Element => {
//   const router = useRouter();
//   const [isLoginVisible, setIsLoginVisible] =
//     useRecoilState(isLoginVisibleState);
//   const [userName, setUserName] = useRecoilState(userNameState); // Use the Recoil state for userName
//   const [isUserNameButtonSelected, setIsUserNameButtonSelected] =
//     useState(false);

//   const [dropdownVisibility, setDropdownVisibility] = useState(false);

//   const [isHovered, setIsHovered] = useState(false);
//   const [isQuestionButtonHovered, setIsQuestionButtonHovered] = useState(false);

//   const onClickHeader = (path: string): void => {
//     setIsLoginVisible(false); // Hide the login floating window before navigating
//     void router.push(path);
//   };

//   const onClickLogin = (): void => {
//     setIsLoginVisible(!isLoginVisible);
//   };

//   // Hide the login floating window when navigating to a different page
//   useEffect(() => {
//     const handleRouteChange = (): void => {
//       setIsLoginVisible(false);
//     };
//     router.events.on("routeChangeStart", handleRouteChange);
//     return () => {
//       router.events.off("routeChangeStart", handleRouteChange);
//     };
//   }, [router, setIsLoginVisible]);

//   const onClickLogout = (): void => {
//     localStorage.removeItem("isLoggedIn");
//     setUserName(null); // Set the userName in Recoil state to null upon logout
//   };

//   const onMouseEnterQuestionDropdown = () => {
//     setDropdownVisibility(true);
//     setIsQuestionButtonHovered(true);
//   };

//   const onMouseLeaveQuestionDropdown = () => {
//     setDropdownVisibility(false);
//     setIsQuestionButtonHovered(false);
//   };

//   return (
//     <>
//       <NavBarWrapper
//         isExpanded={isLoginVisible}
//         isDropdownVisible={dropdownVisibility}
//         isHovered={isUserNameButtonSelected || isQuestionButtonHovered}
//       >
//         <Logo
//           onClick={() => {
//             onClickHeader("/");
//           }}
//         >
//           <img
//             src="/logo.png"
//             alt="Logo"
//             style={{ width: "130px", height: "70px" }}
//           />
//         </Logo>
//         <NavLinks>
//           <NavLink
//             onClick={() => {
//               onClickHeader("/QuestionRoom");
//             }}
//             onMouseEnter={onMouseEnterQuestionDropdown}
//             onMouseLeave={onMouseLeaveQuestionDropdown}
//             className={router.pathname === "/QuestionRoom" ? "selected" : ""}
//           >
//             질문방
//             {dropdownVisibility ? (
//               <SlideFadeInDropdown isVisible={dropdownVisibility}>
//                 <ul>
//                   <li>질문방 들어가기</li>
//                   <li>글쓰기</li>
//                   <li>글 수정하기</li>
//                 </ul>
//               </SlideFadeInDropdown>
//             ) : (
//               <SlideFadeOutDropdown isVisible={!dropdownVisibility}>
//                 <ul>
//                   <li>질문방 들어가기</li>
//                   <li>글쓰기</li>
//                   <li>글 수정하기</li>
//                 </ul>
//               </SlideFadeOutDropdown>
//             )}
//           </NavLink>

//           <NavLink
//             onClick={() => {
//               onClickHeader("/blog");
//             }}
//             className={router.pathname === "/blog" ? "selected" : ""}
//           >
//             지식 공유
//           </NavLink>
//           <UserNameButton
//             isLoginVisible={isLoginVisible}
//             onClick={() => {
//               setIsUserNameButtonSelected((prev) => !prev); // Toggle the isUserNameButtonSelected state
//               onClickLogin();
//             }}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//             disabled={!!userName} // Disable the UserNameButton when the user is logged in
//             className={
//               (isLoginVisible || (userName && isUserNameButtonSelected)) &&
//               !userName
//                 ? "selected"
//                 : ""
//             }
//           >
//             {userName ? (
//               <>
//                 <UserOutlined />
//                 {`Welcome ${userName}!`}
//                 <UserNameSection
//                   isHovered={isHovered}
//                   isLoggedIn={!userName || isUserNameButtonSelected}
//                 >
//                   <NavLink
//                     onClick={() => {
//                       onClickHeader("/MyPage");
//                     }}
//                     className={router.pathname === "/MyPage" ? "selected" : ""}
//                   >
//                     마이페이지
//                   </NavLink>
//                   {userName && (
//                     <NavLink onClick={onClickLogout}>로그아웃</NavLink>
//                   )}
//                 </UserNameSection>
//               </>
//             ) : (
//               <>
//                 <UserOutlined />
//                 login
//               </>
//             )}
//           </UserNameButton>
//         </NavLinks>
//       </NavBarWrapper>
//       {isLoginVisible && !userName && <LoginButton />}
//     </>
//   );
// };

// export default LayoutHeader;

// // header/index.tsx(LayoutHeader)
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
  StyledUserButton,
  StyledUserSection,
  StyledSlideFadeInDropdown,
  StyledSlideFadeOutDropdown,
} from "./headercss";

const LayoutHeader = (): JSX.Element => {
  const router = useRouter();
  const [isLoginVisible, setIsLoginVisible] =
    useRecoilState(isLoginVisibleState);
  const [userName, setUserName] = useRecoilState(userNameState);
  const [isUserNameButtonSelected, setIsUserNameButtonSelected] =
    useState(false);

  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const [isQuestionButtonHovered, setIsQuestionButtonHovered] = useState(false);

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

  const onMouseEnterQuestionDropdown = () => {
    setDropdownVisibility(true);
    setIsQuestionButtonHovered(true);
  };

  const onMouseLeaveQuestionDropdown = () => {
    setDropdownVisibility(false);
    setIsQuestionButtonHovered(false);
  };

  return (
    <>
      <NavBarWrapper
        isExpanded={isLoginVisible}
        isDropdownVisible={dropdownVisibility}
        isHovered={isUserNameButtonSelected || isQuestionButtonHovered}
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
        <ul style={{ display: "flex" }}>
          <div>
            <StyledLink
              onClick={() => {
                onClickHeader("/QuestionRoom");
              }}
              onMouseEnter={onMouseEnterQuestionDropdown}
              onMouseLeave={onMouseLeaveQuestionDropdown}
              className={router.pathname === "/QuestionRoom" ? "selected" : ""}
            >
              question room
              {dropdownVisibility ? (
                <StyledSlideFadeInDropdown isVisible={dropdownVisibility}>
                  <ul>
                    <div>Enter the question room</div>
                    <div>Write</div>
                    <div>Edit post</div>
                  </ul>
                </StyledSlideFadeInDropdown>
              ) : (
                <StyledSlideFadeOutDropdown isVisible={!dropdownVisibility}>
                  <ul>
                    <div>Enter the question room</div>
                    <div>Write</div>
                    <div>Edit post</div>
                  </ul>
                </StyledSlideFadeOutDropdown>
              )}
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
            <StyledUserButton
              isLoginVisible={isLoginVisible}
              onClick={() => {
                setIsUserNameButtonSelected((prev) => !prev);
                onClickLogin();
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              disabled={!!userName}
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
                  <StyledUserSection
                    isHovered={isHovered || isUserNameButtonSelected}
                    isLoggedIn={!userName || isUserNameButtonSelected}
                  >
                    <StyledSlideFadeInDropdown
                      isVisible={isHovered || isUserNameButtonSelected}
                    >
                      <ul
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <div>
                          <StyledLink
                            onClick={() => {
                              onClickHeader("/MyPage");
                            }}
                            className={
                              router.pathname === "/MyPage" ? "selected" : ""
                            }
                          >
                            my page
                          </StyledLink>
                        </div>
                        {userName && (
                          <div>
                            <StyledLink onClick={onClickLogout}>
                              Logout
                            </StyledLink>
                          </div>
                        )}
                      </ul>
                    </StyledSlideFadeInDropdown>
                  </StyledUserSection>
                </>
              ) : (
                <>
                  <UserOutlined />
                  login
                </>
              )}
            </StyledUserButton>
          </div>
        </ul>
      </NavBarWrapper>
      {isLoginVisible && !userName && <LoginButton />}
    </>
  );
};

export default LayoutHeader;
