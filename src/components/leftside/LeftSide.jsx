import { useState } from "react";
import Singlemsg from "../Singlemsg/Singlemsg";
import "./LeftSide.css";
const LeftSide = () => {
  const [modalu, setModalu] = useState(false);
  // const [both, setBoth] = useState(false);

  const modulu = () => {
    console.log("lol");
    setModalu(!modalu);
    // setGrpHelper(!grpHelper)
  };
  const groupadd = () => {
    console.log("grp add btn");
    setModalu(!modalu);
  };
  return (
    <div className="leftSide">
      {/* header with icons */}
      <div className="ls_header">
        <div className="userImg">
          <img
            className="coverImg"
            src="https://www.pngfind.com/pngs/m/468-4686427_profile-demo-hd-png-download.png"
            alt="userImg"
          />
        </div>
        <ul className="navbar">
          <li>
            <ion-icon name="scan-circle-outline"></ion-icon>
          </li>
          <li>
            <ion-icon name="chatbox-outline"></ion-icon>
          </li>
          <li onClick={modulu}>
            <ion-icon name="ellipsis-vertical-outline"></ion-icon>
          </li>
          {modalu && (
            <div className="modal_container">
              <ul className="modal_ul">
                <li>
                  <p>Settings</p>
                </li>
                <li>
                  <p onClick={groupadd} className="hahaha">
                    Group
                  </p>
                </li>
              </ul>
            </div>
          )}
        </ul>
      </div>
      {/* search bar for searching chats and groups */}
      <div className="search_chat">
        <div>
          <input type="text" placeholder="search or start new chat" />
          <ion-icon name="search-outline"></ion-icon>
        </div>
      </div>
      {/* chatList */}
      <div className="chatlist">
        <Singlemsg />
        {/* <Singlemsg /> */}
        {/* <Singlemsg /> */}
        {/* <Singlemsg /> */}
      </div>
    </div>
  );
};

export default LeftSide;
