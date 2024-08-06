import "./Menu.css";
import X from "/assets/X.svg";
import plus from "/assets/Plus.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Menu() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);

  return (
    <>
      <div className="menu_headbar">
        <button>
          <img src={X} alt="xIcon" onClick={() => navigate(-1)} />
        </button>
        <div className="menuIn">
          <h3>메뉴</h3>
        </div>
        <button>
          <Link to="/reginfo">
            <img src={plus} alt="plusIcon" />
          </Link>
        </button>
      </div>
      <div className="menuContainer"></div>
      <div className="regAcon">
        <Link to="/product">
          <button className="regB">등록 완료</button>
        </Link>
      </div>
    </>
  );
}
