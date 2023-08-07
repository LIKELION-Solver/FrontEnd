// header/index.tsx(LayoutHeader)
import React, { useState } from "react";
import { useRouter } from "next/router";
import { UserOutlined } from "@ant-design/icons";
import { useRecoilState } from "recoil";
import { isLoginVisibleState, userNameState } from "./recoilState";
import LoginButton from "../../../units/login";
import {
  Logo,
  StyledLink,
  StyledDropdown,
  DropdownItem,
  DynamicNavBarWrapper,
} from "./headercss";

const LayoutHeader = (): JSX.Element => {
  const router = useRouter();
  // 로그인 창 표시 여부를 관리하는 Recoil 상태
  const [isLoginVisible, setIsLoginVisible] =
    useRecoilState(isLoginVisibleState);
  // 로그인(사용자 이름을 저장) 되었나 확인하는 Recoil 상태
  const [isLogin, setIsLogin] = useRecoilState(userNameState);
  // 버튼의 선택 여부를 추적하는 상태
  const [isSelected, setIsSelected] = useState(false);
  // 드롭다운 메뉴의 가시성을 관리하는 상태
  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  // 링크 클릭시 특정 경로로 이동하는 함수
  const onClickHeader = (path: string): void => {
    // 로그인 창 숨기기
    setIsLoginVisible(false);
    // 지정된 경로로 이동
    void router.push(path);
  };

  // 로그인 창을 보여줄지 토글하는 함수
  const onClickLogin = (): void => {
    // 로그인 창 토글
    setIsLoginVisible(!isLoginVisible);
  };

  // 사용자 로그아웃 처리하는 함수
  const onClickLogout = (): void => {
    // 로컬 스토리지에서 로그인 상태 제거
    localStorage.removeItem("isLoggedIn");
    // 사용자 이름을 null로 설정하여 제거
    setIsLogin(null);
  };

  // 헤더 드롭다운에 마우스 진입시 실행되는 함수
  const onMouseHeaderDropDown = () => {
    // 드롭다운의 가시성을 토글
    setDropdownVisibility(true); // dropdownVisibility를 true로 설정
  };

  // 헤더 드롭다운에서 마우스 이탈시 실행되는 함수
  const onMouseHeaderDropIn = () => {
    // 드롭다운 숨기기
    setDropdownVisibility(false); // dropdownVisibility를 true로 설정
  };

  // 사용자 드롭다운 메뉴의 내용을 렌더링하는 함수
  const renderDropdownContent = () => {
    console.log("드롭다운 내용 렌더링 중");
    return (
      <div>
        {/* 사용자의 "마이페이지"로 이동하는 링크 */}
        <DropdownItem>
          <StyledLink
            onClick={() => {
              onClickHeader("/MyPage");
            }}
            className={router.pathname === "/MyPage" ? "selected" : ""}
          >
            마이페이지
          </StyledLink>
        </DropdownItem>
        {/* 로그아웃 링크 */}
        <DropdownItem>
          <StyledLink onClick={onClickLogout}>로그아웃</StyledLink>
        </DropdownItem>
      </div>
    );
  };

  // 질문 드롭다운 메뉴의 내용을 렌더링하는 함수
  const renderDropdownQuestion = () => {
    console.log("질문 드롭다운 내용 렌더링 중");
    return (
      <div>
        {/* "질문방"으로 입장하는 링크 */}
        <DropdownItem>
          <StyledLink
            onClick={() => onClickHeader("/QuestionRoom")}
            className={router.pathname === "/QuestionRoom" ? "selected" : ""}
          >
            질문방 입장
          </StyledLink>
        </DropdownItem>
        {/* 질문 작성 링크 */}
        <DropdownItem>
          <StyledLink onClick={() => onClickHeader("/Write")}>
            질문 작성
          </StyledLink>
        </DropdownItem>
        {/* 질문 수정 링크 */}
        <DropdownItem>
          <StyledLink onClick={() => onClickHeader("/EditPost")}>
            질문 수정
          </StyledLink>
        </DropdownItem>
      </div>
    );
  };

  return (
    <>
      {/* 헤더 래퍼: 동적 확장 및 드롭다운 가시성 */}
      <DynamicNavBarWrapper
        isLogin={isLogin !== null && isLoginVisible === false} // 로그인 상태를 넘김 (기본이 로그인됨)
        isDropdownVisible={dropdownVisibility} // 드롭다운 상태를 넘김 (dropdownVisibility == true)
        isHovered={isSelected || dropdownVisibility} // 호버 상태를 넘김(isSelected == true || dropdownVisibility == true)
      >
        {/* 로고 */}
        <Logo
          onClick={() => {
            onClickHeader("/");
          }}
        >
          <img
            src="/logo.png"
            alt="로고"
            style={{ width: "130px", height: "80px" }}
          />
        </Logo>

        <div style={{ display: "flex" }}>
          {/* "질문방"으로 이동하는 링크 */}
          <div>
            <StyledLink
              onClick={() => {
                isLogin === null
                  ? alert("로그인 후 시도해주십시오")
                  : onClickHeader("/QuestionRoom");
              }}
              onMouseEnter={onMouseHeaderDropDown} // 마우스가 영역에 들어 갔을 때 드롭인
              onMouseLeave={onMouseHeaderDropIn} // 마우스가 영역에 들어 갔을 때 드롭다운
              // 사용자가 로그인한 경우와 버튼이 선택되지 않은 경우에 비활성화
              // disabled={isLogin === true && isSelected === true}
              // 조건에 따라 선택된 스타일 적용
              className={router.pathname === "/QuestionRoom" ? "selected" : ""} // 라우팅 된 페이지가 /QuestionRoom이면 selected
              style={{ width: "150px" }}
            >
              질문방
              {/* 사용자가 로그인한 경우 질문 드롭다운 렌더링 */}
              {isLogin && ( // 로그인이 된 경우는 드롭바를 내림
                <StyledDropdown isVisible={dropdownVisibility}>
                  {renderDropdownQuestion()}
                </StyledDropdown>
              )}
            </StyledLink>
          </div>

          {/* "지식 공유방"으로 이동하는 링크 */}
          <div>
            <StyledLink
              onClick={() => {
                onClickHeader("/Study");
              }}
              className={router.pathname === "/Study" ? "selected" : ""}
            >
              지식 공유방
            </StyledLink>
          </div>

          {/* 로그인 버튼 또는 사용자 이름 버튼 */}
          <div>
            <StyledLink
              onClick={() => {
                if (!isLogin) {
                  setIsSelected((prev) => !prev);
                  onClickLogin();
                }
              }}
              onMouseEnter={onMouseHeaderDropDown}
              onMouseLeave={onMouseHeaderDropIn}
              // 사용자가 로그인한 경우와 버튼이 선택되지 않은 경우에 비활성화
              disabled={!!isLogin && !isSelected}
              // 조건에 따라 선택된 스타일 적용
              className={
                (isLoginVisible || (isLogin && isSelected)) && !isLogin
                  ? "selected"
                  : ""
              }
            >
              <UserOutlined />
              {/* 사용자 이름 환영 메시지 또는 "로그인" 표시 */}
              {isLogin ? `Welcome ${isLogin}!` : "login"}
              {/* 사용자가 로그인한 경우 사용자 드롭다운 렌더링 */}
              {isLogin && (
                <StyledDropdown isVisible={dropdownVisibility}>
                  {renderDropdownContent()}
                </StyledDropdown>
              )}
            </StyledLink>
          </div>
        </div>
      </DynamicNavBarWrapper>
      {/* 로그인 패널 표시 및 사용자가 로그인하지 않은 경우 로그인 버튼 표시 */}
      {isLoginVisible && !isLogin && <LoginButton />}
    </>
  );
};

export default LayoutHeader;
