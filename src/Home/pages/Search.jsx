import Container from "../components/MainPage/Container";
import SearchLogic from "../components/SearchLogic";
import Nav from "../components/MainPage/Nav";

export default function Search() {
  return (
    <Container>
      <SearchLogic />
      <Nav />
    </Container>
  );
}
