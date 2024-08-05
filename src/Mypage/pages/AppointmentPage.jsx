import { useState } from "react";

import Page from "./Page";
import MyCalendar from "../components/Appointment/MyCalendar";

import profile from "/profile.png";
import AppointmentListView from "../components/Appointment/MyCalendar";

function AppointmentPage() {
  const appointments = [
    {
      user: {
        name: "홍길동",
        image: profile,
      },
      startTime: new Date(),
      endTime: new Date(),
    },
    {
      user: {
        name: "홍길동",
        image: profile,
      },
      startTime: new Date(),
      endTime: new Date(),
    },
    {
      user: {
        name: "홍길동",
        image: profile,
      },
      startTime: new Date(),
      endTime: new Date(),
    },
    {
      user: {
        name: "홍길동",
        image: profile,
      },
      startTime: new Date(),
      endTime: new Date(),
    },
    {
      user: {
        name: "홍길동",
        image: profile,
      },
      startTime: new Date(),
      endTime: new Date(),
    },
    {
      user: {
        name: "홍길동",
        image: profile,
      },
      startTime: new Date(),
      endTime: new Date(),
    },
    {
      user: {
        name: "홍길동",
        image: profile,
      },
      startTime: new Date(),
      endTime: new Date(),
    },
  ];

  const [date, onChange] = useState(new Date());

  return (
    <Page title="예약 정보" prev="/profile">
      <MyCalendar date={date} onChange={onChange} />
      <AppointmentListView appointments={appointments} />
    </Page>
  );
}

export default AppointmentPage;
