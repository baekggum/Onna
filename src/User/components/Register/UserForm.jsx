import styled, { css } from "styled-components";
import { useState } from "react";
import axios from "axios";
import Button from "./Button";
import Title from "./Title";
import ImageUpload from "./ImageUpload";
import { useNavigate } from "react-router";

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

  ${({ selected }) => (selected ? UserTypeSelected : UserTypeUnselected)}
`;

function UserForm() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({
    uid: "",
    password: "",
    confirmPassword: "",
    name: "",
    nickname: "",
    imageURL: "",
    phone: "",
    address: "",
  });

  const [image, setImage] = useState(null); // 이미지 상태 추가

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // 선택한 이미지 파일 저장
  };

  const handleSubmit = async () => {
    const formdata = new FormData();
    const userDto = {
      uid: formData.uid,
      password: formData.password,
      name: formData.name,
      phone: formData.phone,
      nickname: formData.nickname,
      address: formData.address,
      imageURL: formData.imageURL,
      role: role,
    };

    formdata.append(
      "userDto",
      new Blob([JSON.stringify(userDto)], {
        type: "application/json",
      })
    );
    console.log(userDto);

    if (image) {
      formdata.append("image", image);
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_URL}/user/signup`,
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Content-Type을 multipart/form-data로 설정
          },
        }
      );
      console.log("회원가입 성공:", response.data);

      if (role == "USER") {
        navigate("/complete");
      } else {
        navigate("/trainercert");
      }
    } catch (error) {
      console.error("회원가입 오류:", error);
    }
  };

  return (
    <Container>
      <Label>아이디</Label>
      <Input name="uid" type="text" onChange={handleChange} tabIndex="1" />
      <Label>비밀번호</Label>
      <Input
        name="password"
        type="password"
        onChange={handleChange}
        tabIndex="2"
      />
      <Label>비밀번호 확인</Label>
      <Input
        name="confirmPassword"
        type="password"
        onChange={handleChange}
        tabIndex="3"
      />
      <Label>이름</Label>
      <Input name="name" type="text" onChange={handleChange} tabIndex="4" />
      <Label>닉네임</Label>
      <Input name="nickname" type="text" onChange={handleChange} tabIndex="5" />
      <Label>전화번호</Label>
      <Input name="phone" type="tel" onChange={handleChange} tabIndex="6" />
      <Label>주소</Label>
      <Input name="address" type="text" onChange={handleChange} tabIndex="7" />
      <Label>이미지 업로드</Label>
      <Input type="file" onChange={handleImageChange} tabIndex="8" />
      <Label>회원 종류</Label>
      <UserTypes>
        <UserType
          onClick={() => setRole("USER")}
          selected={role === "USER"}
          tabIndex="9"
        >
          유저
        </UserType>
        <UserType
          onClick={() => setRole("TRAINER")}
          selected={role === "TRAINER"}
          tabIndex="10"
        >
          트레이너
        </UserType>
      </UserTypes>
      <Button onClick={handleSubmit}>회원가입</Button>
    </Container>
  );
}

export default UserForm;
