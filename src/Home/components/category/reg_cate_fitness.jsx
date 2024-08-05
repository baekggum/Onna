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
        <h2>피트니스 선택</h2>
        <div className="left">
          <Link to="/product">
            <button>스피닝</button>
          </Link>
          <Link to="/product">
            <button>크로스핏</button>
          </Link>
          <Link to="/product">
            <button>필라테스</button>
          </Link>
        </div>
        <div className="right">
          <Link to="/product">
            <button>요가</button>
          </Link>
          <Link to="/product">
            <button>PT</button>
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
