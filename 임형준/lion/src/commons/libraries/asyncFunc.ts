import type { FormEvent } from "react";

export const wrapAsync = (asyncFunc: () => Promise<void>) => () => {
  void asyncFunc();
};

export const wrapFormAsync = // 기본적으로 백엔드로 보낼려고 하기 때문에 리프레쉬를 함
  (asyncFunc: () => Promise<void>) => (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 이벤트 방지
    void asyncFunc();
  };
