import React, { useEffect, useState } from "react";
import LayoutHeader from "./../../commons/layout/header/index";
import { useRecoilState } from "recoil";
import { userNameState } from "../../commons/layout/header/recoilState";

const fakeFetchUserProfile = () => {
  return "김승찬";
};

const KakaoLoginSuccess = ({ buttonClick }): JSX.Element => {
  const [isKakaoResponseHandled, setIsKakaoResponseHandled] = useState(false);
  const [userName, setUserName] = useRecoilState(userNameState); // Use the Recoil state for userName

  useEffect(() => {
    const handleKakaoResponse = async () => {
      if (buttonClick && !isKakaoResponseHandled) {
        setIsKakaoResponseHandled(true);
        const userProfile = fakeFetchUserProfile();
        setUserName(userProfile);
        localStorage.setItem("userName", userProfile); // Store the userName in LocalStorage
        console.log("userName after setting:", userProfile);
      }
    };

    handleKakaoResponse();
  }, [buttonClick, isKakaoResponseHandled, setUserName]);

  return (
    <>
      <LayoutHeader userName={userName} />
    </>
  );
};

export default KakaoLoginSuccess;
