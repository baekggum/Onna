import { createContext, useState, useContext } from "react";
import "./Details.css";
import Plus from "/assets/Plus.svg";

// DetailsContext.js
export const DetailsContext = createContext();

export const DetailsProvider = ({ children }) => {
  const [details, setDetails] = useState({
    image: null,
    title: "",
    content: "",
  });

  return (
    <DetailsContext.Provider value={{ details, setDetails }}>
      {children}
    </DetailsContext.Provider>
  );
};

// Details.js
const Details = () => {
  const { details, setDetails } = useContext(DetailsContext);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setDetails((prevDetails) => ({
        ...prevDetails,
        image: URL.createObjectURL(file),
      }));
    }
  };

  const handleRemoveImage = () => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      image: null,
    }));
  };

  const handleTitleChange = (event) => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      title: event.target.value,
    }));
  };

  const handleContentChange = (event) => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      content: event.target.value,
    }));
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
        {details.image && (
          <div className="image-preview">
            <img src={details.image} alt="미리보기" className="preview-image" />
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
          value={details.title}
          onChange={handleTitleChange}
        />
        <textarea
          className="content"
          placeholder="내용"
          value={details.content}
          onChange={handleContentChange}
        ></textarea>
      </div>
    </>
  );
};

export default Details;
