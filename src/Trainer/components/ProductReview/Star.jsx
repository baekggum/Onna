import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const StarScore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 200px;
  //   border: 1px solid black;
`;
const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 10px 0;
`;

const Star_rating = styled.div`
  font-size: 40pt; // 별 크기 조정
  color: black;
  position: relative;
  unicode-bidi: bidi-override;
  width: max-content;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1.3px;
  -webkit-text-stroke-color: black;
`;
const Star_rating_fill = styled.div`
  font-size: 40pt; // 별 크기 조정
  color: black;
  padding: 0;
  position: absolute;
  z-index: 1;
  display: flex;
  top: 0;
  left: 0;
  overflow: hidden;
  -webkit-text-fill-color: black;
`;
const Star_rating_base = styled.div`
  z-index: 0;
  padding: 0;
`;
export default function ShowStar() {
  const [review, setReview] = useState([]);
  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}/review/product/${data.productId}`
          // `${import.meta.env.VITE_APP_URL}/review/product/${data.productId}`
        );
        setReview(response.data);
        console.log(response.data); // 응답 데이터 로그
      } catch (error) {
        console.error("오류: ", error);
      }
    };
    if (review.length === 0) fetchData(); // 메뉴 데이터가 비어 있을 때만 fetch
  }, [review.length, data.productId]); // 의존성 추가
  //   console.log(data);
  // reviews의 star 평균 계산
  const totalStars = review.reduce((acc, review) => acc + review.star, 0);
  const averageStar = totalStars / review.length;
  //   console.log(totalStars);
  //   console.log(averageStar);
  // 평균 별점을 star에 할당
  const ratingToPercent = {
    width: `${(averageStar / 5) * 100}%`,
  };

  return (
    <StarScore>
      <p style={{ fontSize: "50pt", margin: "0" }}>{averageStar.toFixed(1)}</p>
      <StarsContainer>
        <Star_rating>
          <Star_rating_fill style={ratingToPercent}>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </Star_rating_fill>
          <Star_rating_base>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </Star_rating_base>
        </Star_rating>
        <p style={{ fontSize: "20pt" }}>{review.length}개</p>
      </StarsContainer>
    </StarScore>
  );
}
