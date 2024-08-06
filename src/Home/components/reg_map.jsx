import "./reg_map.css";
import back from "/assets/Back_black.svg";
import address from "/assets/Address.svg";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";

const reg_map = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <div className="headbar">
        <button>
          <img src={back} alt="backIcon" onClick={() => navigate(-1)} />
        </button>
        <h3>레슨 위치는 어디인가요?</h3>
      </div>
      <section className="mapsection">
        <div className="addsearch">
          <img src={address} alt="address" />
          <Link to="/addressver" state={location.state}>
            <input type="text" placeholder="주소를 입력하세요" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default reg_map;
