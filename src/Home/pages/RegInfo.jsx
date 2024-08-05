import Container from "../components/MainPage/Container";
import Head from "../components/Reg_information/Head";
import Details from "../components/Reg_information/Details";
import Holiday from "../components/Reg_information/Holiday";
import Reg_Time from "../components/Reg_information/Reg_Time";
import "./RegInfo.css";
import styled from "styled-components";

const ContentWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 120px; /* .BNbutton의 높이만큼 여백 설정 */
`;

export default function Reg_info() {
  return (
    <Container>
      <ContentWrapper>
        <Head />
        <Details />
        <Holiday />
        <Reg_Time />
      </ContentWrapper>
      <div className="BNbutton">
        <button className="Backbutton">뒤로</button>
        <button className="Nextbutton">다음</button>
      </div>
    </Container>
  );
}
