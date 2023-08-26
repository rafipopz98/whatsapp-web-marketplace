import { useState } from "react";
import "./Rightside.css";
import { Link } from "react-router-dom";

const Rightside = () => {
  const [modal, setModal] = useState(false);
  // const [marketplace, setMarketPlace] = useState([]);
  const [haham,setHaham]=useState(false)

  const lolollol = () => {
    console.log("lol");
    setModal(!modal);
  };
  const marketPlaceAdder = () => {
    console.log("ppppp");
   setHaham(!haham)
  };
  const goMarket=()=>[
    console.log("market")
  ]
  return (
    <div className="rightside">
      <div className="header_right">
        <div className="uWu">
          <img
            className="coverImg"
            src="https://www.pngfind.com/pngs/m/468-4686427_profile-demo-hd-png-download.png"
            alt="userImg"
          />
          <div>
            <h3>lolol </h3>
            <p>online</p>
          </div>
        </div>
 
        <div>
          <ul className="navbar">
            <li>
              <ion-icon name="search-outline"></ion-icon>
            </li>
            <li onClick={lolollol}>
              <ion-icon name="ellipsis-vertical-outline"></ion-icon>
            </li>
            {modal && (
              <div className="modal_container">
                <ul className="modal_ul">
                  <li>
                    <p>settings</p>
                  </li>
                  <li>
                    <p onClick={marketPlaceAdder} className="hahaha">
                      add market place
                    </p>
                  </li>
                </ul>
              </div>
            )}
          </ul>
        </div>
      </div>

      {/* chatsection */}

      <div className="chat">
        <div className="message My-message">
          <p>
            h1 <br />
            <span>12:15</span>
          </p>
        </div>
        <div className="message His-message">
          <p>
            h1 <br />
            <span>12:15</span>
          </p>
        </div>

        {/* chat input */}
      </div>
      <div className="chatbox_input_items">
        <ion-icon name="happy-outline"></ion-icon>
        <ion-icon name="attach-outline"></ion-icon>
        <input type="text" placeholder="Type a message" />
        {/* <ion-icon name="storefront-outline"></ion-icon> */}
        <Link to='/pay'>
        <ion-icon name="logo-paypal"></ion-icon>

        </Link>
        <ion-icon name="mic"></ion-icon>
        {
          haham &&(
            <div onClick={goMarket}>

            {/* <ion-icon name="happy-outline"></ion-icon> */}
            <Link to='/mp'>
            <ion-icon name="storefront-outline"></ion-icon>

            </Link>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Rightside;
