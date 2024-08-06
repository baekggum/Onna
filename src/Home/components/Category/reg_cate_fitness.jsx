import axios from "axios";
import "./reg_cate.css";
import back from "/assets/Back_black.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Reg_cate_ball = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onClick = async (event) => {
    const state = location.state;
    const largeCategory = state.largeCategory;
    const smallCategory = event.target.innerText;
    const response = await axios.post(
      `${import.meta.env.VITE_APP_URL}/category/create`,
      {
        largeCategory,
        smallCategory,
      },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );

    console.log(response.data);
    delete state.largeCategory;

    navigate("/map", {
      state: {
        ...state,
        categoryId: response.data.id,
      },
    });
  };

  return (
    <div className="container">
      <div className="headbar">
        <button>
          <img
            src={back}
            alt="backIcon"
            width="20"
            height="20"
            onClick={() => navigate(-1)}
          />
        </button>
        <h3>어떤 스포츠 트레이너 이신가요?</h3>
      </div>
      <div className="category">
        <h2>피트니스 선택</h2>
        <div className="left">
          <button onClick={onClick}>스피닝</button>
          <button onClick={onClick}>크로스핏</button>
          <button onClick={onClick}>필라테스</button>
        </div>
        <div className="right">
          <button onClick={onClick}>요가</button>
          <button onClick={onClick}>PT</button>
        </div>
      </div>
    </div>
  );
};

export default Reg_cate_ball;
