import "./reg_cate.css";
import back from "/assets/Back_black.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Reg_cate() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="headbar">
        <button>
          <img src={back} alt="backIcon" onClick={() => navigate(-1)} />
        </button>
        <h3>어떤 스포츠 트레이너 이신가요?</h3>
      </div>
      <div className="category">
        <h2>종류 선택</h2>
        <div className="left">
          <Link to="/sportsreg">
            <button>스포츠</button>
          </Link>
          <Link to="/seasonreg">
            <button>계절스포츠</button>
          </Link>
          <Link to="/ballreg">
            <button>구기스포츠</button>
          </Link>
        </div>
        <div className="right">
          <Link to="/fitnessreg">
            <button>피트니스</button>
          </Link>
          <Link to="/combatreg">
            <button>격투스포츠</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
