import "./Nav.css";
import homeIcon from "/assets/Home.png";
import exerciseIcon from "/assets/Exercise.png";
import communityIcon from "/assets/Comu.png";
import myPageIcon from "/assets/My.png";

export default function Nav() {
  return (
    <footer className="footernav">
      <nav className="menunav">
        <a href="#">
          <img src={homeIcon} alt="홈" /> 홈
        </a>
        <a href="#">
          <img src={exerciseIcon} alt="트레이너 찾기" /> 트레이너 찾기
        </a>
        <a href="#">
          <img src={communityIcon} alt="커뮤니티" /> 커뮤니티
        </a>
        <a href="#">
          <img src={myPageIcon} alt="마이페이지" /> 마이페이지
        </a>
      </nav>
      ;
    </footer>
  );
}
