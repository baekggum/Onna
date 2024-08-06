import "./reg_cate.css";
import back from "/assets/Back_black.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Reg_cate_sports = () => {
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
        <h2>스포츠 선택</h2>
        <div className="left">
          <Link to="/map">
            <button>러닝/마라톤/육상</button>
          </Link>
          <Link to="/map">
            <button>승마</button>
          </Link>
          <Link to="/map">
            <button>스케이트보드</button>
          </Link>
          <Link to="/map">
            <button>인라인스케이트</button>
          </Link>
          <Link to="/map">
            <button>체조</button>
          </Link>
        </div>
        <div className="right">
          <Link to="/map">
            <button>사격</button>
          </Link>
          <Link to="/map">
            <button>수영</button>
          </Link>
          <Link to="/map">
            <button>양궁/국궁</button>
          </Link>
          <Link to="/map">
            <button>자전거/사이클</button>
          </Link>
          <Link to="/map">
            <button>클라이밍/암벽등반</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reg_cate_sports;
