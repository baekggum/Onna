/* eslint-disable react/prop-types */
import styled from "styled-components";

const Container = styled.button`
  width: 100%;
  height: 48px;
  font-size: 1rem;
  color: white;
  background: #0a8ed9;
  border: none;
  border-radius: 6px;
  ${({ styles }) => styles}
`;

function Button({ onClick, styles, children }) {
  return (
    <Container onClick={onClick} styles={styles} tabIndex="0">
      {children}
    </Container>
  );
}

export default Button;
