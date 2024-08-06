import "./reg_cate.css";
import back from "/assets/Back_black.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Reg_cate_ball = () => {
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
        <h2>격투스포츠 선택</h2>
        <div className="left">
          <Link to="/map">
            <button>검도</button>
          </Link>
          <Link to="/map">
            <button>복싱</button>
          </Link>
          <Link to="/map">
            <button>종합격투기</button>
          </Link>
          <Link to="/map">
            <button>킥복싱/무에타이</button>
          </Link>
          <Link to="/map">
            <button>펜싱</button>
          </Link>
          <Link to="/map">
            <button>합기도/택견</button>
          </Link>
        </div>
        <div className="right">
          <Link to="/map">
            <button>공수도(가라데)</button>
          </Link>
          <Link to="/map">
            <button>유도</button>
          </Link>
          <Link to="/map">
            <button>주짓수</button>
          </Link>
          <Link to="/map">
            <button>태권도</button>
          </Link>
          <Link to="/map">
            <button>파쿠르</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reg_cate_ball;
