import Container from "../../components/MainPage/Container";
import Reg_cate_sports from "../../components/Category/reg_cate_sports";
import Footer from "../Footer";

export default function Sports_reg() {
  return (
    <Container>
      <Reg_cate_sports />
      <Footer hideNext />
    </Container>
  );
}
