import "./Nav.css";
import homeIcon from "/assets/Home.png";
import exerciseIcon from "/assets/Exercise.png";
import communityIcon from "/assets/Comu.png";
import myPageIcon from "/assets/My.png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <footer className="footernav">
      <nav className="menunav">
        <Link to="/mainpage">
          <img src={homeIcon} alt="홈" /> 홈
        </Link>
        <Link to="/product">
          <img src={exerciseIcon} alt="트레이너 찾기" /> 트레이너 찾기
        </Link>
        <Link to="/mainpage">
          <img src={communityIcon} alt="커뮤니티" /> 커뮤니티
        </Link>
        <Link to="/profile">
          <img src={myPageIcon} alt="마이페이지" /> 마이페이지
        </Link>
      </nav>
    </footer>
  );
}
