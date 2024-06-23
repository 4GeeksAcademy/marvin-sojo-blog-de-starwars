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
  console.log(counter);

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
            <div class="btn-group">
              <button
                className="btn btn-outline-danger"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
              >
                Favorites {counter}
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                {counter === 0 && (
                  <li className="my-2 text-center dark">Add favorites</li>
                )}
                {store.favorites.map((favorite) => {
                  return (
                    <div
                      className="d-flex justify-content-between align-items-center px-1"
                      key={favorite.url}
                    >
                      <li className="d-flex my-2">{favorite.name}</li>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => handleDeleteFavorite(favorite.url)}
                      >
                        <i className="fa-sharp fa-solid fa-trash-can"></i>
                      </button>
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

/**
 * <li className="nav-item dropdown d-flex">
              <button
                className="btn btn-outline-danger"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
              >
                Favorite {counter}
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                {store.favorites.map((favorite) => {
                  return (
                    <div
                      className="d-flex justify-content-between align-items-center px-1"
                      key={favorite.url}
                    >
                      <li className="d-flex my-2">{favorite.name}</li>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => handleDeleteFavorite(favorite.url)}
                      >
                        <i className="fa-sharp fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                  );
                })}
              </ul>
            </li>
 */
