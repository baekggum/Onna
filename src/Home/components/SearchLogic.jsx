import { useState } from "react";
import "./SearchLogic.css";
// import searchIcon from "/path/to/searchIcon.svg"; // 검색 아이콘 경로 수정
import Back from "/assets/Back_black.svg"; // 뒤로 가기 아이콘 경로 수정
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const popularSearches = [
    "축구",
    "야구",
    "스쿼시",
    "종합격투기",
    "농구",
    "태권도",
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const data = ["축구", "야구", "스쿼시", "종합격투기", "농구", "태권도"];

    const filteredResults = data.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filteredResults);
    if (query) {
      setRecentSearches((prev) => [...new Set([query, ...prev])]);
    }
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
  };

  const navigate = useNavigate();

  return (
    <div className="search-page">
      <div className="search-header">
        <form onSubmit={handleSearch} className="search-form">
          <button className="back-button">
            <img src={Back} alt="Back" onClick={() => navigate(-1)} />
          </button>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="어떤 스포츠를 찾으시나요?"
          />
        </form>
      </div>
      <section className="recent-searches">
        <div className="section-header">
          <h3>최근 검색한 서비스</h3>
          <button className="clear-button" onClick={clearRecentSearches}>
            전체삭제
          </button>
        </div>
        <ul>
          {recentSearches.map((search, index) => (
            <li key={index}>{search}</li>
          ))}
        </ul>
      </section>
      <div className="search-body">
        <section className="popular-searches">
          <h3>인기 검색 스포츠</h3>
          <ul>
            {popularSearches.map((search, index) => (
              <li key={index}>{search}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
