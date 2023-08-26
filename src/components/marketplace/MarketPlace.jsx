import { useState } from "react";
import Navbar_MP from "./Navbar_MP";
import "./MarketPlace.css";
import Products from "./Products";

const MarketPlace = () => {
  const data = [
    {
      id: 1,
      img1: "https://cdn.akamai.steamstatic.com/steam/apps/2327780/capsule_616x353.jpg?t=1692110267",
      title: "Black hoodie",
      price: 20,
    },
    {
      id: 2,
      img1: "https://i.pinimg.com/originals/fb/6d/34/fb6d3458fa64ba2f8ad176e761ae7fd9.jpg",
      title: "Black hoodie",
      price: 12,
    },
    // {
    //   id: 3,
    //   img1: "https://arthive.net/res/media/img/orig/work/506/7545965.jpg",
    //   title: "Black hoodie",
    //   price: 12,
    // },
    // {
    //   id: 3,
    //   img1: "https://e1.pxfuel.com/desktop-wallpaper/110/350/desktop-wallpaper-oreki-houtarou-houtarou-oreki.jpg",
    //   title: "Black hoodie",
    //   price: 12,
    // },
  ];
  const [maxPrice, setMaxPrice] = useState(500);
  const [sort, setSort] = useState(null);
  return (
    <div className="container mp_container">
      <div className="upp">
        <Navbar_MP />
      </div>
      <div className="product_container_mp">
        <div className="left_products">
          <div className="filterItems">
            <h2>Product Category</h2>
            <div className="inputItem">
              <input type="checkbox" id="1" value={1} />
              <label htmlFor="1">Shoes</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id="2" value={2} />
              <label htmlFor="2">Tees</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id="3" value={3} />
              <label htmlFor="3">Cargos</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id="4" value={4} />
              <label htmlFor="4">Accessories</label>
            </div>
          </div>
          <div className="filterItems">
            <h2>Filter by Price</h2>
            <div className="inputItem">
              <span>0</span>
              <input
                type="range"
                min={0}
                max={1000}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <span>{maxPrice}</span>
            </div>
          </div>
          <div className="filterItems">
            <h2>Sort By</h2>
            <div className="inputItem">
              <input
                type="radio"
                value="asc"
                name="price"
                id="asc"
                onChange={(e) => setSort("asc")}
              />
              <label htmlFor="asc">Price [Lowest First]</label>
            </div>
            <div className="inputItem">
              <input
                type="radio"
                value="des"
                name="price"
                id="des"
                onChange={(e) => setSort("des")}
              />
              <label htmlFor="des">Price [Highest First]</label>
            </div>
          </div>
        </div>
        <div className="down_featured">
          {data.map((item) => (
          <Products item={item} key={item.id}/>
        ))}
          {/* <Products /> */}
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
