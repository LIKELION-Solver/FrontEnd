<<<<<<< Updated upstream
import { useRecoilState } from "recoil";
=======
import React, { useState } from "react";
import styled from "@emotion/styled";
>>>>>>> Stashed changes
import { useRouter } from "next/router";
import React from 'react';
import styled from "@emotion/styled";
import { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Cen = styled.div`
  text-align:center;
`
const MovieContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  border: 1px solid #333;
  padding: 10px 0 30px 0;
  border-radius: 5px;
  margin-bottom: 50px;
`;

const FormWrapper = styled.form`
  width: 60%;
  margin: 0 auto;
`;

const TitleInput = styled.input`
  width: 500px;
  height: 40px;
  margin: 10px;
`;

const TextArea = styled.textarea`
  width: 80%;
  min-height: 500px;
`;

const SubmitButton = styled.button`
  width: 200px;
  height: 50px;
  font-size: 20px;
  padding: 20px;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  margin-top: 20px;
  vertical-align: middle;
  cursor:pointer;
`;
const CKEditorEditable = styled.div`
  min-height: 500px;
`;

const QnAWritePage: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [tags, setTags] = useState<string>("");

<<<<<<< Updated upstream
  const router = useRouter();
  //React.ChangeEvent<HTMLInputElement> ->(input elemet) 변화 감지 객체 타입
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
=======
const ImageUploadInput = styled.input`
  display: none;
`;

const ImagePreview = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 10px;
`;
const fontOptions = [
  { label: "기본 글꼴", value: "Arial, sans-serif" },
  { label: "Georgia", value: "Georgia, serif" },
  { label: "Courier", value: "Courier, monospace" },
  // 원하는 글꼴 옵션을 추가하세요
];

const sizeOptions = [
  { label: "14px", value: "14px" },
  { label: "16px", value: "16px" },
  { label: "18px", value: "18px" },
  // 원하는 크기 옵션을 추가하세요
];
const WritePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [fontStyle, setFontStyle] = useState("Arial, sans-serif");
  const [fontSize, setFontSize] = useState("16px");
  const [selectedImage, setSelectedImage] = useState(null);
  const [tag, setTag] = useState("study");
  const router = useRouter();

  const handleFontChange = (e: any) => {
    setFontStyle(e.target.value);
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    <div>
      <Cen>
       <MovieContainer>
        <h2>글쓰기</h2>
      
       </MovieContainer>
       <FormWrapper onSubmit={handleSubmit} >
        <TitleInput placeholder='제목' />
    
        <CKEditor
          editor={ClassicEditor}
          data=""
          onReady={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
          
          
        />
         <SubmitButton type="submit"  >입력</SubmitButton>
       </FormWrapper>
      
      </Cen>
    </div>
    
    
   
  );
};

export default QnAWritePage;
=======
    <WritePostContainer>
      <h2>글쓰기</h2>
      <form onSubmit={onSubmit}>
        <div>
          <FontDropdown value={fontStyle} onChange={handleFontChange}>
            {fontOptions.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </FontDropdown>
          <SizeDropdown value={fontSize} onChange={handleSizeChange}>
            {sizeOptions.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </SizeDropdown>
        </div>
        <div>
          <label>
            이미지 첨부
            <ImageUploadInput
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
        </div>
        <TitleInput
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ fontFamily: fontStyle, fontSize: fontSize }}
        />
        <ContentTextarea
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          style={{ fontFamily: fontStyle, fontSize: fontSize }}
        />
        <div>
          {selectedImage && <ImagePreview src={selectedImage} alt="Uploaded" />}
        </div>
        <SubmitButton type="submit">글쓰기</SubmitButton>
      </form>
    </WritePostContainer>
  );
};

export default WritePost;
>>>>>>> Stashed changes
