import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="p-2">
      <Link to="/" className=" btn btn-primary">
        home
      </Link>
      <Link to="/filter1" className=" btn btn-primary">
        filter1
      </Link>
      <Link to="/filter2" className=" btn btn-primary">
        filter2
      </Link>
      <Link to="/filter3" className=" btn btn-primary">
        filter3
      </Link>
      <Link to="/filter4" className=" btn btn-primary">
        and
      </Link>
      <Link to="/cuisine" className=" btn btn-primary">
        Cuisine
      </Link>
      <Link to="/filterC" className=" btn btn-success">
        Filter Cuisine
      </Link>
      <Link to="/cosmoticSF" className=" btn btn-success">
        cosmoticSF{" "}
      </Link>
    </div>
  );
};

export default Header;
