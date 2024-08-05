import { useState } from "react";
import "./Details.css";
import Plus from "/assets/Plus.svg";

export default function Details() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  return (
    <>
      <div className="image-upload">
        <input
          id="file-input"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
        {image && (
          <div className="image-preview">
            <img src={image} alt="미리보기" className="preview-image" />
            <button onClick={handleRemoveImage} className="remove-button">
              삭제
            </button>
          </div>
        )}
        <label htmlFor="file-input" className="upload-button">
          <img src={Plus} alt="업로드 버튼" />
        </label>
      </div>
      <div className="detailBox">
        <input
          type="text"
          className="title"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="content"
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
    </>
  );
}
