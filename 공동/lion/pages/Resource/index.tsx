import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
`;

const Section = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.div`
  width: calc(33.33% - 20px);
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const ItemTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ItemDescription = styled.p`
  font-size: 14px;
  color: #777;
`;

const DocumentList = () => {
  const documents = [
    {
      title: '자료 1',
      description: '유용한 자료 및 파일을 제공합니다.',
    },
    {
      title: '자료 2',
      description: '학습 자료와 참고 문서를 다운로드하세요.',
    },
    {
      title: '자료 3',
      description: '관련된 자료들을 손쉽게 찾아보세요.',
    },
    // ... 추가적인 자료 데이터
  ];

  return (
    <Container>
      <Section>
        <Title>자료실</Title>
        <ListContainer>
          {documents.map((doc, index) => (
            <ListItem key={index}>
              <ItemTitle>{doc.title}</ItemTitle>
              <ItemDescription>{doc.description}</ItemDescription>
            </ListItem>
          ))}
        </ListContainer>
      </Section>
    </Container>
  );
};

export default DocumentList;
