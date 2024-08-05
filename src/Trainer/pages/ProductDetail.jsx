import BaseComp from "../components/ProductBase";
import HeaderBar from "../components/HeaderBar";
import { useLocation } from "react-router-dom";
import DetailBase from "../components/ProductDetail/DetailBase";
import DetailInformation from "../components/ProductDetail/DetailInformation";

export default function ProductDetail() {
  const location = useLocation();
  const data = location.state; // 전달된 데이터를 가져옴

  return (
    <BaseComp>
      <HeaderBar state={data} />
      <DetailBase>
        <DetailInformation state={data} />
      </DetailBase>
    </BaseComp>
  );
}
