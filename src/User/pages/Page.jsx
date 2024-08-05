/* eslint-disable react/prop-types */
import styled from "styled-components";

import Header from "../../Mypage/components/Header";

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
`;

// TODO: 하단에 네비게이션 컴포넌트 넣기
function Page({ title, prev, children }) {
  return (
    <Root>
      <Container>
        <Header prev={prev}>{title}</Header>
        <Main>{children}</Main>
      </Container>
    </Root>
  );
}

export default Page;
