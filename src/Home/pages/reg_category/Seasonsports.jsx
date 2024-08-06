import Container from "../../components/MainPage/Container";
import Reg_cate_ball from "../../components/Category/reg_cate_season";
import Footer from "../Footer";

export default function Season_reg() {
  return (
    <Container>
      <Reg_cate_ball />
      <Footer hideNext />
    </Container>
  );
}
