// // pages/MyPage/index.tsx
// import GrowthLogSection from "../../src/components/units/mypage/GrowthLogSection";
// import {
//   RowContainer,
//   SquareComponent,
//   SquareComponentContainer,
// } from "./MyPageCss";
// import MyPageLayout from "./MyPageLayout";

// const MyPage = (): JSX.Element => {
//   const challenges = [
//     { id: 1, title: "신출귀몰", content: "페이지 3번 이동하기", image: "" },
//     {
//       id: 2,
//       title: "태초마을",
//       content: "회원가입하고 질문방 들어가기",
//       image: "",
//     },
//   ];

//   const studyTimes = [
//     { id: 1, enter: "8월 6일 5시", exit: "8월 7일 7시", hour: "2", min: "12" },
//     { id: 2, enter: "8월 6일 5시", exit: "8월 7일 7시", hour: "1", min: "30" },
//   ];

//   const weeklyStudyLog = [
//     { id: 1, week: "Week 1", hours: "10 hours" },
//     { id: 2, week: "Week 2", hours: "12 hours" },
//   ];

//   return (
//     <MyPageLayout>
//       <SquareComponentContainer>
//         <RowContainer>
//           <SquareComponent>
//             <GrowthLogSection />
//           </SquareComponent>
//           <SquareComponent>
//             <h3>챌린지</h3>
//             <ul>
//               {challenges.map((challenge) => (
//                 <li key={challenge.id}>{challenge.title}</li>
//               ))}
//             </ul>
//           </SquareComponent>
//         </RowContainer>
//         <RowContainer>
//           <SquareComponent>
//             <h3>오늘 지식습득 시간</h3>
//             <ul>
//               {" "}
//               {studyTimes.map((studyTime) => (
//                 <li key={studyTime.id}>
//                   {studyTime.hour}시간 {studyTime.min}분
//                 </li>
//               ))}
//             </ul>
//           </SquareComponent>
//           <SquareComponent>
//             <h3>주간 학습 기록</h3>
//             <ul>
//               {weeklyStudyLog.map((log) => (
//                 <li key={log.id}>
//                   {log.week} - {log.hours}
//                 </li>
//               ))}
//             </ul>
//           </SquareComponent>
//         </RowContainer>
//       </SquareComponentContainer>
//     </MyPageLayout>
//   );
// };

// export default MyPage;

import React, { useState } from "react";
import GrowthLogSection from "../../src/components/units/mypage/GrowthLogSection";
import {
  RowContainer,
  // SquareComponent,
  SquareComponentContainer,
} from "./MyPageCss";
import MyPageLayout from "./MyPageLayout";
import styled from "@emotion/styled";

const SquareComponent = styled.div`
  display: flex;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  /* 위에는 기본 박스 설정 */
  flex-basis: calc(50% - 10px);
  min-height: 150px;
  border-top: 3px solid #5eb6f6;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: box-shadow 0.3s ease;

  ${({ active }) =>
    active &&
    `
    height: 49%;
    width: 46%;
    position: absolute;
    left: 37%;
    top: 18%;
    transform: translate(0%, 0%);
    z-index: 1;
    animation: expandAnimation 0.5s ease-in-out forwards, 
               positionAnimation 0.5s ease-in-out forwards, 
               hideOtherComponents 0.5s ease-in-out forwards,
               adjustOtherComponents 0.5s ease-in-out forwards;
  `}

  @keyframes expandAnimation {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.03) rotate(2deg);
    }
    50% {
      transform: scale(1.05) rotate(-2deg);
    }
    75% {
      transform: scale(1.03) rotate(2deg);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes hideOtherComponents {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0);
    }
  }

  @keyframes adjustOtherComponents {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
const MyPage = (): JSX.Element => {
  const challenges = [
    { id: 1, title: "Newcomers", content: "Go to page 3", image: "" },
    {
      id: 2,
      title: "Taecho Village",
      content: "Register and enter the Q&A room",
      image: "",
    },
  ];

  const studyTimes = [
    {
      id: 1,
      enter: "August 6th 5pm",
      exit: "August 7th 7pm",
      hour: "2",
      min: "12",
    },
    {
      id: 2,
      enter: "August 6th 5pm",
      exit: "August 7th 7pm",
      hour: "1",
      min: "30",
    },
  ];

  const weeklyStudyLog = [
    { id: 1, week: "Week 1", hours: "10 hours" },
    { id: 2, week: "Week 2", hours: "12 hours" },
  ];

  const [selectedComponent, setSelectedComponent] = useState(null);

  return (
    <MyPageLayout>
      <SquareComponentContainer>
        <RowContainer>
          <SquareComponent
            onClick={() =>
              setSelectedComponent(
                selectedComponent === "growthLog" ? null : "growthLog"
              )
            }
            active={selectedComponent === "growthLog"}
          >
            {selectedComponent === "growthLog" ? (
             <h1
             style={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               width: "100%",
               height: "100%",
             }}
           >
             Hello
           </h1>
            ) : (
              <GrowthLogSection />
            )}
          </SquareComponent>
          <SquareComponent
            onClick={() =>
              setSelectedComponent(
                selectedComponent === "challenges" ? null : "challenges"
              )
            }
            active={selectedComponent === "challenges"}
          >
            <h3>Challenge</h3>
            <ul>
              {challenges.map((challenge) => (
                <li key={challenge.id}>{challenge.title}</li>
              ))}
            </ul>
          </SquareComponent>
        </RowContainer>
        <RowContainer>
          <SquareComponent
            onClick={() =>
              setSelectedComponent(
                selectedComponent === "studyTimes" ? null : "studyTimes"
              )
            }
            active={selectedComponent === "studyTimes"}
          >
            <h3>Today's knowledge acquisition time</h3>
            <ul>
              {studyTimes.map((studyTime) => (
                <li key={studyTime.id}>
                  {studyTime.hour} hours {studyTime.min} minutes
                </li>
              ))}
            </ul>
          </SquareComponent>
          <SquareComponent
            onClick={() =>
              setSelectedComponent(
                selectedComponent === "weeklyStudyLog" ? null : "weeklyStudyLog"
              )
            }
            active={selectedComponent === "weeklyStudyLog"}
          >
            <h3>Weekly Learning Log</h3>
            <ul>
              {weeklyStudyLog.map((log) => (
                <li key={log.id}>
                  {log.week} - {log.hours}
                </li>
              ))}
            </ul>
          </SquareComponent>
        </RowContainer>
      </SquareComponentContainer>
    </MyPageLayout>
  );
};

export default MyPage;
