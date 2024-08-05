import { useState, useEffect } from "react";
import "./search_add.css";
import back from "/assets/Back_black.svg";
import address from "/assets/Address.svg";

const SearchAdd = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState("");

  // Daum Postcode API 스크립트를 동적으로 로드하는 함수
  const loadDaumPostcode = () => {
    const script = document.createElement("script");
    script.src =
      "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.async = true;
    document.body.appendChild(script);
  };

  // 주소 검색 함수
  const searchAddress = () => {
    new window.daum.Postcode({
      oncomplete: (data) => {
        setSelectedAddress(data.address);
        setResults([data]); // 단일 결과를 배열로 감싸서 처리
      },
    }).open();
  };

  // 컴포넌트가 마운트될 때 Daum Postcode API를 로드
  useEffect(() => {
    loadDaumPostcode();
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
  };

  return (
    <div className="container">
      <div className="headbar">
        <button>
          <img src={back} alt="backIcon" width="20" height="20" />
        </button>
        <div className="addin">
          <h3>주소 입력</h3>
        </div>
      </div>
      <div className="addsearch2">
        <img src={address} alt="address" />
        <input
          type="text"
          placeholder="주소를 입력하세요"
          value={query}
          onChange={handleInputChange}
          onBlur={searchAddress}
        />
      </div>
      <div className="results">
        {results.map((result) => (
          <div
            key={result.address}
            onClick={() => handleSelectAddress(result.address)}
          >
            {result.address}
          </div>
        ))}
      </div>
      {selectedAddress && (
        <div className="selected">
          <h4>선택한 주소:</h4>
          <p>{selectedAddress}</p>
        </div>
      )}
    </div>
  );
};

export default SearchAdd;
