import back from "/assets/Back_black.svg";

export default function Head() {
  return (
    <div className="headbar">
      <button>
        <img src={back} alt="backIcon" width="20" height="20" />
      </button>
      <h3>레슨에 대해 설명해주세요</h3>
    </div>
  );
}
