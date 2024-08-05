/* eslint-disable react/prop-types */
import styled from "styled-components";

const Container = styled.li`
  display: flex;
  width: 100%;
  height: 96px;
  cursor: pointer;
`;

const Banner = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 10px;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 24px;
`;

const Title = styled.div`
  font-size: 1.125rem;
  text-overflow: ellipsis;
`;

const Content = styled.div`
  font-size: 0.875rem;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

function LessonListItem({ lesson, openModal }) {
  const { title, image, trainer, startDate } = lesson;
  const formatter = new Intl.DateTimeFormat("kr");
  const onClick = () => {
    openModal(lesson);
  };

  return (
    <Container onClick={onClick}>
      <Banner src={image} />
      <Info>
        <Title>{title}</Title>
        <Content>{trainer}</Content>
        <Content>{formatter.format(startDate)}</Content>
      </Info>
    </Container>
  );
}

export default LessonListItem;
