import { useState } from "react";
import Rightside from "../components/Rightside/Rightside";
import LeftSide from "../components/leftside/LeftSide";

const Home = () => {
  const [currgroup, setCurrGroup] = useState();
  return (
    <div className="container">
      <LeftSide setCurrGroup={setCurrGroup} />
      <Rightside currgroup={currgroup} />
    </div>
  );
};

export default Home;
