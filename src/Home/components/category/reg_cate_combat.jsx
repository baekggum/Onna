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
        <h2>격투스포츠 선택</h2>
        <div className="left">
          <button>검도</button>
          <button>복싱</button>
          <button>종합격투기</button>
          <button>킥복싱/무에타이</button>
          <button>펜싱</button>
          <button>합기도/택견</button>
        </div>
        <div className="right">
          <button>공수도(가라데)</button>
          <button>유도</button>
          <button>주짓수</button>
          <button>태권도</button>
          <button>파쿠르</button>
        </div>
      </div>
      <footer>
        <button>다음</button>
      </footer>
    </div>
  );
};

export default Reg_cate_ball;
