import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import React from 'react';
import styled from "@emotion/styled";
import { useState } from "react";
const WritePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  min-height: 100vh;
`;

const WriteForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const TitleInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ContentTextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TagsInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const QnAWritePage: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [tags, setTags] = useState<string>("");

  const router = useRouter();
  //React.ChangeEvent<HTMLInputElement> ->(input elemet) 변화 감지 객체 타입
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTags(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 여기에서 작성한 글을 서버에 저장하는 로직을 구현하면 됩니다.
    // 서버에 저장하는 로직은 백엔드와 통신을 하는 API 호출이나 GraphQL 요청 등을 포함합니다.

    // 예시: 저장이 완료되면 글 목록 페이지로 이동
    router.push("/QuestionRoom");
  };

  return (
    <WritePageWrapper>
      <WriteForm onSubmit={handleSubmit}>
        <TitleInput
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={handleTitleChange}
        />
        <ContentTextArea
          placeholder="내용을 입력하세요"
          value={content}
          onChange={handleContentChange}
          rows={6}
        />
        <TagsInput
          type="text"
          placeholder="태그를 입력하세요 (쉼표로 구분)"
          value={tags}
          onChange={handleTagsChange}
        />
        <SubmitButton type="submit">글쓰기</SubmitButton>
      </WriteForm>
    </WritePageWrapper>
  );
};

export default QnAWritePage;
