/* eslint-disable react/prop-types */
import styled from "styled-components";

const Container = styled.input`
  width: 100%;
  height: 72px;
  margin-bottom: 4px;
  padding: 20px;
  border: 1px solid #0a8ed9;
  border-radius: 10px;
  background-color: white;
  font-size: 1.5rem;
  outline: none;

  &:hover {
    border: 2px solid #077cc0;
  }

  &::placeholder {
    font-size: 1.25rem;
  }
`;

function LoginInput({ name, type, placeholder, tabIndex, onChange }) {
  return (
    <Container
      name={name}
      type={type}
      placeholder={placeholder}
      tabIndex={tabIndex}
      onChange={onChange}
    ></Container>
  );
}

export default LoginInput;
