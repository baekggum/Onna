import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { MdHome } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaShareAlt } from "react-icons/fa";
import DetailClickButton from "./DetailClickButton";
import { useState } from "react";

const DetailInfoText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16pt;
`;

const DetailButtons = styled.ul`
  margin-top: 30px;
  padding: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  list-style: none;
  text-align: center;

  .Icons {
    width: 80px;
    height: 80px;
  }
`;

const DetailButtons2 = styled.ul`
  margin-top: 30px;
  padding: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  list-style: none;
  text-align: center;

  li {
    width: 100%;
    height: 100px;
  }
`;

const DetailButtons2Button = styled.button`
  width: 100%;
  height: 100%;
  font-size: 20pt;

  background-color: ${(props) =>
    props.selected ? "#d3d3d3" : "white"}; // 선택된 버튼의 배경색
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const DetailButtons2Info = styled.div`
  width: 100%;
  height: 54%;

  overflow: hidden;
  overflow-y: scroll;
  border-top: 1px solid #d9d9d9;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function DetailInformation() {
  const location = useLocation();
  const data = location.state; // 전달된 데이터를 가져옴
  console.log(data);
  const [selectedButton, setSelectedButton] = useState("소개");

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <img
          src={data.image}
          style={{ width: "180px", borderRadius: "20px", margin: "0 0 10px" }}
        />
        <p style={{ margin: "0", padding: "0 10px" }}>{data.description}</p>
      </div>
      <DetailInfoText>
        <IoMdPhonePortrait />
        {data.phoneNum}
      </DetailInfoText>
      <DetailInfoText>
        <MdHome />
        {data.location}
      </DetailInfoText>
      <DetailButtons>
        <li>
          <FcLike className="Icons" />
          <p>{data.productLike}</p>
        </li>
        <li>
          <FaLocationDot className="Icons" />
          <p>위치</p>
        </li>
        <li>
          <FaPhoneAlt className="Icons" />
          <p>전화</p>
        </li>
        <li>
          <FaShareAlt className="Icons" />
          <p>공유</p>
        </li>
      </DetailButtons>
      <DetailButtons2>
        <li>
          <DetailButtons2Button
            onClick={() => handleButtonClick("소개")}
            selected={selectedButton === "소개"} // 선택된 상태 확인
          >
            소개
          </DetailButtons2Button>
        </li>
        <li>
          <DetailButtons2Button
            onClick={() => handleButtonClick("장소")}
            selected={selectedButton === "장소"} // 선택된 상태 확인
          >
            장소
          </DetailButtons2Button>
        </li>
        <li>
          <DetailButtons2Button
            onClick={() => handleButtonClick("메뉴")}
            selected={selectedButton === "메뉴"} // 선택된 상태 확인
          >
            메뉴
          </DetailButtons2Button>
        </li>
        <li>
          <Link to="review" state={data} style={{ color: "black" }}>
            <DetailButtons2Button
              onClick={() => handleButtonClick("리뷰")}
              selected={selectedButton === "리뷰"} // 선택된 상태 확인
            >
              리뷰
            </DetailButtons2Button>
          </Link>
        </li>
      </DetailButtons2>
      <DetailButtons2Info>
        <DetailClickButton selectedButton={selectedButton} data={data} />
      </DetailButtons2Info>
    </>
  );
}
