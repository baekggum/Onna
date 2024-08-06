// Holiday.jsx
import React, { createContext, useState, useContext } from "react";
import "./Details.css";

// WeekdayContext 생성 및 제공
const WeekdayContext = createContext();

export const WeekdayProvider = ({ children }) => {
  const [selectedDays, setSelectedDays] = useState([]);

  return (
    <WeekdayContext.Provider value={{ selectedDays, setSelectedDays }}>
      {children}
    </WeekdayContext.Provider>
  );
};

// WeekdaySelector 컴포넌트
export const WeekdaySelector = () => {
  const daysOfWeek = ["월", "화", "수", "목", "금", "토", "일"];
  const { selectedDays, setSelectedDays } = useContext(WeekdayContext);

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
};
