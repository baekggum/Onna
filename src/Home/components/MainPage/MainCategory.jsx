import "./MainCategory.css";
import sportsIcon from "/assets/Shose.png";
import ballSportsIcon from "/assets/Ball.png";
import fitnessIcon from "/assets/Arm.png";
import seasonSportsIcon from "/assets/Ski.png";
import combatSportsIcon from "/assets/Uniform.png";
import { Link } from "react-router-dom";

export default function MainCategory() {
  return (
    <div className="maincategory">
      <section className="categories1">
        <Link to="/product" state={{ category: "스포츠" }}>
          <button className="sports">
            <img src={sportsIcon} alt="스포츠 이미지" />
            <p>스포츠</p>
          </button>
        </Link>
        <Link to="/product" state={{ category: "구기스포츠" }}>
          <button className="ballsports">
            <img src={ballSportsIcon} alt="구기스포츠 이미지" />
            <p>구기스포츠</p>
          </button>
        </Link>
        <Link to="/product" state={{ category: "피트니스" }}>
          <button className="pitness">
            <img src={fitnessIcon} alt="피트니스 이미지" />
            <p>피트니스</p>
          </button>
        </Link>
      </section>

      <section className="categories2">
        <Link to="/product" state={{ category: "계절스포츠" }}>
          <button className="season_sports">
            <img src={seasonSportsIcon} alt="계절스포츠 이미지" />
            <p>계절스포츠</p>
          </button>
        </Link>
        <Link to="/product" state={{ category: "격투스포츠" }}>
          <button className="combat_sports">
            <img src={combatSportsIcon} alt="격투스포츠 이미지" />
            <p>격투스포츠</p>
          </button>
        </Link>
      </section>
    </div>
  );
}
