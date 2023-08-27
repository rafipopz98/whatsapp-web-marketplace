import { useContext, useState, useEffect } from "react";
import Singlemsg from "../Singlemsg/Singlemsg";
import "./LeftSide.css";
import Group from "./Group";
import AuthContext from "../../contexts/authContext";
import axios from "axios";
import { useNavigate, } from "react-router-dom";

const LeftSide = ({setCurrGroup}) => {
  const [modalu, setModalu] = useState(false);
  const [both, setBoth] = useState(true);
  const [groups, setGroups] = useState([]);
  const navigate = useNavigate()

  const { auth, setAuth } = useContext(AuthContext);

  useEffect(() => {
    let user;
    if (auth !== undefined) {
      user = JSON.parse(localStorage.getItem("user"));
      setAuth(user);
    } else user = auth;
    const query = `http://localhost:4000/group/${user?.phoneNumber}`;
    console.log(query);
    axios.get(query).then((res) => {
      console.log(res.data);
      if (res.data.success) setGroups(res.data.data);
    });
  }, []);

  const modulu = () => {
    console.log("lol");
    setModalu(!modalu);
    setBoth(!both);
    console.log(auth?.phoneNumber);
  };

  const groupadd = () => {
    console.log("grp add btn");
    // setModalu(!modalu);
    setBoth(!both);
  };

  

  const logoutHandler = () => {
    console.log("logged out");
    // setAuth(localStorage.clear())
    setAuth({});
    localStorage.clear();
    navigate('/login')

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
                <li>
                  <p onClick={logoutHandler} className="hahaha">
                    Logout
                  </p>
                </li>
              </ul>
              {both && <Group />}
              {/* <Group /> */}
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
        {groups.length !==0 &&
          groups.map((el, i) => (
          
          <Singlemsg  key={i} group={el} setCurrGroup={setCurrGroup} />))}
      </div>
    </div>
  );
};

export default LeftSide;
