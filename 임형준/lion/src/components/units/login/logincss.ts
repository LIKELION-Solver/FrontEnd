import styled from "@emotion/styled";
import palette from "../../../../styles/palette";
import Button from "../../../components/commons/button/loginbutton";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Change 'flex-end' to 'flex-start' to move it to the upper left corner */
  align-items: flex-end; /* Change 'center' to 'flex-start' to move it to the upper left corner */
  margin-top: 30px; /* Add some margin at the top for better positioning */
  margin-left: 30px;
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
    left: 50%;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #ffffff transparent;
  }

  @media (max-width: 768px) {
    /* 작은 화면에 대한 위치 조정 */
    width: calc(100% - 20px);
    left: 10px;
    top: calc(100% + 1rem);
    transform: none;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    /* 중간 크기 화면에 대한 위치 조정 */
    width: calc(100% - 20px);
    left: 10px;
    top: calc(100% + 1rem);
    transform: none;
  }

  @media (min-width: 1025px) {
    /* 큰 화면에 대한 위치 조정 */
    width: 300px;
    left: 50px;
    top: 100px;
    transform: none;
  }
`;

export const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
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
