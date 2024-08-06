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
        <h2>구기스포츠 선택</h2>
        <div className="left">
          <Link to="/map">
            <button>골프</button>
          </Link>
          <Link to="/map">
            <button>당구</button>
          </Link>
          <Link to="/map">
            <button>배드민턴</button>
          </Link>
          <Link to="/map">
            <button>스쿼시/라켓볼</button>
          </Link>
          <Link to="/map">
            <button>족구</button>
          </Link>
          <Link to="/map">
            <button>탁구</button>
          </Link>
        </div>
        <div className="right">
          <Link to="/map">
            <button>농구</button>
          </Link>
          <Link to="/map">
            <button>배구</button>
          </Link>
          <Link to="/map">
            <button>볼링</button>
          </Link>
          <Link to="/map">
            <button>야구</button>
          </Link>
          <Link to="/map">
            <button>축구</button>
          </Link>
          <Link to="/map">
            <button>테니스</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reg_cate_ball;
