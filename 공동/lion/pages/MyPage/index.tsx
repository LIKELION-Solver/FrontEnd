import styled from "@emotion/styled";
import GrowthLogSection from "../../src/components/units/mypage/GrowthLogSection";
import { UserOutlined } from "@ant-design/icons";

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

const LayoutContainer = styled.div`
  display: flex;
`;

const SidebarContainer = styled.div`
  flex: 1;
  margin-right: 50px;
`;
const ContentContainer = styled.div`
  flex: 2.8;
`;

const SidebarTab = styled.div`
  display: flex;
  border-right: 1.5px solid #e0e0e0;
  box-shadow: 2.5px 0 5px 0 rgba(0, 0, 0, 0.1);
  background-color: white;
  width: 230px;
  height: 100%;
  padding-bottom: 100px;
  flex-direction: column;
  align-content: center;
  align-items: center;
  padding: 16px;
  font-weight: 650;
  font-size: 19px;
  a,
  a:visited {
    text-decoration: none;
    color: #292929;
  }
  h3 {
    display: flex;
    margin: 0px;
    font-size: 20px;
  }
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
    { id: 1, date: "2023-07-21", time: "2 hours" },
    { id: 2, date: "2023-07-19", time: "1.5 hours" },
    // Add more study times here
  ];

  return (
    <>
      {/* Render the GrowthLogSection component */}
      <SidebarContainer>
        <SidebarTab>
          <UserOutlined />
          {/* Other content from the sidebar */}
        </SidebarTab>
      </SidebarContainer>
      <ContentContainer>
        {/* Content based on the active tab */}
      </ContentContainer>

      <MyPageWrapper>
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
    </>
  );
};

export default MyPage;

// import React, { useState } from "react";
// import styled from "@emotion/styled";
// import { UserOutlined } from "@ant-design/icons";
// import GrowthLogSection from "../../src/components/units/mypage/GrowthLogSection";

// const Wrapper = styled.div`
//   display: flex;
// `;

// const SidebarContainer = styled.div`
//   flex: 1;
//   background-color: #fff;
//   padding: 20px;
//   box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
// `;

// const ContentContainer = styled.div`
//   flex: 3;
//   background-color: #f0f0f0;
//   padding: 20px;
// `;

// const SidebarTab = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-bottom: 20px;
//   cursor: pointer;

//   &:last-child {
//     margin-bottom: 0;
//   }

//   a,
//   a:visited {
//     text-decoration: none;
//     color: #292929;
//   }

//   .active {
//     color: #5d5fef;
//     text-decoration: underline;
//   }
// `;

// const SectionContainer = styled.div`
//   background-color: #f0f0f0;
//   border-radius: 10px;
//   padding: 20px;
//   margin-top: 20px;
// `;

// const ChallengeSection = styled(SectionContainer)`
//   background-color: #e8f5e9; /* Green background for Challenges Section */
// `;

// const StudyTimeSection = styled(SectionContainer)`
//   background-color: #e3f2fd; /* Blue background for Study Times Section */
// `;

// const MyPage = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   const SidebarTabs = [
//     {
//       title: "Edit Profile",
//       content: <div>Edit profile content goes here</div>,
//     },
//     {
//       title: "Member Withdrawal",
//       content: (
//         <div>
//           <button>Withdraw</button>
//         </div>
//       ),
//     },
//   ];

//   const Challenges = [
//     { id: 1, title: "Challenge 1" },
//     { id: 2, title: "Challenge 2" },
//     // Add more challenges here
//   ];

//   const StudyTimes = [
//     { id: 1, date: "2023-07-21", time: "2 hours" },
//     { id: 2, date: "2023-07-19", time: "1.5 hours" },
//     // Add more study times here
//   ];

//   return (
//     <Wrapper>
//       {/* <SidebarContainer>
//         <UserOutlined />
//         {SidebarTabs.map((tab, index) => (
//           <SidebarTab
//             key={index}
//             className={activeTab === index ? "active" : ""}
//             onClick={() => setActiveTab(index)}
//           >
//             {tab.title}
//           </SidebarTab>
//         ))}
//       </SidebarContainer> */}

//       <ContentContainer>
//         {activeTab === 0 && <GrowthLogSection />}
//         {activeTab === 1 && <ChallengeSection challenges={Challenges} />}
//         {activeTab === 2 && <StudyTimeSection studyTimes={StudyTimes} />}
//       </ContentContainer>
//     </Wrapper>
//   );
// };

// export default MyPage;
