export default function ReservationMenu({ data }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        borderBottom: "1px solid #d9d9d9",
        minHeight: "150px",
      }}
    >
      <div style={{ width: "70%", fontSize: "15pt" }}>
        <div style={{ display: "flex", gap: "30px" }}>
          <p>메뉴</p> <p>{data.name}</p>
        </div>
        <div style={{ display: "flex", gap: "30px" }}>
          <p>가격</p> <p>{data.price}</p>
        </div>
      </div>
      <img src="#" width="20%" height="auto" />
    </div>
  );
}
