import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  margin-top: 16px;
`;

const Footer = styled.div`
  color: white;
  font-size: 1rem;
  white-space: pre;
`;

function LoginFooter() {
  return (
    <Container>
      <Footer>
        {"계정이 없으신가요? "}
        <Link to="/register">가입하기</Link>
      </Footer>
    </Container>
  );
}

export default LoginFooter;
