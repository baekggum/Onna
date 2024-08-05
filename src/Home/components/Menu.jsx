import "./Menu.css";
import X from "/assets/X.svg";
import plus from "/assets/Plus.svg";

export default function Menu() {
  return (
    <>
      <div className="menu_headbar">
        <button>
          <img src={X} alt="xIcon" />
        </button>
        <div className="menuIn">
          <h3>메뉴</h3>
        </div>
        <button>
          <img src={plus} alt="plusIcon" />
        </button>
      </div>
      <div className="menuContainer"></div>
      <div className="regAcon">
        <button className="regB">등록 완료</button>
      </div>
    </>
  );
}
