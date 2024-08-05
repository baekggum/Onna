import "./MainHead.css";
import searchIcon from "/assets/SearchW.svg";
import bell from "/assets/Bell.svg";
import LocationDrop from "./LocationDrop";

export default function MainHead() {
  return (
    <header>
      <div className="header-top">
        <h1>Soup</h1>
        <button>
          <img src={bell} alt="bell" />
        </button>
      </div>
      <div className="search-bar">
        <img src={searchIcon} alt="Search Icon" />
        <input type="text" placeholder="어떤 운동을 찾나요?" />
      </div>
      <LocationDrop />
    </header>
  );
}
