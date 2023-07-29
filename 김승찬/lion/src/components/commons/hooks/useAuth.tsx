import { useEffect } from "react";
import { useRouter } from "next/router";

export const useAuth = (): void => {
  // use라는 기능을 포함하고 있으면 이름을 use로 만들어 커스터 hook을 만듬
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후 이용 가능합니다!!!");
      void router.push("/section23/23-05-login-check-hoc");
    }
  }, []);
};
