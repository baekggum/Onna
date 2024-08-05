import "./FeeCalculator.css";
import { useState } from "react";
import back from "/assets/Back_black.svg";

export default function FeeCalculator() {
  const [amount, setAmount] = useState("");
  const feePercentage = 0.1;

  const handleInputChange = (event) => {
    const value = event.target.value.replace(/,/g, "");
    if (!isNaN(value)) {
      setAmount(value);
    }
  };

  const numericAmount = parseFloat(amount) || 0;
  const fee = numericAmount * feePercentage;
  const totalAmount = numericAmount + fee;
  const formattedAmount = amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <>
      <div className="headbar">
        <button>
          <img src={back} alt="backIcon" width="20" height="20" />
        </button>
        <h3>요금을 설정하세요</h3>
      </div>
      <section className="calculatorsection">
        <div className="feeInput">
          <h2>금액:</h2>
          <input
            type="text"
            value={formattedAmount}
            onChange={handleInputChange}
            inputMode="numeric"
            pattern="\d*"
            style={{ MozAppearance: "textfield" }}
          />
          <h2>원</h2>
        </div>
        <div className="fee-calculator">
          <div className="output">
            <div className="item2">
              <span>기본 요금:</span>{" "}
              <span>{`\u20A9${Number(amount).toLocaleString()}`}</span>
            </div>
            <div className="item">
              <span>수수료:</span>{" "}
              <span>{`\u20A9${fee.toLocaleString()}`}</span>
            </div>
            <div className="item">
              <span>손님 지불 요금:</span>{" "}
              <span>{`\u20A9${totalAmount.toLocaleString()}`}</span>
            </div>
          </div>
        </div>
        <div className="trainer-fee">
          <div className="output">
            <div className="item3">
              <span>트레이너 수입:</span>{" "}
              <span>{`\u20A9${Number(amount).toLocaleString()}`}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
