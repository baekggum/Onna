import BaseComp from "../components/ProductBase";
import HeaderBar from "../components/HeaderBar";
import Dropdown from "../components/Product/Dropdown";
import ContentList from "../components/Product/ContentList";

export default function Product() {
  return (
    <BaseComp>
      <HeaderBar></HeaderBar>
      <Dropdown />
      <ContentList />
    </BaseComp>
  );
}
