import styled from "styled-components";

const Base = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  min-height: 1200px;
`;

const PageBase = styled.div`
  width: 50%;
  height: 100%;

  background-color: white;

  min-width: 900px;
  /* overflow: auto; */
`;

export default function Container({ children }) {
  return (
    <Base>
      <PageBase>{children}</PageBase>
    </Base>
  );
}
