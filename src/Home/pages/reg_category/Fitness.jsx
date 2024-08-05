import Container from "../../components/MainPage/Container";
import Reg_cate_ball from "../../components/category/reg_cate_fitness";
import NextButton from "../../components/NextButton";
import BackButton from "../../components/BackButton";

export default function Fitness_reg() {
  return (
    <Container>
      <Reg_cate_ball />
      <BackButton />
      <NextButton />
    </Container>
  );
}
