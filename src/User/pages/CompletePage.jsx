import styled from "styled-components";
import Title from "../components/Register/Title";
import Button from "../components/Register/Button";
import { useNavigate } from "react-router-dom";

const Root = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: white;
  overflow-y: auto;
`;

const Container = styled.div`
  width: 50%;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 900px) {
    width: min(450px, 100vw);
  }
`;

const Main = styled.main`
  width: 100%;
  padding: 16px;

  & > * {
    margin-top: 100px;
  }
`;

function CompletePage() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/", { replace: true });
  };

  return (
    <Root>
      <Container>
        <Main>
          <Title>{"축하합니다!\n회원가입이 완료되었어요"}</Title>
          <Button onClick={onClick}>로그인 하러 가기</Button>
        </Main>
      </Container>
    </Root>
  );
}

export default CompletePage;
