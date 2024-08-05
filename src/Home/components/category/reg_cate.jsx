import "./reg_cate.css";
import back from "/assets/Back_black.svg";

export default function Reg_cate() {
  return (
    <div className="container">
      <div className="headbar">
        <button>
          <img src={back} alt="backIcon" />
        </button>
        <h3>어떤 스포츠 트레이너 이신가요?</h3>
      </div>
      <div className="category">
        <h2>종류 선택</h2>
        <div className="left">
          <button>스포츠</button>
          <button>계절스포츠</button>
          <button>구기스포츠</button>
        </div>
        <div className="right">
          <button>피트니스</button>
          <button>격투스포츠</button>
        </div>
      </div>
    </div>
  );
}
