import React, { useState } from "react";
import "./Group.css";

const Group = () => {
    const [contact, setContact] = useState('');
  const handleAdd = () => {
    setContact("");
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
        <input type="text" placeholder="Enter the Group Name" />
      </div>
      <div className="userAdder">
        <input type="number" placeholder="Enter user contact number" value={contact} onChange={(e)=>setContact(e.target.value)}/>
        <button onClick={handleAdd}>Add</button>
      </div>
      <div className="permission">
        <input type="checkbox" />
        <h4>Do you want to add market place</h4>
      </div>
      <div className="submit_grp">
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Group;
