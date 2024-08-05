import styled from "styled-components";

import image from "/assets/AppTitle.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 30vh;
  margin-left: 8px;
`;

const TitleImage = styled.img`
  width: fit-content;
  height: fit-content;
  object-fit: none;
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
