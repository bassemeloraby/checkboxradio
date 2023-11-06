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
    </div>
  );
};

export default Header;
