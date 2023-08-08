// components/mypage/GrowthLogSection.tsx
import React from "react";

const GrowthLogSection = (): JSX.Element => {
  // Dummy data for growth log or annual learning
  const growthLogs = [
    {
      date: "2023-01-15",
      activity: "Completed React course",
      category: "React",
    },
    {
      date: "2023-02-10",
      activity: "Started learning Node.js",
      category: "Node.js",
    },
    // Add more growth log entries here
  ];

  return (
    <div>
      <h2>성장기록</h2>
      <ul>
        {growthLogs.map((log, index) => (
          <li key={index}>
            <strong>Date:</strong> {log.date} <br />
            <strong>Activity:</strong> {log.activity} <br />
            <strong>Category:</strong> {log.category} <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GrowthLogSection;
