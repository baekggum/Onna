import Container from "../../components/MainPage/Container";
import Reg_cate_ball from "../../components/Category/reg_cate_fitness";
import Footer from "../Footer";

export default function Fitness_reg() {
  return (
    <Container>
      <Reg_cate_ball />
      <Footer hideNext />
    </Container>
  );
}
