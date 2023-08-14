import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FilterTags,
  QuestionCard,
  QuestionRoomWrapper,
  SearchInput,
  TagButton,
  WriteQuestionButton,
  PageContainer,
  TextContainer,
  QuestionCardWrapper,
  ImageContainer,
  PageButton,
  BigContain,
  PaginationBox,
} from "./QuestionRoomCSS";
import { useRouter } from "next/router";
import { Question } from "./exampleData";
import Link from "next/link";
import Pagination from 'react-js-pagination'
const QuestionRoom = (): JSX.Element => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [allQuestions, setAllQuestions] = useState<Question[]>([]); // 모든 질문 데이터 저장
  const [renderQuestions, setRenderQuestions] = useState<Question[]>([]); // 필터링된 질문 데이터 저장
  const [page, setPage] = useState<number>(1);

  const itemsPerPage = 10; // 한 페이지에 보여줄 항목수
  const [currentPage, setCurrentPage] = useState<number>(1); // 현재 페이지 번호

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const fetchQuestions = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const newQuestions = response.data.map((question: Question) => ({
        userId: question.userId,
        id: question.id,
        title: question.title,
        body: question.body,
        thumbnailUrl: question.thumbnailUrl,
      }));
      setAllQuestions((prevQuestions) => [...prevQuestions, ...newQuestions]);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [page]);

  const uniqueTags = Array.from(new Set(allQuestions.flatMap((q) => q.tags)));
  const totalPages = Math.ceil(renderQuestions.length / itemsPerPage);
  const router = useRouter();
  const onClickHeader = (path: string): void => {
    void router.push(path);
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag((prevTag) => (prevTag === tag ? null : tag));
  };

  useEffect(() => {
    // 검색 쿼리와 선택된 태그에 따라 필터링하여 렌더할 질문 데이터 업데이트
    let filtered = allQuestions;

    if (selectedTag) {
      filtered = filtered.filter((q) => q.tags.includes(selectedTag));
    }

    if (searchQuery) {
      filtered = filtered.filter((q) =>
        q.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setRenderQuestions(filtered);
  }, [searchQuery, selectedTag, allQuestions]);

  
  // 현재 페이지에 해당하는 데이터 계산
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRenderQuestions = renderQuestions.slice(startIndex, endIndex);

  const handlePostClick = (postId: number): void => {
    void router.push(`/QuestionRoom/QuestionItem/${postId}`);
  };

  return (
    <div>
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
        {currentRenderQuestions.map((question) => (
          <QuestionCard
            key={question.id}
            onClick={() => handlePostClick(question.id)}
          >
            <TextContainer>
              <h3>{question.title}</h3>
              <p>{question.body}</p>
              <p>Author: {question.id}</p>
            </TextContainer>
            <ImageContainer>
              <img
                src={question.thumbnailUrl}
                alt="Thumbnail"
                width="100" // 이미지 크기 조절
                height="100"
                loading="lazy" // 지연 로딩 설정
              />
            </ImageContainer>
          </QuestionCard>
        ))}
      </div>

      <PaginationBox>
        <Pagination
        //현재 보고 있는 페이지
          activePage={currentPage}
          //한 페이지에 출력할 아이템 수
          itemsCountPerPage={10}
          //총 아이템 수
          totalItemsCount={renderQuestions.length}
          //표시할 페이지 수
          pageRangeDisplayed={10}
          //함수
          onChange={handlePageChange}>
        </Pagination>
      </PaginationBox>
    </div>
  );
};

export default QuestionRoom;
