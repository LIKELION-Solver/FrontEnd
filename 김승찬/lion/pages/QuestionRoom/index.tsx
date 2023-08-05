// 업데이트
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import axios from "axios";
import {
  FilterTags,
  QuestionCard,
  QuestionRoomWrapper,
  SearchInput,
  TagButton,
  WriteQuestionButton,
  PageContainer,
} from "./QuestionRoomCSS";
import { useRouter } from "next/router";
import { Question } from "./exampleData";

const QuestionRoom = (): JSX.Element => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [renderQuestions, setRenderQuestions] = useState<Question[]>([]);
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 100;

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${itemsPerPage}`
      );
      const newQuestions = response.data.map((question: Question) => ({
        userId: question.userId,
        id: question.id,
        title: question.title,
        body: question.body,
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
    <PageContainer>
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
                  <p>{question.body}</p>
                  <p>사용자: {question.userId}</p>
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
                  <p>{question.body}</p>
                  <p>Author: {question.userId}</p>
                </QuestionCard>
              ))}
            </InfiniteScroll>
          )}
        </div>

        {/* {hasMoreQuestions && (
          <button onClick={loadMoreQuestions}>Load More</button>
        )} */}
      </QuestionRoomWrapper>
    </PageContainer>
  );
};

export default QuestionRoom;
