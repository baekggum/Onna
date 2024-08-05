import styled from "styled-components";
import LoginTitle from "../components/Login/LoginTitle";
import LoginForm from "../components/Login/LoginForm";
import LoginFooter from "../components/Login/LoginFooter";

const Root = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #0a8ed9;
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
`;

function LoginPage() {
  return (
    <Root>
      <Container>
        <Main>
          <LoginTitle />
          <LoginForm />
          <LoginFooter />
        </Main>
      </Container>
    </Root>
  );
}

export default LoginPage;
