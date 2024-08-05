/* eslint-disable react/prop-types */
import styled from "styled-components";
import LessonListItem from "./LessonListItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px 0px;
  width: 100%;
`;

const Title = styled.div`
  margin-left: 16px;
  font-size: 1.5rem;
`;

function LessonListView({ lessons, openModal }) {
  return (
    <Container>
      <Title>이전 레슨</Title>
      {lessons.map((lesson, index) => {
        return (
          <LessonListItem key={index} lesson={lesson} openModal={openModal} />
        );
      })}
    </Container>
  );
}

export default LessonListView;
