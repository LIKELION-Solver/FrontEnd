// 업데이트
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import axios from "axios";
import { useRouter } from "next/router";
import { Question } from "./exampleData";
import styled from "@emotion/styled";
import exampleData from "./exampleData";


const QuestionRoomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  min-height: 100vh; /* 최소 높이 설정 */
  overflow-y: auto;
`;

const WriteQuestionButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  margin-bottom: 10px;
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
  flex: 1;
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

interface Ex{
  id: number;
  title: string;
  content: string;
  author: string;
  like_count:number;
}

const QuestionRoom = (): JSX.Element => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [renderQuestions, setRenderQuestions] = useState<Question[]>([]);
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 100;

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(
        `https://localhost:8080/api/v1/posts/1`
      );
      const newQuestions = response.data.map((question: Question) => ({
        //userId: question.userId,
        id: question.id,
        title: question.title,
        //body: question.body,
      }));
      setRenderQuestions((prevQuestions) => [
        ...prevQuestions,
        ...newQuestions,
      ]);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [page]);

  const uniqueTags = Array.from(
    new Set(renderQuestions.flatMap((q) => q.tags))
  );

  const router = useRouter();
  const onClickHeader = (path: string): void => {
    void router.push(path);
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag((prevTag) => (prevTag === tag ? null : tag));
    setRenderQuestions([]);
  };

  const filteredQuestions = selectedTag
    ? renderQuestions.filter((q) => q.tags.includes(selectedTag))
    : renderQuestions;

  const loadMoreQuestions = () => {
    const nextPage = renderQuestions.length / itemsPerPage + 1;
    const startIndex = (nextPage - 1) * itemsPerPage;
    const endIndex = Math.min(
      startIndex + itemsPerPage,
      filteredQuestions.length
    );
    const newQuestions = filteredQuestions.slice(startIndex, endIndex);

    setTimeout(() => {
      setRenderQuestions((prevQuestions) => [
        ...prevQuestions,
        ...newQuestions,
      ]);
    }, 500);
  };

  const serfilQuestions = searchQuery
    ? renderQuestions.filter((q) =>
        q.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : renderQuestions;

  const searchedQuestions = serfilQuestions.filter((q) =>
    q.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const serQuestions = () => {
    const nextPage = renderQuestions.length / itemsPerPage + 1;
    const startIndex = (nextPage - 1) * itemsPerPage;
    const endIndex = Math.min(
      startIndex + itemsPerPage,
      searchedQuestions.length
    );
    const newQuestions = searchedQuestions.slice(startIndex, endIndex);

    setTimeout(() => {
      setRenderQuestions((prevQuestions) => [
        ...prevQuestions,
        ...newQuestions,
      ]);
    }, 500);
  };

  const hasMoreQuestions = renderQuestions.length < filteredQuestions.length;
  const serMoreQuestions = renderQuestions.length < searchedQuestions.length;

  return (
    <div>
      <QuestionRoomWrapper>
        {/* FilterTags, SearchInput, WriteQuestionButton */}
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

        <div style={{ display: "flex", alignItems: "center" }}>
          <SearchInput
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions..."
          />
          <WriteQuestionButton
            onClick={() => {
              onClickHeader("/QnaWrite");
            }}
          >
            Write a Question
          </WriteQuestionButton>
        </div>

        <div>
          {searchQuery ? (
            <InfiniteScroll
              pageStart={0}
              loadMore={serQuestions}
              hasMore={serMoreQuestions}
              useWindow={false}
            >
              {renderQuestions.map((question) => (
                <QuestionCard key={question.id}>
                  <h3>{question.title}</h3>
                  {/* <p>{question.body}</p>
                  <p>사용자: {question.userId}</p> */}
                </QuestionCard>
              ))}
            </InfiniteScroll>
          ) : (
            <InfiniteScroll
              pageStart={0}
              loadMore={loadMoreQuestions}
              hasMore={
                hasMoreQuestions && renderQuestions.length < itemsPerPage * page
              }
              useWindow={false}
            >
              {renderQuestions.map((question) => (
                <QuestionCard key={question.id}>
                  <h3>{question.title}</h3>
                  {/* <p>{question.body}</p>
                  <p>Author: {question.userId}</p> */}
                </QuestionCard>
              ))}
            </InfiniteScroll>
          )}
        </div>

        {hasMoreQuestions && (
          <button onClick={loadMoreQuestions}>Load More</button>
        )}
      </QuestionRoomWrapper>
    </div>
  );
};

export default QuestionRoom;
