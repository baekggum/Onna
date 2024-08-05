import styled from "styled-components";
import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

function LoginForm() {
  return (
    <Container>
      <LoginInput
        name="uid"
        type="text"
        placeholder="아이디"
        tabIndex="1"
        onChange={() => {}}
      />
      <LoginInput
        name="password"
        type="password"
        placeholder="비밀번호"
        tabIndex="2"
        onChange={() => {}}
      />
      <LoginButton onClick={() => {}}>로그인</LoginButton>
    </Container>
  );
}

export default LoginForm;
