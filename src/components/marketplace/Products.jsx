import React from "react";
import { Link } from "react-router-dom";

const Products = (item) => {
  return (
    <Link className="linkStyle" to={`/mp/${item.id}`}>
      <div className="products_mp card">
      <div className="images_card">
        <img
        // src={item.img1}
          src="https://cdn.akamai.steamstatic.com/steam/apps/2327780/capsule_616x353.jpg?t=1692110267"
          className="img_mp_products"
          alt="img"
        />

      </div>
        <h2>feet pic</h2>
        {/* <h2>{item.title}</h2>  */}
        <div className="prices_cards">
          <h3>$20</h3>
          {/* <h3>${item.price}</h3> */}
        </div>
      </div>
    </Link>
  );
};

export default Products;
