import styled from "styled-components";
import Back from "/assets/BackW.svg";
import Search from "/assets/SearchW.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #0a8ed9;
`;

const IconBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Icon = styled.img`
  padding: 20px;
  cursor: pointer;
  color: white;
`;

const SportsCategoryName = styled.div`
  // display: flex;
  // margin-left: 10%;
`;

export default function HeaderBar({ category }) {
  // const location = useLocation();
  // const data = location.state;
  const navigate = useNavigate();

  return (
    <Header>
      <IconBar>
        <Icon src={Back} alt="Back" onClick={() => navigate(-1)} />
        <Icon src={Search} alt="Search" />
      </IconBar>
      <SportsCategoryName>
        {/* <img src={SoccerBall} width='50px'></img> */}

        {category ? (
          <p
            style={{
              color: "white",
              fontSize: "30pt",
              textAlign: "center",
              margin: "0",
              paddingBottom: "30px",
            }}
          >
            {category}
          </p>
        ) : (
          <p
            style={{
              color: "white",
              fontSize: "25pt",
              margin: "0 0 0 10%",
              paddingBottom: "30px",
            }}
          >
            스포츠
          </p>
        )}
      </SportsCategoryName>
    </Header>
  );
}
