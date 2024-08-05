import BaseComp from "../components/ProductBase";
import HeaderBar from "../components/HeaderBar";
import { useLocation } from "react-router-dom";
import DetailBase from "../components/ProductDetail/DetailBase";
import ShowStar from "../components/ProductReview/Star";
import ShowReview from "../components/ProductReview/Review";

export default function ProductReview() {
  const location = useLocation();
  const data = location.state; // 전달된 데이터를 가져옴

  return (
    <BaseComp>
      <HeaderBar state={data} />
      <DetailBase>
        <ShowStar state={data} />
        <ShowReview state={data} />
      </DetailBase>
    </BaseComp>
  );
}
