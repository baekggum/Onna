import { Link } from "react-router-dom";
import Menu from "./DetailButton/Menu";
import KakaoMap from "./DetailMap/Map";

export default function DetailClickButton({ selectedButton, data }) {
  // console.log(data);
  switch (selectedButton) {
    case "소개":
      return (
        <div style={{ textAlign: "center" }}>
          <img
            src={data.img}
            // alt="소개 이미지"
            width="80%"
            height="100%"
          />
          <p style={{ fontSize: "20pt" }}>{data.introduction.text}</p>
        </div>
      );
    case "장소":
      return (
        <>
          <KakaoMap address={data.location} />
          <div style={{ fontSize: "20pt" }}>
            {data.location || "장소 정보가 없습니다."}
          </div>
        </>
      );
    case "메뉴":
      return <Menu data={data.menu} />;
    default:
      return null;
  }
}
