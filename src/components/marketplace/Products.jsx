import React from "react";
import { Link } from "react-router-dom";

const Products = ({item, marketPlaceID, groupID}) => {
  console.log("\n\n\n",item,"\n\n\n", item?.name, "\n\n\n")
  return (
    <Link  className="linkStyle" to={`/mp/detail`} state={{item, marketPlaceID, groupID}}>
      <div className="products_mp card">
      <div className="images_card">
        <img
        src={item.image}
          // src="https://stetson.com/cdn/shop/files/BestSellers_8-22-23_1024x.jpg?v=1692716889"
          className="img_mp_products"
          alt="img"
        />

      </div>
        <h2>{item.name}</h2>
        {/* <h2>{item.title}</h2>  */}
        <div className="prices_cards">
          <h3>${item.price}</h3>
          {/* <h3>${item.price}</h3> */}
        </div>
      </div>
    </Link>
  );
};

export default Products;
