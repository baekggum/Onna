import Reg_map from "../components/reg_map";
import Container from "../components/MainPage/Container";
import Footer from "./Footer";

export default function Map() {
  return (
    <Container>
      <Reg_map />
      <Footer onNext={(navigate) => navigate()} />
    </Container>
  );
}
