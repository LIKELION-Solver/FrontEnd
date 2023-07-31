import React, { useState } from "react";
import styled from "@emotion/styled";
import exampleData from "./exampleData";
import type { Question } from "./exampleData";
import InfiniteScroll from "react-infinite-scroller";


const QuestionRoomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  min-height: 100vh; /* 최소 높이 설정 */
  overflow-y: auto;
`;

const FilterTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
  justify-content: center; /* Align tags in the center */
`;

const TagButton = styled.button<{ active: boolean }>`
  background-color: ${(props) => (props.active ? "#007bff" : "#f0f0f0")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

const SearchInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-right:100px
`;

const QuestionCard = styled.div`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
`;

const QuestionRoom = (): JSX.Element => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>(""); // 추가: 검색어 상태
  const [renderQuestions, setRenderQuestions] = useState<Question[]>([]);

  const itemsPerPage = 10;

  const questions: Question[] = exampleData;

  const uniqueTags = Array.from(new Set(questions.flatMap((q) => q.tags)));

  const handleTagClick = (tag: string) => {
    setSelectedTag((prevTag) => (prevTag === tag ? null : tag));
    setRenderQuestions([]);
  };

  const filteredQuestions = selectedTag
    ? questions.filter((q) => q.tags.includes(selectedTag))
    : questions;

  // 추가: 검색어를 이용하여 질문을 필터링
  const searchedQuestions = filteredQuestions.filter((q) =>
    q.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const loadMoreQuestions = () => {
    const nextPage = renderQuestions.length / itemsPerPage + 1;
    const startIndex = (nextPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, searchedQuestions.length);
    const newQuestions = searchedQuestions.slice(startIndex, endIndex);

    setTimeout(() => {
      setRenderQuestions((prevQuestions) => [
        ...prevQuestions,
        ...newQuestions,
      ]);
    }, 500);
  };

  const hasMoreQuestions = renderQuestions.length < searchedQuestions.length;

  return (
    <div >
      <QuestionRoomWrapper>
        <FilterTags>
          {uniqueTags.map((tag) => (
            <TagButton
              key={tag}
              active={selectedTag === tag}
              onClick={() => handleTagClick(tag)}
            >
              #{tag}
            </TagButton>
          ))}
        </FilterTags>

        {/* 추가: 검색어 입력창 */}
        <SearchInput
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search questions..."
        />

        <InfiniteScroll
          pageStart={0}
          loadMore={loadMoreQuestions}
          hasMore={hasMoreQuestions}
          useWindow={false}
        >
          {renderQuestions.map((question) => (
            <QuestionCard key={question.id}>
              <h3>{question.title}</h3>
              <p>{question.content}</p>
              <p>Author: {question.author}</p>
              <p>Tags: {question.tags.join(", ")}</p>
            </QuestionCard>
          ))}
        </InfiniteScroll>
        {hasMoreQuestions && (
          <button onClick={loadMoreQuestions}>Load More</button>
        )}
      </QuestionRoomWrapper>
    </div>
  );
};

export default QuestionRoom;