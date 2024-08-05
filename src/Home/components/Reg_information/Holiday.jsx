import { useState } from "react";
import "./Details.css";

export default function WeekdaySelector() {
  const daysOfWeek = ["월", "화", "수", "목", "금", "토", "일"];
  const [selectedDays, setSelectedDays] = useState([]);

  const handleCheckboxChange = (day) => {
    setSelectedDays((prevSelectedDays) =>
      prevSelectedDays.includes(day)
        ? prevSelectedDays.filter((selectedDay) => selectedDay !== day)
        : [...prevSelectedDays, day]
    );
  };

  return (
    <div className="holidayCheck">
      <h3>휴무일</h3>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {daysOfWeek.map((day) => (
          <label key={day}>
            <span style={{ borderRadius: "50%", padding: "5px" }}>{day}</span>
            <input
              className="custom-checkbox"
              type="checkbox"
              checked={selectedDays.includes(day)}
              onChange={() => handleCheckboxChange(day)}
            />
          </label>
        ))}
      </div>
    </div>
  );
}
