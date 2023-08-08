// pages/MyPage/MyPageCss.ts
import styled from "@emotion/styled";

// 마이페이지 기본 틀
export const MyPageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

// 사이드바 컨테이너 설정
export const SidebarContainer = styled.div`
  margin-top: 8%;
  margin-left: 3%;
  width: 20%;
  justify-content: center;
`;

// 사이드 바 요소 설정
export const SidebarTab = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  justify-content: center;
  cursor: pointer;
  padding: 10px;
  background-color: ${(props) => (props.selected ? "#5eb6f6" : "#f8f9fa")};
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  color: ${(props) => (props.selected ? "#ffffff" : "#495057")};
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #e9ecef;
  }

  a:visited {
    text-decoration: none;
    color: inherit;
  }
`;

// 내용 부분 컨테이너
export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-left: 13%;
  flex: 2;
`;

// 사각형 컴포넌트 기본 컨테이너
export const SquareComponent = styled.div`
  display: flex;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  /* 위에는 기본 박스 설정 */
  flex-basis: calc(50% - 10px);
  min-height: 150px;
  border-top: 3px solid #5eb6f6;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

// 사각형 컴포넌트의 위치 컨테이너
export const SquareComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%; /* Adjust the width as needed */
`;

// 사각형 컴포넌트 2개씩 보여주는 컨테이너
export const RowContainer = styled.div`
  display: flex;
  gap: 10%;
  margin-bottom: 20px;
`;
