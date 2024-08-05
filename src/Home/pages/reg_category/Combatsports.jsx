import Container from "../../components/MainPage/Container";
import Reg_cate_ball from "../../components/category/reg_cate_combat";
import NextButton from "../../components/NextButton";
import BackButton from "../../components/BackButton";

export default function Combat_reg() {
  return (
    <Container>
      <Reg_cate_ball />
      <BackButton />
      <NextButton />
    </Container>
  );
}
