import "./reg_cate.css";
import back from "/assets/Back_black.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Reg_cate() {
  const location = useLocation();
  const navigate = useNavigate();
  const onClick = (url, event) => {
    navigate(url, {
      state: { largeCategory: event.target.innerText, ...location.state },
    });
  };

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
          <button onClick={(event) => onClick("/sportsreg", event)}>
            스포츠
          </button>
          <button onClick={(event) => onClick("/seasonreg", event)}>
            계절스포츠
          </button>
          <button onClick={(event) => onClick("/ballreg", event)}>
            구기스포츠
          </button>
        </div>
        <div className="right">
          <button onClick={(event) => onClick("/fitnessreg", event)}>
            피트니스
          </button>
          <button onClick={(event) => onClick("/combatreg", event)}>
            격투스포츠
          </button>
        </div>
      </div>
    </div>
  );
}
