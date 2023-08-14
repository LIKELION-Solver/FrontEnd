// pages/Study/CreateGroup/index.tsx
import { useState } from "react";
import { useRouter } from "next/router";
import "react-quill/dist/quill.snow.css"; // 리액트 퀼의 스타일 파일
import axios from "axios"; // axios 임포트
import {
  ContentWrapper,
  SubmitButton,
  StudyFormWrapper,
  StudyTitleInput,
  StudyTitleContainer,
} from "./CreateGroup";
import QuillEditor from "../../../src/components/commons/QuillEditor";
// import ReactQuill from "react-quill";
import ReactHtmlParser from "react-html-parser";

const CreateGroup: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const router = useRouter();

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContent = (event) => {
    setContent(event);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // 사용자 정보 조회
      const UserDataResponse = await axios.post(
        "http://backend-practice.codebootcamp.co.kr/graphql",
        {
          query: `
            query {
              fetchUserLoggedIn {
                email
                name
              }
            }
          `,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      if (
        UserDataResponse.data.data &&
        UserDataResponse.data.data.fetchUserLoggedIn
      ) {
        const UserData = UserDataResponse.data.data.fetchUserLoggedIn;
        const userName = UserData.name;

        // 여기에서 작성한 글을 서버에 저장하는 로직을 구현
        const saveDataResponse = await axios.post(
          "http://backend-practice.codebootcamp.co.kr/graphql",
          {
            query: `
              mutation {
                createUseditem(createUseditemInput: {
                  name: "${userName}",
                  remarks: "${title}",
                  contents: ${JSON.stringify(content)},
                  price: 0,
                  tags: ["예시", "스터디", "그룹"],
                  images: ["none"]
                }) {
                  _id
                  name
                  remarks
                  contents
                  price
                  tags
                  images
                }
              }
            `,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );

        router.push("/Study");
      }
    } catch (error) {
      console.error("스터디 등록 에러 발생:", error);
    }
  };

  return (
    <ContentWrapper>
      <StudyTitleContainer>
        <h2>글쓰기</h2>
      </StudyTitleContainer>
      <StudyFormWrapper onSubmit={onSubmit}>
        <StudyTitleInput
          placeholder="스터디 이름"
          onChange={onChangeTitle}
          value={title}
        />
        <QuillEditor value={content} onChange={onChangeContent} />

        <SubmitButton type="submit">스터디 등록</SubmitButton>
      </StudyFormWrapper>
    </ContentWrapper>
  );
};

export default CreateGroup;
