import styled from "styled-components";
import Title from "./Title";
import Button from "./Button";
import ImageUpload from "./ImageUpload";
import { useNavigate } from "react-router";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 100%;
  margin-bottom: 16px;
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: contain;
`;

function TrainerCertForm() {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);
  console.log(preview);

  const onUpload = (image) => {
    setPreview(image);
  };
  const onNext = () => {
    navigate("/complete");
  };

  return (
    <Container>
      <Title>인증하기</Title>
      <Form>
        <ImageUpload onUpload={onUpload} />
        {preview != null && <ImagePreview src={preview} />}
      </Form>
      <Button onClick={onNext}>다음</Button>
    </Container>
  );
}

export default TrainerCertForm;
