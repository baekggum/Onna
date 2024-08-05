import "./reg_cate.css";
import back from "/assets/Back_black.svg";

const Reg_cate_sports = () => {
  return (
    <div className="container">
      <div className="headbar">
        <button>
          <img src={back} alt="backIcon" width="20" height="20" />
        </button>
        <h3>어떤 스포츠 트레이너 이신가요?</h3>
      </div>
      <div className="category">
        <h2>스포츠 선택</h2>
        <div className="left">
          <button>러닝/마라톤/육상</button>
          <button>승마</button>
          <button>스케이트보드</button>
          <button>인라인스케이트</button>
          <button>체조</button>
        </div>
        <div className="right">
          <button>사격</button>
          <button>수영</button>
          <button>양궁/국궁</button>
          <button>자전거/사이클</button>
          <button>클라이밍/암벽등반</button>
        </div>
      </div>
      <footer>
        <button>다음</button>
      </footer>
    </div>
  );
};

export default Reg_cate_sports;
