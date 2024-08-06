import BaseComp from "../components/ProductBase";
import HeaderBar from "../components/HeaderBar";
import Dropdown from "../components/Product/Dropdown";
import ContentList from "../components/Product/ContentList";
import { useLocation } from "react-router";

export default function Product() {
  const location = useLocation();
  const category =
    location.state && location.state.category ? location.state.category : null; // category가 없을 경우 null로 설정
  console.log(category);
  return (
    <BaseComp>
      <HeaderBar category={category}></HeaderBar>
      <Dropdown />
      <ContentList category={category} />
    </BaseComp>
  );
}
