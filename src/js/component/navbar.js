import React, { useContext } from "react";
import { Link } from "react-router-dom";

import logoStarWars from "../../img/logo-starwars.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  function handleDeleteFavorite(id) {
    actions.deleteFavorite(id);
  }

  const counter = store.counterFavorites;

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark sticky-top bg-dark">
        <div className="container d-flex align-items-center py-2">
          <div className="col-lg-1">
            <Link to="/">
              <span className="navbar-brand mb-0">
                <img
                  className="brand"
                  alt="Bootstrap"
                  width="120"
                  height="auto"
                  src={logoStarWars}
                />
              </span>
            </Link>
          </div>
          <div className="ml-auto">
            <div className="btn-group">
              <button
                className="btn btn-outline-danger"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
              >
                Favorites {counter}
              </button>
              <ul className="dropdown-menu dropdown-menu-end flex-nowrap overflow-auto">
                {counter === 0 && (
                  <li className="my-2 text-center dark">Add favorites</li>
                )}
                {store.favorites.map((favorite) => {
                  return (
                    <div
                      key={favorite.url}
                      className="d-flex d-inline justify-content-between p-2"
                    >
                      <div className="d-flex d-inline">
                        <p className="my-2">
                          {favorite.url.split("/")[4] == "people"
                            ? `C`
                            : favorite.url.split("/")[4][0].toUpperCase()}
                        </p>
                        <li className="my-2 item-dropdown">
                          {" "}
                          - {favorite.name}{" "}
                        </li>
                      </div>

                      <div className="d-inline d-flex align-items-center">
                        <button
                          className="btn btn-outline-danger btn-sm my-2"
                          onClick={() => handleDeleteFavorite(favorite.url)}
                        >
                          <i className="fa-sharp fa-solid fa-trash-can"></i>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
