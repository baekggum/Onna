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
          <Link to="/product">
            <button>골프</button>
          </Link>
          <Link to="/product">
            <button>당구</button>
          </Link>
          <Link to="/product">
            <button>배드민턴</button>
          </Link>
          <Link to="/product">
            <button>스쿼시/라켓볼</button>
          </Link>
          <Link to="/product">
            <button>족구</button>
          </Link>
          <Link to="/product">
            <button>탁구</button>
          </Link>
        </div>
        <div className="right">
          <Link to="/product">
            <button>농구</button>
          </Link>
          <Link to="/product">
            <button>배구</button>
          </Link>
          <Link to="/product">
            <button>볼링</button>
          </Link>
          <Link to="/product">
            <button>야구</button>
          </Link>
          <Link to="/product">
            <button>축구</button>
          </Link>
          <Link to="/product">
            <button>테니스</button>
          </Link>
        </div>
      </div>
      <footer>
        <button>다음</button>
      </footer>
    </div>
  );
};

export default Reg_cate_ball;
