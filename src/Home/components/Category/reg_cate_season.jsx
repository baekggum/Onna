import "./reg_cate.css";
import back from "/assets/Back_black.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Reg_cate_season = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="headbar">
        <button>
          <img
            src={back}
            alt="backIcon"
            width="20"
            height="20"
            onClick={() => navigate(-1)}
          />
        </button>
        <h3>어떤 스포츠 트레이너 이신가요?</h3>
      </div>
      <div className="category">
        <h2>계절스포츠 선택</h2>
        <div className="left">
          <Link to="/map">
            <button>서핑</button>
          </Link>
          <Link to="/map">
            <button>스노우보드</button>
          </Link>
          <Link to="/map">
            <button>스쿠버다이빙</button>
          </Link>
          <Link to="/map">
            <button>아이스스케이트</button>
          </Link>
          <Link to="/map">
            <button>웨이크보드</button>
          </Link>
          <Link to="/map">
            <button>패들보드(SUP)</button>
          </Link>
        </div>
        <div className="right">
          <Link to="/map">
            <button>수상스키</button>
          </Link>
          <Link to="/map">
            <button>스노쿨링</button>
          </Link>
          <Link to="/map">
            <button>스키</button>
          </Link>
          <Link to="/map">
            <button>요트</button>
          </Link>
          <Link to="/map">
            <button>카누/카약</button>
          </Link>
          <Link to="/map">
            <button>프리다이빙</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reg_cate_season;
