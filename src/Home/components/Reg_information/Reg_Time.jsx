import { useState, useEffect } from "react";
import "./Details.css";

function TimeCalculator() {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [totalMinutes, setTotalMinutes] = useState(null);

  const calculateTotalMinutes = () => {
    if (!startTime || !endTime) return;

    const start = new Date(`1970-01-01T${startTime}:00`);
    const end = new Date(`1970-01-01T${endTime}:00`);

    const diff = (end - start) / (1000 * 60); // 차이를 분 단위로 변환

    setTotalMinutes(diff >= 0 ? diff : 1440 + diff); // 24시간을 넘어가는 경우를 고려
  };

  useEffect(() => {
    calculateTotalMinutes();
  }, [startTime, endTime]); // startTime 또는 endTime이 변경될 때마다 실행

  return (
    <div className="timecontainer">
      <div className="time-inputs">
        <label className="label">시작</label>
        <div className="input-container">
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="timeinput"
          />
        </div>
        <label className="label">종료</label>
        <div className="input-container">
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="timeinput"
          />
        </div>
      </div>
      {totalMinutes !== null && (
        <div className="result">강의 시간: {totalMinutes} 분</div>
      )}
    </div>
  );
}

export default TimeCalculator;
