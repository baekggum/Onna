import "./LocationDrop.css";
import { useState } from "react";

export default function LocationDrop() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [location, setLocation] = useState("대구광역시");

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectLocation = (loc) => {
    setLocation(loc);
    setDropdownOpen(false);
  };

  return (
    <div className="location-container">
      <button className="location-btn" onClick={toggleDropdown}>
        {location}
      </button>
      <div className={`dropdown-menu ${dropdownOpen ? "active" : ""}`}>
        <div
          className="dropdown-item"
          onClick={() => selectLocation("서울특별시")}
        >
          서울특별시
        </div>
        <div
          className="dropdown-item"
          onClick={() => selectLocation("부산광역시")}
        >
          부산광역시
        </div>
        <div
          className="dropdown-item"
          onClick={() => selectLocation("인천광역시")}
        >
          인천광역시
        </div>
        <div
          className="dropdown-item"
          onClick={() => selectLocation("광주광역시")}
        >
          광주광역시
        </div>
        <div
          className="dropdown-item"
          onClick={() => selectLocation("대구광역시")}
        >
          대구광역시
        </div>
        <div
          className="dropdown-item"
          onClick={() => selectLocation("울산광역시")}
        >
          울산광역시
        </div>
        <div
          className="dropdown-item"
          onClick={() => selectLocation("대전광역시")}
        >
          대전광역시
        </div>
        <div
          className="dropdown-item"
          onClick={() => selectLocation("제주/서귀포")}
        >
          제주/서귀포
        </div>
        <div className="dropdown-item" onClick={() => selectLocation("경기도")}>
          경기도
        </div>
        <div
          className="dropdown-item"
          onClick={() => selectLocation("경상북도")}
        >
          경상북도
        </div>
        <div
          className="dropdown-item"
          onClick={() => selectLocation("경상남도")}
        >
          경상남도
        </div>
        <div className="dropdown-item" onClick={() => selectLocation("강원도")}>
          강원도
        </div>
        <div
          className="dropdown-item"
          onClick={() => selectLocation("충청북도")}
        >
          충청북도
        </div>
        <div
          className="dropdown-item"
          onClick={() => selectLocation("충청남도")}
        >
          충청남도
        </div>
        <div
          className="dropdown-item"
          onClick={() => selectLocation("전라북도")}
        >
          전라북도
        </div>
        <div
          className="dropdown-item"
          onClick={() => selectLocation("전라남도")}
        >
          전라남도
        </div>
      </div>
    </div>
  );
}
