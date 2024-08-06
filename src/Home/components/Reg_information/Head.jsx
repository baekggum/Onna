import back from "/assets/Back_black.svg";
import { useNavigate } from "react-router-dom";

export default function Head() {
  const navigate = useNavigate();
  return (
    <div className="headbar">
      <button>
        <img src={back} alt="backIcon" onClick={() => navigate(-1)} />
      </button>
      <h3>레슨에 대해 설명해주세요</h3>
    </div>
  );
}
