/* eslint-disable react/prop-types */
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 0;
`;

const ProfileImage = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 8px;
  border-radius: 8px;
  object-fit: contain;
`;

const Info = styled.div`
  font-size: 1rem;
`;

const periodToString = (start, end) => {
  let startHour = start.getHours();
  let startMinute = start.getMinutes();
  let endHour = end.getHours();
  let endMinute = end.getMinutes();
  if (startMinute < 10) startMinute = "0" + startMinute;
  if (endMinute < 10) endMinute = "0" + endMinute;

  return `${startHour}:${startMinute}~${endHour}:${endMinute}`;
};

function AppointmentListItem({ appointment }) {
  const {
    user: { name, image },
    startTime,
    endTime,
  } = appointment;

  return (
    <Container>
      <ProfileImage src={image} />
      <Info>{`${name}: ${periodToString(startTime, endTime)}`}</Info>
    </Container>
  );
}

export default AppointmentListItem;
