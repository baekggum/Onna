import { useState } from "react";
import styled from "styled-components";

const Sports = ["스포츠", "피트니스", "계절스포츠", "격투스포츠", "구기스포츠"];
const SportsCategory = [
  {
    name: "스포츠",
    value: [
      "러닝/마라톤/육상",
      "사격",
      "승마",
      "수영",
      "스케이트보드",
      "양궁/곡궁",
      "인라인스케이트",
      "자전거/사이클",
      "체조",
      "클라이밍/암벽등반",
    ],
  },
  {
    name: "피트니스",
    value: ["스피닝", "요가", "크로스핏", "PT", "필라테스"],
  },
  {
    name: "계절스포츠",
    value: [
      "서핑",
      "수상스키",
      "스노우보드",
      "스노클링",
      "스쿠버다이빙",
      "스키",
      "아이스스케이트",
      "요트",
      "웨이크보드",
      "카누/카약",
      "패들보드(SUP)",
      "프리다이빙",
    ],
  },
  {
    name: "격투스포츠",
    value: [
      "검도",
      "공수도(가라데)",
      "복싱",
      "유도",
      "종합격투기",
      "주짓수",
      "킥복싱/무에타이",
      "태권도",
      "펜싱",
      "파쿠르",
      "합기도/택견",
    ],
  },
  {
    name: "구기스포츠",
    value: [
      "골프",
      "농구",
      "당구",
      "배구",
      "배드민턴",
      "볼링",
      "스쿼시/라켓볼",
      "야구",
      "족구",
      "축구",
      "탁구",
      "테니스",
    ],
  },
];
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* 반투명 검은색 */
  backdrop-filter: blur(1px); /* 블러 효과 */
  z-index: 1; /* 바텀 시트보다 아래에 위치 */
  color: black;
`;

const BottomSheet = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%; /* 왼쪽에서 50% 위치 */
  transform: translateX(-50%); /* 중앙으로 이동 */
  width: 50%; /* 너비를 50%로 설정 */
  height: 70%;
  background: white;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
  transition: bottom 1s ease;
  min-width: 900px;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  z-index: 2; /* Overlay보다 위에 위치 */
`;

const BottomSheetCategory = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  align-content: flex-start;

  border: 1px solid black;
`;

const CategoryButton = styled.button`
  width: 49%;
  height: 50px;
  cursor: pointer;
  text-align: start;
  background-color: transparent;

  border: none;
`;

const BackButton = styled.button`
  height: 50px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  text-align: center;
  font-weight: bold;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

export default function Bottomsheet({ onClose }) {
  const [selectedSport, setSelectedSport] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const handleSportClick = (sport) => {
    setSelectedSport(sport);
    setSelectedType(null); // 카테고리 선택 시 종류 초기화
  };

  const handleTypeClick = (type) => {
    setSelectedType(type); // 종류 선택
  };

  const handleBack = () => {
    if (selectedType) {
      setSelectedType(null); // 종류 선택한 상태에서 뒤로가기
    } else {
      setSelectedSport(null); // 카테고리 선택한 상태에서 뒤로가기
    }
  };

  return (
    <>
      <Overlay onClick={onClose} />
      <BottomSheet>
        <Header>
          {(selectedSport || selectedType) && (
            <BackButton onClick={handleBack}> &lt; </BackButton>
          )}
          <h2 style={{ marginLeft: "40px" }}>
            {!selectedSport ? "카테고리 선택" : selectedSport}
          </h2>
        </Header>
        <BottomSheetCategory>
          {!selectedSport ? (
            Sports.map((sport) => (
              <CategoryButton
                key={sport}
                onClick={() => handleSportClick(sport)}
              >
                {sport}
              </CategoryButton>
            ))
          ) : (
            <>
              {SportsCategory.find(
                (category) => category.name === selectedSport
              ).value.map((item) => (
                <CategoryButton
                  key={item}
                  onClick={() => handleTypeClick(item)}
                >
                  {item}
                </CategoryButton>
              ))}
            </>
          )}
        </BottomSheetCategory>
      </BottomSheet>
    </>
  );
}
