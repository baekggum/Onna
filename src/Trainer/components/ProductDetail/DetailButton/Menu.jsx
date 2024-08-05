import { useNavigate } from "react-router-dom";

export default function Menu({ data }) {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 가져오기

  const handleItemClick = (item) => {
    navigate("reservation", { state: item }); // '/detail' 경로로 이동하며 item 정보를 state로 전달
  };
  return (
    <div>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => handleItemClick(item)}
          >
            <img
              src={item.img}
              width="150px"
              height="150px"
              style={{ margin: "20px" }}
            />
            <p style={{ fontSize: "20pt" }}>
              {item.name}
              <br />
              {item.price} 원
            </p>
          </div>
        ))
      ) : (
        <p>메뉴 정보가 없습니다.</p>
      )}
    </div>
  );
}
