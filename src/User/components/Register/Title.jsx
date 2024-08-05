/* eslint-disable react/prop-types */
import styled from "styled-components";

const Container = styled.div`
  margin-left: 16px;
  margin-bottom: 32px;
  font-size: 2rem;
  white-space: pre;
`;

function Title({ children }) {
  return <Container>{children}</Container>;
}

export default Title;
