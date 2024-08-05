import "./reg_map.css";
import back from "/assets/Back_black.svg";
import address from "/assets/Address.svg";

const reg_map = () => {
  return (
    <>
      <div className="headbar">
        <button>
          <img src={back} alt="backIcon" width="20" height="20" />
        </button>
        <h3>레슨 위치는 어디인가요?</h3>
      </div>
      <section className="mapsection">
        <div className="addsearch">
          <img src={address} alt="address" />
          <input type="text" placeholder="주소를 입력하세요" />
        </div>
      </section>
    </>
  );
};

export default reg_map;
