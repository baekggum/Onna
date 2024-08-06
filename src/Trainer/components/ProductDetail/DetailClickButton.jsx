import { Link } from "react-router-dom";
import Menu from "./DetailButton/Menu";
import KakaoMap from "./DetailMap/Map";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DetailClickButton({ selectedButton, data }) {
  const [menuData, setMenuData] = useState([]);
  // console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}/menu/productNum/${data.productId}`
        );
        setMenuData(response.data);
        console.log(response.data); // 응답 데이터 로그
      } catch (error) {
        console.error("오류: ", error);
      }
    };
    if (menuData.length === 0) fetchData(); // 메뉴 데이터가 비어 있을 때만 fetch
  }, [menuData.length, data.productId]); // 의존성 추가

  switch (selectedButton) {
    case "소개":
      return (
        <div style={{ textAlign: "center" }}>
          <img
            src={data.image}
            // alt="소개 이미지"
            width="80%"
            height="100%"
          />
          <p style={{ fontSize: "20pt" }}>{data.my_description}</p>
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
      return <Menu data={menuData} />;
    default:
      return null;
  }
}
