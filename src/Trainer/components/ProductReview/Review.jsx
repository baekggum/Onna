import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const ReviewText = styled.p`
  margin: 0;
  padding: 0;
`;
export default function ShowReview() {
  const [review, setReview] = useState([]);
  const location = useLocation();
  const data = location.state;
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}/review/product/${data.productId}`
        );
        setReview(response.data);
        console.log(response.data); // 응답 데이터 로그
      } catch (error) {
        console.error("오류: ", error);
      }
    };
    if (review.length === 0) fetchData(); // 메뉴 데이터가 비어 있을 때만 fetch
  }, [review.length, data.productId]); // 의존성 추가

  return (
    <>
      <div
        style={{
          width: "100%",
          fontSize: "20pt",
          borderBottom: "1px solid #d9d9d9",
        }}
      >
        전체 리뷰
      </div>
      <div>
        {review && review.length > 0 ? (
          review.map((r) => (
            <div
              key={r.id}
              style={{
                margin: "20px 0",
                // border: "1px solid #d9d9d9",
                padding: "10px",
              }}
            >
              <img
                src={r.picture}
                alt="리뷰 이미지"
                style={{ width: "100px", height: "100px" }}
              />
              <ReviewText>별점: {r.star.toFixed(1)}</ReviewText>
              <ReviewText>{r.memo}</ReviewText>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  color: "rgba(0,0,0,0.42)",
                }}
              >
                <ReviewText>{r.userId}</ReviewText>
                <ReviewText>{r.createdDate}</ReviewText>
              </div>
            </div>
          ))
        ) : (
          <p>리뷰가 없습니다.</p>
        )}
      </div>
    </>
  );
}
