import { useEffect, useState } from "react";
import Header from "../../Mypage/components/Header";
import Title from "../../User/components/Register/Title";
import Container from "../components/MainPage/Container";
import Footer from "./Footer";
import styled from "styled-components";

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

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
  font-size: 1.25rem;
  border: none;
  border-radius: 8px;
  background: #f5f5f5;
  outline: none;

  &:focus {
    border: 1px solid #62b7e7;
    background: white;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 160px;
  margin-bottom: 16px;
  padding: 4px 8px;
  color: black;
  font-size: 1.25rem;
  border: none;
  border-radius: 8px;
  background: #f5f5f5;
  outline: none;

  &:focus {
    border: 1px solid #62b7e7;
    background: white;
  }
`;

function RegProduct() {
  const [productData, setProductData] = useState({
    userId: "",
    title: "",
    description: "",
    image: null,
  });

  useEffect(() => {
    const userId = localStorage.getItem("uid");
    setProductData({ ...productData, userId });
  }, []);

  const onChange = (event) => {
    const { name, value } = event.target;
    setProductData({ ...productData, [name]: value });
  };
  const handleImageChange = (event) => {
    setProductData({ ...productData, image: event.target.files[0] });
  };

  return (
    <Container>
      <Header prev="/mainpage">뒤로가기</Header>
      <Title>트레이너 소개 설정</Title>
      <Form>
        <Label>제목</Label>
        <Input name="title" type="text" onChange={onChange} />
        <Label>소개 이미지</Label>
        <Input
          name="image"
          accept="image/*"
          type="file"
          onChange={handleImageChange}
        />
        <Label>소개</Label>
        <TextArea name="description" onChange={onChange} />
      </Form>
      <Footer
        hideBack
        onNext={(navigate) => {
          navigate("/categoryreg", { state: { ...productData } });
        }}
      />
    </Container>
  );
}

export default RegProduct;
