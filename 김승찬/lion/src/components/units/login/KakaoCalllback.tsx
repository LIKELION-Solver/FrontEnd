import React, { useEffect } from "react";

const getKakaoUserInfo = async (accessToken: string) => {
  try {
    const response = await fetch("https://kapi.kakao.com/v2/user/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      // Update the header with the user's name
      const userName = data.kakao_account.profile.nickname;
      document.getElementById("user-name")?.innerText = userName;
    } else {
      console.log("Failed to fetch user information");
    }
  } catch (error) {
    console.log("Error fetching user profile", error);
  }
};

const KakaoCallback = (): JSX.Element => {
  useEffect(() => {
    // Parse the URL to get the access token from the query string
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    // Use the obtained code to get the access token from your backend server
    // ...

    // Once you have the access token, call the function to get user info
    const accessToken = "YOUR_ACCESS_TOKEN"; // Replace with the actual access token
    getKakaoUserInfo(accessToken);
  }, []);

  return <div>Kakao Login Callback</div>;
};

export default KakaoCallback;
