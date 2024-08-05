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
        <h2>구기스포츠 선택</h2>
        <div className="left">
          <button>골프</button>
          <button>당구</button>
          <button>배드민턴</button>
          <button>스쿼시/라켓볼</button>
          <button>족구</button>
          <button>탁구</button>
        </div>
        <div className="right">
          <button>농구</button>
          <button>배구</button>
          <button>볼링</button>
          <button>야구</button>
          <button>축구</button>
          <button>테니스</button>
        </div>
      </div>
      <footer>
        <button>다음</button>
      </footer>
    </div>
  );
};

export default Reg_cate_ball;
