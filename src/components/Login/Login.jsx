import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="container login_container">
    <div className="logo">
        <img src="https://w7.pngwing.com/pngs/68/505/png-transparent-whatsapp-message-icon-whatsapp-logo-whatsapp-logo-text-logo-grass.png" alt="" />
    </div>
      <div className="loginform">
      <h1>Get Started</h1>
        <div>
          <input type="text"  placeholder="Enter your Number"/>
        </div>
        <div>
          <input type="password" placeholder="Enter your Password" />
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Login;
