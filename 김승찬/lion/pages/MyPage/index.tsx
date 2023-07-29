import React from "react";
import styled from "@emotion/styled";
import GrowthLogSection from "../../src/components/units/mypage/GrowthLogSection";

const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 100px;
  align-items: center;
`;

const SectionContainer = styled.div`
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
`;

const ChallengeSection = styled(SectionContainer)`
  background-color: #e8f5e9; /* Green background for Challenges Section */
`;

const StudyTimeSection = styled(SectionContainer)`
  background-color: #e3f2fd; /* Blue background for Study Times Section */
`;

const MyPage = (): JSX.Element => {
  // Dummy user information (since there's no backend for now)
  const user = {
    name: "John Doe",
    age: 25,
    // Add more user information here
  };

  // Replace these dummy data with your actual data fetched from the backend or state management
  const challenges = [
    { id: 1, title: "Challenge 1" },
    { id: 2, title: "Challenge 2" },
    // Add more challenges here
  ];

  const studyTimes = [
    { id: 1, date: "2023-07-20", time: "2 hours" },
    { id: 2, date: "2023-07-19", time: "1.5 hours" },
    // Add more study times here
  ];

  return (
    <MyPageWrapper>
      {/* Render the GrowthLogSection component */}
      <ChallengeSection>
        <GrowthLogSection />
      </ChallengeSection>

      {/* Challenges Section */}
      <ChallengeSection>
        <h3>도전과제</h3>
        <ul>
          {challenges.map((challenge) => (
            <li key={challenge.id}>{challenge.title}</li>
          ))}
        </ul>
      </ChallengeSection>

      {/* Study Times Section */}
      <StudyTimeSection>
        <h3>공부시간</h3>
        <ul>
          {studyTimes.map((studyTime) => (
            <li key={studyTime.id}>
              Date: {studyTime.date}, Time: {studyTime.time}
            </li>
          ))}
        </ul>
      </StudyTimeSection>
    </MyPageWrapper>
  );
};

export default MyPage;
