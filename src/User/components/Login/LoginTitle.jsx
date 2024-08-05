import styled, { keyframes } from "styled-components";

import image from "/assets/AppTitle.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 30vh;
  margin-left: 8px;
  /* transform: translateX(32px); */
`;

const entrance = keyframes`
  from {
    opacity: 0;
    transform: translateX(80px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const TitleImage = styled.img`
  width: fit-content;
  height: fit-content;
  object-fit: none;

  animation: ${entrance} 1s ease-out;
  //TODO: 마운트 시 애니메이션 추가
`;

function LoginTitle() {
  return (
    <Container>
      <TitleImage src={image} />
    </Container>
  );
}

export default LoginTitle;
