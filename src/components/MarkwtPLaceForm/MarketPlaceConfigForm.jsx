import axios from "axios";
import React, { useContext, useState } from "react";
import AuthContext from "../../contexts/authContext";
import {  useNavigate, useParams } from 'react-router-dom'

const MarketPlaceConfigForm = () => {
  const navigate = useNavigate()
  const {groupID} = useParams();

  const [mpName, setMpName] = useState("");
  const { auth } = useContext(AuthContext);

  const mpNameHandler = () => {
    console.log("group:", groupID, auth);

      
      axios.post("http://localhost:4000/market-place/create", {
        name: mpName,
        creator: auth?.uid,
        group_id: groupID
      }).then(res=>{
        if(res.data.success){
          alert("success");
          navigate(`/mp/${groupID}`)
        }
      });
  };
  return (
    <div className="mpName">
      <input
        type="text"
        placeholder="Enter MarketPlace Name"
        value={mpName}
        onChange={(e) => setMpName(e.target.value)}
      />{" "}
      <br />
      <button onClick={mpNameHandler}>Submit</button>
    </div>
  );
};

export default MarketPlaceConfigForm;
