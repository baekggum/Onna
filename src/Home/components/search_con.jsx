import { useEffect, useState } from "react";
import "./search_con.css";
import back from "/assets/Back_black.svg";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchCon = () => {
  // State to store the selected address components
  const [doSpecialCity, setDoSpecialCity] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [roadAddress, setRoadAddress] = useState("");
  const [aptAddress, setAptAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");

  // Load Daum Postcode API script on component mount
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Function to open the Daum Postcode popup
  const searchAddress = () => {
    new window.daum.Postcode({
      oncomplete: (data) => {
        // Parse the data object to extract required fields
        const address = data.address;
        const zonecode = data.zonecode;
        // Split the address into components
        const [doCity, ...rest] = address.split(" ");
        const district = rest.slice(0, 2).join(" "); // Usually city and district
        const road = rest.slice(2).join(" "); // Road name address

        setDoSpecialCity(doCity);
        setCity(rest[0]);
        setDistrict(district);
        setRoadAddress(road);
        setAptAddress;
        setPostalCode(zonecode);
      },
    }).open();
  };

  const location = useLocation();
  const navigate = useNavigate();

  const createProduct = async (data, image) => {
    console.log(data);
    console.log(image);
    const formData = new FormData();
    formData.append(
      "productDto",
      new Blob([JSON.stringify(data)], {
        type: "application/json",
      })
    );
    formData.append("image", image);

    const response = await axios.post(
      `${import.meta.env.VITE_APP_URL}/product/create`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  };

  const onClick = async () => {
    const address = [
      doSpecialCity,
      city,
      district,
      roadAddress,
      aptAddress,
      postalCode,
    ].join(" ");
    const data = {
      ...location.state,
      address,
      startTime: new Date(),
      endTime: new Date(),
      closeDay: "",
    };
    const image = data.image;
    delete data.image;

    const product = await createProduct(data, image);
    navigate("/menureg", {
      state: {
        productId: product.productId,
      },
    });
  };

  return (
    <div className="container">
      <div className="headbar">
        <button>
          <img src={back} alt="backIcon" onClick={() => navigate(-1)} />
        </button>
        <div className="addin">
          <h3>주소 확인</h3>
        </div>
      </div>
      <div className="addBox">
        <div className="inputWrapper">
          <input
            type="text"
            placeholder="도/특별,광역시"
            value={doSpecialCity}
            readOnly
          />
          <div className="line"></div>
          <input type="text" placeholder="도시" value={city} readOnly />
          <div className="line"></div>
          <input type="text" placeholder="군/구" value={district} readOnly />
          <div className="line"></div>
          <input
            type="text"
            placeholder="도로명주소"
            value={roadAddress}
            readOnly
          />
          <div className="line"></div>
          <input
            type="text"
            placeholder="아파트 동/호 건물명"
            value={aptAddress}
            onChange={(e) => setAptAddress(e.target.value)}
          />
          <div className="line"></div>
          <input
            type="text"
            placeholder="우편번호"
            value={postalCode}
            readOnly
          />
        </div>
      </div>
      <div className="addinput">
        <button onClick={searchAddress}>주소입력</button>
      </div>
      <div className="regAcon">
        <button className="regA" onClick={onClick}>
          확인
        </button>
      </div>
    </div>
  );
};

export default SearchCon;
