/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  list-style: none;
`;

const Info = styled.li`
  display: flex;
  align-items: center;
  align-self: center;
  width: 100%;
  height: 96px;
  border-bottom: 1px solid rgba(0, 0, 0, 20%);

  &:last-child {
    height: 64px;
    border: none;
  }
`;

const Data = styled.div`
  font-size: 0.75rem;
  text-overflow: ellipsis;
`;

const Label = styled.span`
  display: block;
  margin-bottom: 8px;
  font-size: 1.125rem;
`;

const Edit = styled(Link)`
  margin-left: auto;
  color: black;
  font-size: 1rem;
`;

function PersonalInfo({ user }) {
  const { name, phoneNumber, address } = user;

  return (
    <Container>
      <Info>
        <Data>
          <Label>이름</Label>
          {name}
        </Data>
      </Info>
      <Info>
        <Data>
          <Label>전화번호</Label>
          {phoneNumber}
        </Data>
        <Edit>수정</Edit>
      </Info>
      <Info>
        <Data>
          <Label>주소</Label>
          {address}
        </Data>
        <Edit>수정</Edit>
      </Info>
      <Info>
        <Edit>비밀번호 수정</Edit>
      </Info>
    </Container>
  );
}

export default PersonalInfo;
