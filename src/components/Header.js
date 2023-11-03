import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/" className=" btn btn-primary">
        home
      </Link>
      <Link to="/filter1" className=" btn btn-primary">
        filter1
      </Link>
      <Link to="/filter2" className=" btn btn-primary">
        filter2
      </Link>
    </div>
  );
};

export default Header;
