import styled, { css } from "styled-components";
import { useState } from "react";
import axios from "axios";
import Button from "./Button";
import Title from "./Title";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding: 16px;
`;

const Label = styled.span`
  display: inline-block;
  padding: 4px;
  font-size: 0.75rem;
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  margin-bottom: 16px;
  padding: 4px 8px;
  color: black;
  border: none;
  border-radius: 8px;
  background: #f5f5f5;
  outline: none;

  &:focus {
    border: 1px solid #62b7e7;
    background: white;
  }
`;

const UserTypes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const UserTypeSelected = css`
  background: #62b7e7;
  color: white;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;

const UserTypeUnselected = css`
  background: #bdbdbd;
  color: black;
  box-shadow: none;
`;

const UserType = styled.button`
  width: 120px;
  height: 44px;
  margin-bottom: 16px;
  border: none;
  border-radius: 22px;

  ${({ isSelected }) => (isSelected ? UserTypeSelected : UserTypeUnselected)}
`;

function UserForm() {
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({
    uid: "",
    password: "",
    confirmPassword: "",
    name: "",
    nickname: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_URL}/user/signup`,
        {
          userDto: {
            ...formData,
            role,
          },
        }
      );
      console.log("회원가입 성공:", response.data);
    } catch (error) {
      console.error("회원가입 오류:", error);
    }
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <Form>
        <Label>아이디</Label>
        <Input name="" type="text" onChange={handleChange} tabIndex="1"></Input>
        <Label>비밀번호</Label>
        <Input type="password" onChange={handleChange} tabIndex="2"></Input>
        <Label>비밀번호 확인</Label>
        <Input type="password" onChange={handleChange} tabIndex="3"></Input>
        <Label>이름</Label>
        <Input type="text" onChange={handleChange} tabIndex="4"></Input>
        <Label>닉네임</Label>
        <Input type="text" onChange={handleChange} tabIndex="5"></Input>
        <Label>전화번호</Label>
        <Input type="tel" onChange={handleChange} tabIndex="6"></Input>
        <Label>주소</Label>
        <Input type="text" onChange={handleChange} tabIndex="7"></Input>
        <Label>회원 종류</Label>
        <UserTypes>
          <UserType
            onClick={() => setRole("USER")}
            isSelected={role == "USER"}
            tabIndex="8"
          >
            유저
          </UserType>
          <UserType
            onClick={() => setRole("TRAINER")}
            isSelected={role == "TRAINER"}
            tabIndex="9"
          >
            트레이너
          </UserType>
        </UserTypes>
      </Form>
      <Button onClick={handleSubmit}>다음</Button>
    </Container>
  );
}

export default UserForm;
