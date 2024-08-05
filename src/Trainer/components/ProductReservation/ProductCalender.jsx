import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import moment from "moment";

const StyledCalendar = styled(Calendar)`
  width: 100%;
  border: none;
  border-bottom: 1px solid #d9d9d9;

  .react-calendar__tile {
    padding: 30px 10px;
  }

  &.react-calendar__tile--active {
    background-color: orange;
  }

  &.react-calendar__tile--now {
    border: 2px solid green;
  }
`;

const SelectTime = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5열로 설정 */
  grid-template-rows: repeat(4, 1fr); /* 4행으로 설정 */
  width: 100%;
  height: 250px;
`;

const TimeSlot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${({ selected }) =>
    selected ? "lightblue" : "white"}; /* 선택된 슬롯 색상 */

  &:hover {
    background-color: lightgray; /* 마우스 오버 시 배경색 변경 */
  }
`;

export default function ReservationCalendar({ onDateCountChange }) {
  const [value, setValue] = useState(new Date());
  const [selectedTimes, setSelectedTimes] = useState([]);

  useEffect(() => {
    const formattedDate = moment(value).format("YYYY-MM-DD");
    console.log(formattedDate); // YYYY-MM-DD 형식으로 출력
    console.log("선택된 시간:", selectedTimes); // 선택된 시간 출력
  }, [value, selectedTimes]);

  useEffect(() => {
    // 선택된 날짜 수를 부모 컴포넌트에 전달
    onDateCountChange(selectedTimes.length);
  }, [selectedTimes, onDateCountChange]);

  const onChange = (date) => {
    setValue(date); // 선택된 날짜를 상태에 저장
    setSelectedTimes([]); // 날짜가 변경되면 선택된 시간 초기화
  };

  const toggleTimeSlot = (time) => {
    setSelectedTimes((prev) => {
      if (prev.includes(time)) {
        return prev.filter((t) => t !== time); // 이미 선택된 시간은 해제
      } else {
        return [...prev, time]; // 새로 선택
      }
    });
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let i = 9; i < 18; i++) {
      slots.push(moment().hour(i).minute(0).format("HH:mm")); // 정시
      slots.push(moment().hour(i).minute(30).format("HH:mm")); // 30분
    }
    return slots;
  };

  return (
    <div>
      <StyledCalendar
        onChange={onChange}
        value={value}
        calendarType="gregory"
        view="month"
        prev2Label={null}
        next2Label={null}
        showNeighboringMonth={false}
      />
      <SelectTime>
        {generateTimeSlots().map((time) => (
          <TimeSlot
            key={time}
            selected={selectedTimes.includes(time)}
            onClick={() => toggleTimeSlot(time)}
          >
            {time}
          </TimeSlot>
        ))}
      </SelectTime>
    </div>
  );
}
