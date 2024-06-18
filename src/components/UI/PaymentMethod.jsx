import React from "react";
import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment.css";

const PaymentMethod = ({ onPaymentComplete }) => {
  const handlePaymentSubmit = () => {
    console.log("Payment processed successfully");
    onPaymentComplete();
  };

  return (
    <>
      <div className="payment">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="paymentMethod" /> Uplata na račun
        </label>
      </div>

      <div className="payment mt-3">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="paymentMethod" /> Ček
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="paymentMethod" /> Master kartica
        </label>
        <img src={masterCard} alt="" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="paymentMethod" /> Paypal
        </label>
        <img src={paypal} alt="" />
      </div>

      <button type="button" className="btn btn-primary mt-3" onClick={handlePaymentSubmit}>
        Potvrdi Plaćanje
      </button>
    </>
  );
};

export default PaymentMethod;
