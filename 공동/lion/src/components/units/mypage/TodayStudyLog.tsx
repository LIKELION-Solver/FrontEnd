const TodayStudyLog = () => {
  const StudyLogs = [
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
  return (
    <>
      <h3>오늘 공부 시간</h3>
      <ul>
        {StudyLogs.map((StudyLog) => (
          <li key={StudyLog.id}>
            {StudyLog.hour} 시간 {StudyLog.min} 분
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodayStudyLog;
