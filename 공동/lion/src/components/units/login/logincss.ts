import styled from "@emotion/styled";
import palette from "../../../../styles/palette";
import Button from "../../../components/commons/button/loginbutton";

// export const LoginPosition = styled.div`
//   display: "flex";
//   justify-content: "flex-end";
// `;

export const LoginWrapper = styled.div`
  position: fixed; // 어떤 페이지든 상관 없게 위치를 고정
  z-index: 1; // 가장 우선순위를 높게 만듬
  max-height: 50%;
  max-width: 400px;
  margin-top: 10%;
  margin-left: 80%;
  margin-right: -10.8%;
`;

export const LoginFormWrapper = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  &::before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 31%;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #ffffff transparent;
  }

  @media (max-width: 768px) {
    /* 작은 화면에 대한 위치 조정 */
    width: calc(100% - 40px);
    left: 10px;
    top: calc(100% + 1rem);
    transform: none;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    /* 중간 크기 화면에 대한 위치 조정 */
    width: calc(100% - 40px);
    left: 10px;
    top: calc(100% + 1rem);
    transform: none;
  }

  @media (min-width: 1025px) {
    /* 큰 화면에 대한 위치 조정 */
    width: calc(100% - 250px);
    left: 50px;
    top: 100px;
    transform: none;
  }
`;

export const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
  background-color: ${(props) => (props.disabled ? "#f2f2f2" : "#5eb6f6")};
`;

export const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: ${palette.gray[7]};
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

export const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;
