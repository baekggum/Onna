export default function Reservation({ data }) {
  const totalPrice = data.price * data.dateCount; // 총 결제 금액 계산
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "200px",
        borderTop: "1px solid #d9d9d9",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "80%",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "20pt",
        }}
      >
        <div>
          <p style={{ margin: "0", padding: "0" }}>총 결제 금액</p>
          <p style={{ margin: "0", padding: "0" }}>{totalPrice}</p>
        </div>
        <button
          width="100px"
          style={{
            backgroundColor: "transparent",
            height: "fit-content",
            border: "1px solid #d9d9d9",
          }}
        >
          예약하기
        </button>
      </div>
    </div>
  );
}
