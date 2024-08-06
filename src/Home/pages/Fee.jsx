import Container from "../components/MainPage/Container";
import FeeCalculator from "../components/Fee/FeeCalculator";
import Footer from "./Footer";

export default function Fee() {
  return (
    <Container>
      <FeeCalculator />
      <Footer onNext={(navigate) => navigate("/menureg")} />
    </Container>
  );
}
