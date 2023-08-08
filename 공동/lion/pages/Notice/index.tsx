import React from 'react';
import styled from "@emotion/styled";



const NoticeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const NoticeItem = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
`;
const AppContainer = styled.div`
  font-family: Arial, sans-serif;
`;

const notices = [
  {
    title: '공지사항 제목 1',
    content: '이 공지사항은 예시입니다.',
  },
  {
    title: '공지사항 제목 2',
    content: '두 번째 공지사항 내용입니다.',
  },
  // ... 추가적인 공지사항 데이터
];

const NoticeList = () => {
  return (
    <AppContainer>
        <NoticeContainer>
      {notices.map((notice, index) => (
        <NoticeItem key={index}>
          <h3>{notice.title}</h3>
          <p>{notice.content}</p>
        </NoticeItem>
      ))}
    </NoticeContainer>
    </AppContainer>
    
  );
};

export default NoticeList;
