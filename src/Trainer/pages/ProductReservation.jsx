import { useLocation } from "react-router-dom";
import BaseComp from "../components/ProductBase";
import ReservationCalendar from "../components/ProductReservation/ProductCalender";
import HeaderBar from "../components/HeaderBar";
import DetailBase from "../components/ProductDetail/DetailBase";
import ReservationMenu from "../components/ProductReservation/ProductMenu";
import Reservation from "../components/ProductReservation/Reservation";
import { useState } from "react";

export default function ProductReservation() {
  const location = useLocation();
  const data = location.state; // 전달된 데이터를 가져옴
  const [dateCount, setDateCount] = useState(0); // 선택된 날짜 수 상태 추가

  const handleDateCountChange = (count) => {
    setDateCount(count); // 선택된 날짜 수 업데이트
  };
  return (
    <BaseComp>
      <HeaderBar />
      <DetailBase>
        <ReservationMenu data={data} />
        <ReservationCalendar onDateCountChange={handleDateCountChange} />
        <Reservation data={{ ...data, dateCount }} />
      </DetailBase>
    </BaseComp>
  );
}
