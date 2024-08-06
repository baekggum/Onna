import { useNavigate } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 8px;
  margin-top: 64px;
`;

const BackButton = styled.button`
  width: 180px;
  height: 100px;
  font-size: 1.5rem;
  color: black;
  text-decoration: underline;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
`;

const NextButton = styled.button`
  width: 180px;
  height: 100px;
  font-size: 1.5rem;
  color: white;
  background-color: #0a8ed9;
  border: none;
  border-radius: 10px;
`;

function Footer({ hideBack, hideNext, onNext }) {
  const navigate = useNavigate();

  return (
    <Container>
      <BackButton
        onClick={() => navigate(-1)}
        style={{ visibility: hideBack ? "hidden" : "visible" }}
      >
        뒤로
      </BackButton>
      <NextButton
        onClick={() => onNext(navigate)}
        style={{ visibility: hideNext ? "hidden" : "visible" }}
      >
        다음
      </NextButton>
    </Container>
  );
}

export default Footer;
