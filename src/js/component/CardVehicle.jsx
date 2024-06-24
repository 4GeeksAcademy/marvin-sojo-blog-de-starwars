import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";

const CardVehicle = () => {
  const { store, actions } = useContext(Context);

  function addToFavorite(vehicle) {
    actions.addFavorite(vehicle);
  }

  return (
    <div className="row scroll-cards flex-nowrap overflow-auto gap-1">
      {store.vehicles.map((vehicle) => {
        return (
          <div
            key={vehicle.url}
            className="card col-md-3 bg-dark text-secondary p-0 overflow-hidden"
          >
            <img
              src={`https://starwars-visualguide.com/assets/img/vehicles/${
                vehicle.url.split("/")[5]
              }.jpg`}
              className="card-img-top"
            />
            <div className="container">
              <h5 className="my-2 text-white">{vehicle.name}</h5>
              <p className="m-0 p-0">Model: {vehicle.model}</p>
              <p className="m-0 p-0">Manufacturer: {vehicle.manufacturer}</p>
            </div>
            <div className="container d-flex justify-content-between align-items-end my-2 bg-dark h-100">
              <Link to={"/description/vehicle/" + vehicle.url.split("/")[5]}>
                <button className="btn btn-outline-secondary">
                  Learn more!
                </button>
              </Link>
              <button
                className="btn btn-outline-danger"
                onClick={() => addToFavorite(vehicle)}
              >
                <i className="fa-regular fa-heart"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardVehicle;
