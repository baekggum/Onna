import styled from "styled-components";

const Base = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 256px);

  margin-top: 20px;
`;

const InBase = styled.div`
  width: 95%;
`;
export default function DetailBase({ children }) {
  return (
    <Base>
      <InBase>{children}</InBase>
    </Base>
  );
}
