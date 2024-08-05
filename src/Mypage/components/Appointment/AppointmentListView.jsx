/* eslint-disable react/prop-types */
import styled from "styled-components";
import AppointmentListItem from "./AppointmentListItem";

const Container = styled.div`
  width: 100%;
  padding: 16px;
`;

const Today = styled.div`
  margin-bottom: 16px;
  font-size: 1.25rem;
`;

function AppointmentListView({ appointments }) {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  return (
    <Container>
      <Today>{`${year}년 ${month}월 ${date}일`}</Today>
      <ol>
        {appointments.map((appointment, index) => {
          return (
            <li style={{ listStyle: "none" }} key={index}>
              <AppointmentListItem appointment={appointment} />
            </li>
          );
        })}
      </ol>
    </Container>
  );
}

export default AppointmentListView;
