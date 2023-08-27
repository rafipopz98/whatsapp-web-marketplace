import axios from "axios";
import React, { useContext, useState } from "react";
import AuthContext from "../../contexts/authContext";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const SellItem = () => {
  const location = useLocation();

  const {groupID} = useParams();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [imgUrl, setImgUrl] = useState();
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate()

  // const mpItemAdderHandler = () => {
  //   console.log("item added");
  // };

  const mpItemAdderHandler = () => {
    console.log(location.state?.marketPlaceID, "marketPlaceID")
    axios.post("http://localhost:4000/market-place/add-products", {
    products: [
      {
        name,
        price,
        image: imgUrl,
        seller: auth?.uid,
        quantity: 1,
      },
    ],
    group_id:groupID, marketPlace_id:location.state?.marketPlaceID
    
  }).then(res =>{
    console.log(res.data);
    if(res.data.success){
      alert("added success")
      navigate(`/mp/${groupID}`)
    }else{
      alert("failure")
    }
  });
  }

  return (
    <div className="itemAdd_mp">
      <h1>Add an Item</h1>
      <input
        type="text"
        placeholder="Enter Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Product Image URL"
        value={imgUrl}
        onChange={(e) => setImgUrl(e.target.value)}
      />

      <br />
      <button onClick={mpItemAdderHandler}>Submit</button>
    </div>
  );
};

export default SellItem;
