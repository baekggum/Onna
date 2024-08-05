/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";
import Rating from "./Rating";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 100%;
  padding: 16px 0;
  border-top: 1px solid rgba(0, 0, 0, 20%);
`;

const Title = styled.div`
  padding: 8px;
  font-size: 1.25rem;
`;

const RatingWrapper = styled.div`
  padding: 8px;
`;

const Memo = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 16px;
  font-size: 1.25rem;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  resize: none;
  outline: none;

  &::placeholder {
    color: #c5c5c5;
    font-size: 1.25rem;
  }
`;

const UploadButton = styled.button`
  width: 100%;
  height: 36px;
  color: white;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 18px;
  background: #0a8ed9a3;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;

function ReviewUpload({ lesson, review, onUpload }) {
  const { title } = lesson;
  const initialMemo = review ? review.comment : "";

  const [rate, setRate] = useState(review ? review.rate : 5);
  const [memo, updateMemo] = useState(initialMemo);

  const onClickRate = () => {
    setRate((rate + 5) % 6);
  };

  const handleMemoChange = (event) => {
    updateMemo(event.target.value);
  };

  const precheck = () => {
    if (memo.trim().length == 0) {
      alert("리뷰를 작성해주세요.");
      return false;
    }
    return true;
  };

  return (
    <Container>
      <Title>{title}</Title>
      <RatingWrapper>
        <Rating rate={rate} onClick={onClickRate} />
      </RatingWrapper>
      <Memo
        defaultValue={initialMemo}
        placeholder="리뷰를 남겨주세요"
        onChange={handleMemoChange}
      >
        {initialMemo}
      </Memo>
      <UploadButton onClick={() => precheck() && onUpload()}>
        {review ? "수정" : "등록"}
      </UploadButton>
    </Container>
  );
}

export default ReviewUpload;
