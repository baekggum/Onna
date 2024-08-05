import Container from "../../components/MainPage/Container";
import Reg_cate_ball from "../../components/category/reg_cate_season";
import NextButton from "../../components/NextButton";
import BackButton from "../../components/BackButton";

export default function Season_reg() {
  return (
    <Container>
      <Reg_cate_ball />
      <BackButton />
      <NextButton />
    </Container>
  );
}
