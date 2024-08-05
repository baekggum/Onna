/* eslint-disable react/prop-types */
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  margin-bottom: 64px;
  border: 1px solid rgba(0, 0, 0, 15%);
  border-radius: 30px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const LessonImage = styled.img`
  width: 50%;
  height: 100%;
  border-radius: 30px;
  object-fit: cover;
`;

const LessonInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  padding: 32px;
`;

const Title = styled.div`
  font-size: 1.25rem;
`;

const Description = styled.div`
  margin: auto 0;
`;

const Content = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  padding: 8px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 20%);
  font-size: 0.875rem;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  white-space: pre-wrap;

  &:last-child {
    border: none;
  }
`;

function LessonCard({ lesson, openModal }) {
  const { title, image, startDate, place, contact } = lesson;
  const formatter = new Intl.DateTimeFormat("kr");
  const onClick = () => {
    openModal(lesson);
  };

  return (
    <Container onClick={onClick}>
      <LessonImage src={image} />
      <LessonInfo>
        <Title>{title}</Title>
        <Description>
          <Content>{`진행예정\n${formatter.format(startDate)}`}</Content>
          <Content>{`장소\n${place}`}</Content>
          <Content>{`연락처\n${contact}`}</Content>
        </Description>
      </LessonInfo>
    </Container>
  );
}

export default LessonCard;
