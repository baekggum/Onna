import Reg_map from "../components/reg_map";
import NextButton from "../components/NextButton";
import BackButton from "../components/BackButton";
import Container from "../components/MainPage/Container";

export default function Map() {
  return (
    <Container>
      <Reg_map />
      <BackButton />
      <NextButton />
    </Container>
  );
}
