import React from "react";
import { Link } from "react-router-dom";

const Navbar_MP = () => {
  return (
    <div className="navbarMP">
    <Link to='/'>
      <ion-icon name="arrow-back-outline"></ion-icon>

    </Link>
      <div className="middle_navbar_mp">
      <Link to='/mp'>
        <ion-icon name="home-outline"></ion-icon>

      </Link>
        <h4>BUY</h4>
        <h4>SELL</h4>
      </div>
      <div className="boxx">
        <img
          className="Imgg"
          src="https://www.pngfind.com/pngs/m/468-4686427_profile-demo-hd-png-download.png"
          alt="userImg"
        />
      </div>
    </div>
  );
};

export default Navbar_MP;
