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
<<<<<<< Updated upstream
  PageContainer,
} from "./QuestionRoomCSS";
import { useRouter } from "next/router";
import { Question } from "./exampleData";
=======
  TextContainer,
  ImageContainer,
  PaginationBox,
} from "../../src/builde/QuestionRoomCSS";
import { useRouter } from "next/router";
import Pagination from "react-js-pagination";
>>>>>>> Stashed changes

const QuestionRoom = (): JSX.Element => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
<<<<<<< Updated upstream
  const [renderQuestions, setRenderQuestions] = useState<Question[]>([]);
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 100;
=======
  const [allQuestions, setAllQuestions] = useState([]); // 모든 질문 데이터 저장
  const [renderQuestions, setRenderQuestions] = useState([]); // 필터링된 질문 데이터 저장
  const itemsPerPage = 10; // 한 페이지에 보여줄 항목수
  const [currentPage, setCurrentPage] = useState<number>(1); // 현재 페이지 번호
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
  const uniqueTags = Array.from(
    new Set(renderQuestions.flatMap((q) => q.tags))
=======
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

        setRenderQuestions(QuestionList);
        setAllQuestions(QuestionList);
      }
    } catch (error) {
      console.error("Error fetching study groups:", error);
    }
  };

  const uniqueTags = Array.from(
    new Set(allQuestions.flatMap((q: any) => q.tags))
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
    setTimeout(() => {
      setRenderQuestions((prevQuestions) => [
        ...prevQuestions,
        ...newQuestions,
      ]);
    }, 500);
=======
    setRenderQuestions(filtered);
  }, [searchQuery, selectedTag, allQuestions]);

  // 현재 페이지에 해당하는 데이터 계산
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRenderStudy = renderQuestions.slice(startIndex, endIndex);
  const handlePostClick = (postId: number): void => {
    void router.push(`/QuestionRoom/QuestionItem?postId=${postId}`);
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
        {/* {hasMoreQuestions && (
          <button onClick={loadMoreQuestions}>Load More</button>
        )} */}
      </QuestionRoomWrapper>
    </PageContainer>
=======
      <div>
        {currentRenderStudy.map((question) => (
          <QuestionCard
            key={question._id}
            onClick={() => handlePostClick(question._id)}
          >
            <TextContainer>
              <h3>{question.remarks}</h3>
              <p>{question.contents}</p>
              <br />

              <p>작성자: {question.name}</p>

              <WriteQuestionButton onClick={() => deleteWrite(question._id)}>
                게시글 삭제
              </WriteQuestionButton>
              <WriteQuestionButton>댓글달기</WriteQuestionButton>
            </TextContainer>
            <ImageContainer>
              <img
                src={question.images}
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
          onChange={handlePageChange}
        ></Pagination>
      </PaginationBox>
    </div>
>>>>>>> Stashed changes
  );
};

export default QuestionRoom;
