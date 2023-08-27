import React, { useContext, useState } from "react";
import "./PrdtDtl.css";
import axios from "axios";
import AuthContext from "../../contexts/authContext";
import { useLocation, useNavigate } from "react-router-dom";

const image0 =
  "https://podiatrystation.com/wp-content/uploads/2019/11/kids-feet.jpg";
const image1 =
  "https://thumbs.dreamstime.com/b/treatment-prevention-flat-feet-children-small-child-walks-barefoot-orthopedic-mat-puzzle-treatment-159704752.jpg";

const Details = ({item}) => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [image0, image1];
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();

  const handleBuy = () => {
    axios
      .post("http://localhost:4000/order/create", {
        products: [location.state?.item],
        buyer: auth.uid,
        marketPlaceID: location.state?.marketPlaceID,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.success) navigate(`/pay`,{state:{groupID:location.state?.groupID}});
      });
  };

  return (
    <div className="product_detail container">
      <div className="left_prdtDtl">
        <div className="images_prdtDtl">
          <img src={images[0]} onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg_prdtDtl">
          <img src={images[selectedImg]} style={{ width: "100%" }} />
        </div>
      </div>
      <div className="right_prdtDtl">
        <h1>Title</h1>
        <span className="price_dtl">$200</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim
          blanditiis eaque nulla optio dolorem, modi tenetur libero aliquid
          voluptatum, illo, eum beatae rerum ipsam totam at rem cum repellat!
        </p>
        <div className="quantity_dtl">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <div className="link_dtl">
          <div className="item_dtl" onClick={handleBuy}>
            <ion-icon name="bag-check"></ion-icon> BUY NOW
          </div>
        </div>
        <div className="info">
          <span>Vendor:polo</span>
          <span>Product-type:t-shirt</span>
          <span>Tag:t-shirt,women,top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL DETAILS</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Details;
