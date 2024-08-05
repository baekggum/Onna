import Container from "../components/MainPage/Container";
import MainHead from "../components/MainPage/MainHead";
import Banner from "../components/MainPage/Banner";
import MainCategory from "../components/MainPage/MainCategory";
import BestPlayer from "../components/MainPage/BestPlayer";
import Nav from "../components/MainPage/Nav";

export default function MainPage() {
  return (
    <Container>
      <MainHead />
      <Banner />
      <MainCategory />
      <BestPlayer />
      <Nav />
    </Container>
  );
}
