import Container from "../components/MainPage/Container";
import Head from "../components/Reg_information/Head";
import Details from "../components/Reg_information/Details";
import Reg_Time from "../components/Reg_information/Reg_Time";
import "./RegInfo.css";
import styled from "styled-components";
import { DetailsProvider } from "../components/Reg_information/Details";
import {
  WeekdayProvider,
  WeekdaySelector,
} from "../components/Reg_information/Holiday";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ContentWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 120px; /* .BNbutton의 높이만큼 여백 설정 */
`;

export default function Reg_info() {
  const navigate = useNavigate();
  return (
    <Container>
      <ContentWrapper>
        <Head />
        <DetailsProvider>
          <Details />
        </DetailsProvider>
        <WeekdayProvider>
          <WeekdaySelector />
        </WeekdayProvider>
        <Reg_Time />
      </ContentWrapper>
      <div className="BNbutton">
        <button className="Backbutton" onClick={() => navigate(-1)}>
          뒤로
        </button>
        <Link to="/fee">
          <button className="Nextbutton">다음</button>
        </Link>
      </div>
    </Container>
  );
}
