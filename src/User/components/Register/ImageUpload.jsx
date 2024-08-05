/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const FilePath = styled.div`
  width: 100%;
  height: 32px;
  padding: 4px 8px;
  font-size: 1rem;
  background-color: #f5f5f5;
  border-radius: 4px;
  text-overflow: ellipsis;
`;

const UploadFile = styled.button`
  width: 100px;
  height: 32px;
  margin-left: 16px;
  font-size: 1rem;
  background-color: #d9d9d9;
  border: none;
  border-radius: 4px;
  outline: none;
`;

function ImageUpload({ onUpload }) {
  const fileRef = useRef(null);
  const [filePath, setFilePath] = useState("");

  const onClick = () => fileRef.current.click();
  const handleUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise((resolve) => {
      reader.onload = () => {
        onUpload(reader.result);
        setFilePath(file.name);
        resolve();
      };
    });
  };

  return (
    <Container>
      <FilePath>{filePath}</FilePath>
      <UploadFile onClick={onClick}>파일선택</UploadFile>
      <input
        ref={fileRef}
        style={{ display: "none" }}
        name="certificate"
        accept="image/*"
        type="file"
        multiple
        onChange={handleUpload}
      />
    </Container>
  );
}

export default ImageUpload;
