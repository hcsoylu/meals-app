import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-red-500 h-16 flex items-center">
      <div className="flex justify-between sm:px-10 px-5 w-full items-center text-white">
        <Link to="/">
          <h3 className="sm:text-2xl text-xl">Meal App</h3>
        </Link>

        <div className="flex items-center">
          <Link to="/categories">
            <span className="sm:pl-4 pl-2 sm:text-xl">Categories</span>
          </Link>
          <Link to="/random">
            {" "}
            <span className="sm:pl-4 pl-2 sm:text-xl">Random Meal</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
