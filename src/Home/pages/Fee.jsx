import Container from "../components/MainPage/Container";
import FeeCalculator from "../components/Fee/FeeCalculator";
import NextButton from "../components/NextButton";
import BackButton from "../components/BackButton";

export default function Fee() {
  return (
    <Container>
      <FeeCalculator />
      <BackButton />
      <NextButton />
    </Container>
  );
}
