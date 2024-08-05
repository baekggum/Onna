import { useState } from "react";
import Bottomsheet from "./Bottomsheet";
import Down from "/assets/Down.svg";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const CategoryItem = styled.ul`
  list-style: none;
  width: fit-content;
  cursor: pointer; // 마우스 커서 변경
`;

export default function Category() {
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [view, setView] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheetOpen(!isBottomSheetOpen);
  };

  return (
    <Container>
      <CategoryItem onClick={toggleBottomSheet}>
        카테고리 {<img src={Down} alt="Down" />}
        {isBottomSheetOpen && <Bottomsheet />}
      </CategoryItem>
      {isBottomSheetOpen && <Bottomsheet onClose={toggleBottomSheet} />}
      <CategoryItem>
        검색순 {view ? "⌃" : <img src={Down} alt="Down" />}
      </CategoryItem>
    </Container>
  );
}
