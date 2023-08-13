import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import Post from './resource';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  tr {
    cursor: pointer;
  }
  th,
  td {
    padding: 15px;
    border-bottom: 1px solid #eee;
    text-align: left;
  }
  th {
    font-weight: bold;
    background-color: #f2f2f2;
  }
`;

const Total = styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  font-family: 'Pretendard-Regular';
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  background-color: ${(props) => (props.active ? '#007bff' : 'transparent')};
  color: ${(props) => (props.active ? 'white' : '#007bff')};
  border: 1px solid #007bff;
  cursor: pointer;
`;

const ITEMS_PER_PAGE = 10; // 페이지 당 게시물 수

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const router = useRouter();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const data: Post[] = response.data;
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePostClick = (postId: number): void => {
    void router.push(`/Resource/ResourceItem/${postId}`);
  };

  // 현재 페이지에 해당하는 게시물 배열을 반환합니다.
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredPosts.slice(startIndex, endIndex);
  };

  // 총 페이지 수를 계산합니다.
  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);

  return (
    <Container>
      <Title>자료실</Title>
      <SearchBar
        type="text"
        placeholder="제목 검색"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1); // 검색어가 변경되면 첫 페이지로 리셋
        }}
      />
      <Total>총 {filteredPosts.length}개</Total>
      <Table>
        <thead>
          <tr>
            <th>NO</th>
            <th>제목</th>
            <th>작성자</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          {getCurrentPageItems().map((post) => (
            <tr key={post.id} onClick={() => handlePostClick(post.id)}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.userId}</td>
              <td>{new Date(post.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/*페이지네이션 기능 */}
      <Pagination>
        {Array.from({ length: totalPages }, (_, index) => (
          <PageButton
            key={index}
            active={index + 1 === currentPage}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </PageButton>
        ))}
      </Pagination>
    </Container>
  );
};

export default Home;
