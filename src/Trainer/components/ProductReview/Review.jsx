import { useLocation } from "react-router-dom";
import styled from "styled-components";

const ReviewText = styled.p`
  margin: 0;
  padding: 0;
`;
export default function ShowReview() {
  const location = useLocation();
  const data = location.state;
  console.log(data);

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
        {data.reviews && data.reviews.length > 0 ? (
          data.reviews.map((review) => (
            <div
              key={review.id}
              style={{
                margin: "20px 0",
                // border: "1px solid #d9d9d9",
                padding: "10px",
              }}
            >
              <img
                src={review.img}
                alt="리뷰 이미지"
                style={{ width: "100px", height: "100px" }}
              />
              <ReviewText>{review.title}</ReviewText>
              <ReviewText>별점: {review.score.toFixed(1)}</ReviewText>
              <ReviewText>{review.content}</ReviewText>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  color: "rgba(0,0,0,0.42)",
                }}
              >
                <ReviewText>{review.author}</ReviewText>
                <ReviewText>{review.createdDate}</ReviewText>
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
