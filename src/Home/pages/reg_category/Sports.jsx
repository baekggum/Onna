import Container from "../../components/MainPage/Container";
import Reg_cate_sports from "../../components/category/reg_cate_sports";
import NextButton from "../../components/NextButton";
import BackButton from "../../components/BackButton";

export default function Sports_reg() {
  return (
    <Container>
      <Reg_cate_sports />
      <BackButton />
      <NextButton />
    </Container>
  );
}
