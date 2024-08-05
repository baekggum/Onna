import "./reg_cate.css";
import back from "/assets/Back_black.svg";

const Reg_cate_ball = () => {
  return (
    <div className="container">
      <div className="headbar">
        <button>
          <img src={back} alt="backIcon" width="20" height="20" />
        </button>
        <h3>어떤 스포츠 트레이너 이신가요?</h3>
      </div>
      <div className="category">
        <h2>피트니스 선택</h2>
        <div className="left">
          <button>스피닝</button>
          <button>크로스핏</button>
          <button>필라테스</button>
        </div>
        <div className="right">
          <button>요가</button>
          <button>PT</button>
        </div>
      </div>
      <footer>
        <button>다음</button>
      </footer>
    </div>
  );
};

export default Reg_cate_ball;
