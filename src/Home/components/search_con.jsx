import "./search_con.css";
import back from "/assets/Back_black.svg";

const search_con = () => {
  return (
    <div className="container">
      <div className="headbar">
        <button>
          <img src={back} alt="backIcon" width="20" height="20" />
        </button>
        <div className="addin">
          <h3>주소 확인</h3>
        </div>
      </div>
      <div className="addBox">
        <div className="inputWrapper">
          <input type="text" placeholder="도/특별,광역시" />
          <div className="line"></div>
          <input type="text" placeholder="도시" />
          <div className="line"></div>
          <input type="text" placeholder="군/구" />
          <div className="line"></div>
          <input type="text" placeholder="도로명주소" />
          <div className="line"></div>
          <input type="text" placeholder="아파트 층/호 건물명" />
          <div className="line"></div>
          <input type="text" placeholder="우편번호" />
        </div>
      </div>
      <div className="regAcon">
        <button className="regA">확인</button>
      </div>
    </div>
  );
};

export default search_con;
