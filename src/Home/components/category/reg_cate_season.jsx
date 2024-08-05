import "./reg_cate.css";
import back from "/assets/Back_black.svg";

const reg_cate_season = () => {
  return (
    <div className="container">
      <div className="headbar">
        <button>
          <img src={back} alt="backIcon" width="20" height="20" />
        </button>
        <h3>어떤 스포츠 트레이너 이신가요?</h3>
      </div>
      <div className="category">
        <h2>계절스포츠 선택</h2>
        <div className="left">
          <button>서핑</button>
          <button>스노우보드</button>
          <button>스쿠버다이빙</button>
          <button>아이스스케이트</button>
          <button>웨이크보드</button>
          <button>패들보드(SUP)</button>
        </div>
        <div className="right">
          <button>수상스키</button>
          <button>스노쿨링</button>
          <button>스키</button>
          <button>요트</button>
          <button>카누/카약</button>
          <button>프리다이빙</button>
        </div>
      </div>
      <footer>
        <button>다음</button>
      </footer>
    </div>
  );
};

export default reg_cate_season;
