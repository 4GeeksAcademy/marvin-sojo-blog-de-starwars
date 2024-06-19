import React from "react";
import { Link } from "react-router-dom";

import logoStarWars from "../../img/logo-starwars.png";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark sticky-top bg-dark">
        <div className="container py-2">
          <div className="col-lg-1">
            <Link to="/">
              <span className="navbar-brand mb-0">
                <img className="brand" alt="Bootstrap" width="120" height="auto" src={logoStarWars} />
              </span>
            </Link>
          </div>
          <div className="ml-auto">
            <Link to="/demo">
              <button className="btn btn-dark">
                Favorite
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};