/* eslint-disable react/prop-types */
import styled from "styled-components";
import Rating from "./Rating";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;

  width: 100%;
  padding: 16px 0;
  border-top: 1px solid rgba(0, 0, 0, 20%);
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

const Title = styled.span`
  font-size: 1.125rem;
`;

const ActionRow = styled.ul`
  display: inline-flex;
  gap: 4px;
`;

const Action = styled.span`
  font-size: 1rem;
  text-decoration: underline;
`;

const Memo = styled.div`
  width: 100%;
  font-size: 0.75rem;
`;

function ReviewListItem({ title, rate, memo, actions }) {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <ActionRow>
          {actions.map(({ name, onClick }, index) => {
            <li key={index}>
              <Action onClick={onClick}>{name}</Action>
            </li>;
          })}
        </ActionRow>
      </Header>
      <Rating rate={rate} />
      <Memo>{memo}</Memo>
    </Container>
  );
}

export default ReviewListItem;
