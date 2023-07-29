// import React, { useState } from "react";
// import styled from "@emotion/styled";
// import exampleData from "./exampleData";
// import type { Question } from "./exampleData";
// import InfiniteScroll from "react-infinite-scroller";

// const QuestionRoomWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-top: 20px;
// `;

// const FilterTags = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 10px;
//   margin-bottom: 10px;
//   justify-content: center; /* Align tags in the center */
// `;

// const TagButton = styled.button<{ active: boolean }>`
//   background-color: ${(props) => (props.active ? "#007bff" : "#f0f0f0")};
//   color: ${(props) => (props.active ? "#fff" : "#000")};
//   border: none;
//   border-radius: 5px;
//   padding: 5px 10px;
//   cursor: pointer;
// `;

// const QuestionCard = styled.div`
//   background-color: #fff;
//   border: 1px solid #e0e0e0;
//   border-radius: 10px;
//   padding: 20px;
//   margin-bottom: 20px;
// `;

// const QuestionRoom = (): JSX.Element => {
//   const [selectedTag, setSelectedTag] = useState<string | null>(null);

//   const questions: Question[] = exampleData;
//   const itemsPerPage = 10;

//   const uniqueTags = Array.from(new Set(questions.flatMap((q) => q.tags)));

//   const handleTagClick = (tag: string) => {
//     setSelectedTag((prevTag) => (prevTag === tag ? null : tag));
//   };

//   const filteredQuestions = selectedTag
//     ? questions.filter((q) => q.tags.includes(selectedTag))
//     : questions;

//   const renderQuestions = filteredQuestions.slice(0, itemsPerPage);
//   const hasMoreQuestions = filteredQuestions.length > itemsPerPage;

//   const loadMoreQuestions = () => {
//     const nextPage = renderQuestions.length / itemsPerPage + 1;
//     const startIndex = (nextPage - 1) * itemsPerPage;
//     const endIndex = Math.min(
//       startIndex + itemsPerPage,
//       filteredQuestions.length
//     );
//     const newQuestions = filteredQuestions.slice(startIndex, endIndex);

//     setTimeout(() => {
//       setRenderQuestions((prevQuestions) => [
//         ...prevQuestions,
//         ...newQuestions,
//       ]);
//     }, 500);
//   };

//   return (
//     <QuestionRoomWrapper>
//       <FilterTags>
//         {uniqueTags.map((tag) => (
//           <TagButton
//             key={tag}
//             active={selectedTag === tag}
//             onClick={() => handleTagClick(tag)}
//           >
//             #{tag}
//           </TagButton>
//         ))}
//       </FilterTags>
//       <InfiniteScroll
//         pageStart={0}
//         loadMore={loadMoreQuestions}
//         hasMore={hasMoreQuestions}
//         useWindow={false}
//       >
//         {renderQuestions.map((question) => (
//           <QuestionCard key={question.id}>
//             <h3>{question.title}</h3>
//             <p>{question.content}</p>
//             <p>Author: {question.author}</p>
//             <p>Tags: {question.tags.join(", ")}</p>
//           </QuestionCard>
//         ))}
//       </InfiniteScroll>
//     </QuestionRoomWrapper>
//   );
// };

// export default QuestionRoom;

import React, { useState } from "react";
import styled from "@emotion/styled";
import exampleData from "./exampleData";
import type { Question } from "./exampleData";
import InfiniteScroll from "react-infinite-scroller";

const QuestionRoomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
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

const QuestionCard = styled.div`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
`;

const QuestionRoom = (): JSX.Element => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [renderQuestions, setRenderQuestions] = useState<Question[]>([]);
  const itemsPerPage = 10;

  const questions: Question[] = exampleData;

  const uniqueTags = Array.from(new Set(questions.flatMap((q) => q.tags)));

  const handleTagClick = (tag: string) => {
    setSelectedTag((prevTag) => (prevTag === tag ? null : tag));
  };

  const filteredQuestions = selectedTag
    ? questions.filter((q) => q.tags.includes(selectedTag))
    : questions;

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

  const hasMoreQuestions = renderQuestions.length < filteredQuestions.length;

  return (
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
  );
};

export default QuestionRoom;
