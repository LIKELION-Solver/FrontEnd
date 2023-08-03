import { useState } from "react";
import KakaoLoginSuccess from "./KakaoLoginSuccess";

const SocialKakao = (): JSX.Element => {
  const [buttonClick, setButtonClick] = useState(false);
  const Rest_api_key = "3b62bda98fa4d574567bf210e76c794d"; // REST API KEY
  const redirect_uri = "http://localhost:3000/"; // Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = (): void => {
    window.location.href = kakaoURL;
    setButtonClick(true);
  };
  return (
    <>
      <button onClick={handleLogin}>카카오 로그인</button>
      {buttonClick && <KakaoLoginSuccess buttonClick={buttonClick} />}
    </>
  );
};

export default SocialKakao;
