import "./BackButton.css";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <footer className="footerback">
      <button onClick={() => navigate(-1)}>뒤로</button>
    </footer>
  );
}
