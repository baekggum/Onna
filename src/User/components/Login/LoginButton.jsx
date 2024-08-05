/* eslint-disable react/prop-types */
import styled from "styled-components";

const Container = styled.button`
  width: 100%;
  height: 72px;
  margin-top: 16px;
  border: 1px solid #0a8ed9;
  border-radius: 10px;
  font-size: 1.25rem;
  background-color: white;
  color: #0a8ed9;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  outline: none;

  &:hover {
    background-color: #f5f5f5;
  }
`;

function LoginButton({ onClick, children }) {
  return <Container onClick={onClick}>{children}</Container>;
}

export default LoginButton;
