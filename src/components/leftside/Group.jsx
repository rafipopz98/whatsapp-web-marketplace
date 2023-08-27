import { useState, useEffect, useContext } from "react";
import "./Group.css";
import axios from "axios";
import AuthContext from "../../contexts/authContext";

const Group = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState();
  const [marketPlace, setMarketPlace] = useState(false);
  const {auth} = useContext(AuthContext)

  useEffect(() => {
    console.log(contact);
  }, [contact]);


  const handleAdd = () => {
    // if (phoneNumber.toString() === "") return;
    setContact((el) => [...el, parseInt(phoneNumber)]);
    setPhoneNumber()
  };

  const handleSubmit = () => {
    if (name === "") return;
    axios.post("http://localhost:4000/group/create", {
      creator: parseInt(auth?.phoneNumber),
      name, marketPlace, members: contact
    }).then(res=>{
      alert(res.data);
      console.log(res.data)
    });
  };

  return (
    <div className="grpAdder">
      <div className="logo_grp">
        <img
          src="https://w7.pngwing.com/pngs/68/505/png-transparent-whatsapp-message-icon-whatsapp-logo-whatsapp-logo-text-logo-grass.png"
          alt=""
        />
      </div>
      <div className="grp_name">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter the Group Name"
        />
      </div>
      <div className="userAdder">
        <input
          type="number"
          placeholder="Enter user contact number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div className="permission">
        <input
          type="checkbox"
          value={marketPlace}
          onChange={(e) => {
            if (e.target.checked) setMarketPlace(true);
            else setMarketPlace(false);
          }}
        />
        <h4>Do you want to add market place</h4>
      </div>
      <div className="submit_grp">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Group;
