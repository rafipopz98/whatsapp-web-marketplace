import React from "react";
import "./Pay.css";
import { Link } from "react-router-dom";
const Pay = () => {
  return (
    <div className="container container_pay">
      <h1 style={{ color: "#000" }}>WhatsApp Payment</h1>
      <div className="logo">
        <img
          src="https://w7.pngwing.com/pngs/68/505/png-transparent-whatsapp-message-icon-whatsapp-logo-whatsapp-logo-text-logo-grass.png"
          alt=""
        />
      </div>
      <div className="icons">
        <Link to={"/"}>
          <div className="icon">
            <ion-icon name="home-outline"></ion-icon>
            Go Home
          </div>
        </Link>
        <Link to="mp">
          <div className="icon">
            <ion-icon name="storefront-outline"></ion-icon>
            Payment Processed
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Pay;
