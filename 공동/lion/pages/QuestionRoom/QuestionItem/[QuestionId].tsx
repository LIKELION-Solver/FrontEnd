import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styled from '@emotion/styled';
import {Useditem2} from '../exampleData';
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Pretendard-Regular', sans-serif;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const AdminInfo = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  opacity: 0.8;
`;

const Content = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

const LoadingMessage = styled.p`
  font-size: 18px;
`;

const Error = styled.p`
  font-size: 18px;
  color: red;
`;

const BackButton = styled.button`
  background-color: #2D9CDB;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const QuestionItem: React.FC = () => {
  const router = useRouter();
  const { postId } = router.query;
  const [post, setPost] = useState<Useditem2 | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [allQuestions, setAllQuestions] = useState<Useditem2[]>([]); // 모든 질문 데이터 저장
  const [renderQuestions, setRenderQuestions] = useState<Useditem2[]>([]); // 필터링된 질문 데이터 저장
  //const postIdAsNumber = parseInt(router.query.postId, 10);


  //실제 서버
  //http://localhost:8080/api/v1/posts/1
  //무료 api서버
//https://jsonplaceholder.typicode.com/posts/${postId}
  // useEffect(() => {
  //   async function fetchPost() {
  //     try {
        
  //       const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${postId}`);
  //       const data: Question = response.data;
        
  //       setPost(data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching post:', error);
  //       setError('Error fetching post data.');
  //       setLoading(false);
  //     }
  //   }

  //   if (postId) {
  //     fetchPost();
  //   }
  // }, [postId]);
  useEffect(()=>{
    const fetchWrite = async () => {
      try {
        const response = await axios.post(
          "http://backend-practice.codebootcamp.co.kr/graphql",
          {
            query: `
            query {
              fetchUseditems(
                isSoldout: false
                search: ""
                page: 1
              
              ) {
                _id
                name
                remarks
                contents
                price
                tags
             
              }
            }          
            `,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
       
        if (response.data.data) {
          const QuestionList = response.data.data.fetchUseditems; // fetchUseditems에서 데이터를 가져옴
          const questionData=response.data.data.fetchUseditems;
  
          setRenderQuestions(QuestionList);
          setAllQuestions(QuestionList);
        }
      } catch (error) {
        console.error("Error fetching study groups:", error);
      }
    };
    if (1) {
          fetchWrite();
        }
  },[])
  
  

  const handleBackToList = (): void => {
    void router.push("/QuestionRoom");
  };

  return (
    <Container>
      {loading ? (
        <LoadingMessage>Loading...</LoadingMessage>
      ) : error ? (
        <Error>{error}</Error>
      ) : (
        <div>
          <Title>{post?.title}</Title>
          <AdminInfo>
            <span>작성자: {post?.Id}</span>
            <span>{new Date(post?.date).toLocaleDateString()}</span>
          </AdminInfo>
          <Content>{post?.body}</Content>
        </div>
      )}

      <BackButton onClick={handleBackToList}>목록으로</BackButton>
    </Container>
  );
};

export default QuestionItem;
