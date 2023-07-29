// import Link from "next/link";
import {
  AuthFormBlock,
  AuthTemplateBlock,
  ButtonWithMarinTop,
  StyledInput,
  WhiteBox,
} from "./registercss";
import { useState } from "react";

export const registerForm = (): JSX.Element => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
  });

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSignUp = (event: React.FormEvent<HTMLFormElement>): void => {
    // event.preventDefault();
    console.log("Simulating sign-up:", formData);
  };

  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <AuthFormBlock>
          <h3>회원가입</h3>
          <form onSubmit={onSignUp}>
            {/* autocomplete 속성 >> 인풋에 자동완성하는 속성 
                 username 은 사용자 이름 , new-password 는 보통 비밀번호 자동완성 막기 위해서 새로운 비밀번호나 비밀번호 확인란에 들어간다는뎅 ㅎ.. 
                 머 일단 책은 이렇고 나는 나중에 보고 current-password 가 더 맞을거 같아서 임의로 바꿨음. */}
            <StyledInput
              autoComplete="username"
              name="username"
              placeholder="아이디"
              value={formData.username}
              onChange={onChangeInput}
            />
            <StyledInput
              autoComplete="current-password"
              name="password"
              placeholder="비밀번호"
              type="password"
              value={formData.password}
              onChange={onChangeInput}
            />
            <StyledInput
              autoComplete="new-password"
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              type="password"
              value={formData.passwordConfirm}
              onChange={onChangeInput}
            />
            <ButtonWithMarinTop type="submit">회원가입</ButtonWithMarinTop>
          </form>
        </AuthFormBlock>
      </WhiteBox>
    </AuthTemplateBlock>
  );
};
