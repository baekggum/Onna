/* eslint-disable react/prop-types */
import { useRef } from "react";
import styled, { css } from "styled-components";

const BG = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 80%);
  top: 0;
  left: 0;
  z-index: 10;
`;

const Container = styled.div`
  width: 50%;
  height: 640px;
  position: absolute;
  padding: 16px;
  background-color: white;
  border: 1px solid black;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom: none;
  bottom: 0;
  left: 50%;
  z-index: 11;
  transform: translate(-50%, 0);

  @media (max-width: 900px) {
    width: min(450px, 100%);
  }
`;

const ReceiptItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  width: 100%;
  padding: 16px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 20%);

  &:last-child {
    border: none;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Text = css`
  font-size: 1.25rem;
  color: #777777;

  @media (max-width: 450px) {
    font-size: 1rem;
  }
`;

const Label = styled.span`
  display: inline-block;
  width: 25%;
  ${Text}

  @media (max-width: 450px) {
    width: 30%;
  }
`;

const Content = styled.span`
  display: inline-block;
  width: 75%;
  ${Text}

  @media (max-width: 450px) {
    width: 70%;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  width: 100%;
  margin-top: 32px;
  padding: 16px;
  background-color: #d9d9d9;
`;

const dateToDetailedString = (date) => {
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  let month = date.getMonth() + 1;
  let day = date.getDate();
  let dayOfWeek = week[date.getDay()];
  let hour = date.getHours();
  let minute = date.getMinutes();
  if (minute < 10) minute = "0" + minute;
  let ampm = hour >= 12 ? "오후" : "오전";

  return `${month}월 ${day}일 (${dayOfWeek}) ${ampm} ${hour}:${minute}`;
};

function ReceiptModal({ lesson, closeModal }) {
  const { trainer, startDate } = lesson;
  const bgRef = useRef();

  return (
    <BG
      ref={bgRef}
      onClick={(e) => {
        if (e.target == bgRef.current) closeModal();
      }}
    >
      <Container>
        <ReceiptItem>
          <Info>
            <Label>예약번호</Label>
            <Content>4327999843</Content>
          </Info>
        </ReceiptItem>
        <ReceiptItem>
          <Info>
            <Label>날짜/시간</Label>
            <Content>{dateToDetailedString(startDate)}</Content>
          </Info>
        </ReceiptItem>
        <ReceiptItem>
          <Info>
            <Label>선택메뉴</Label>
            <Content>필라테스</Content>
          </Info>
        </ReceiptItem>
        <ReceiptItem>
          <Info>
            <Label>트레이너</Label>
            <Content>{trainer}</Content>
          </Info>
          <UserInfo>
            <Info>
              <Label>예약자</Label>
              <Content>홍길동</Content>
            </Info>
            <Info>
              <Label>연락처</Label>
              <Content>010-1234-5678</Content>
            </Info>
          </UserInfo>
          <Label>결제정보</Label>
        </ReceiptItem>
        <ReceiptItem>
          <Info>
            <Label>메뉴가격</Label>
            <Content style={{ width: "fit-content" }}>70,000</Content>
          </Info>
          <Info>
            <Label>총 결제금액</Label>
            <Content style={{ width: "fit-content" }}>70,000</Content>
          </Info>
        </ReceiptItem>
      </Container>
    </BG>
  );
}

export default ReceiptModal;
