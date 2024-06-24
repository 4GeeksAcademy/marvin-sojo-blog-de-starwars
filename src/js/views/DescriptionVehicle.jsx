import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const DescriptionVehicle = () => {
  const params = useParams();
  const { store } = useContext(Context);
  const descriptionVehicle = store.vehicles.find(
    (item) => item.url.split("/")[5] == params.id
  );

  return (
    <div className="container bg-dark mt-3 px-0">
      <div className="row">
        <div className="container col-md-4">
          <img
            src={`https://starwars-visualguide.com/assets/img/vehicles/${
              descriptionVehicle.url.split("/")[5]
            }.jpg`}
            className="container img-fluid"
            alt="..."
          />
        </div>
        <div className="container col-md-8">
          <h3 className="container card-title text-white my-3">
            {descriptionVehicle.name}
          </h3>
          <div className="container row">
            <div className="col-md-5">
              <p className="card-text text-secondary">
                <span className="text-white">Model:</span>{" "}
                {descriptionVehicle.model}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Manufacturer:</span>{" "}
                {descriptionVehicle.manufacturer}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Cost in Credits:</span>{" "}
                {descriptionVehicle.cost_in_credits}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Length:</span>{" "}
                {descriptionVehicle.length}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Max Atmosphering Speed:</span>{" "}
                {descriptionVehicle.max_atmosphering_speed}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Crew:</span>{" "}
                {descriptionVehicle.crew}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Passengers:</span>{" "}
                {descriptionVehicle.passengers}
              </p>
            </div>
            <div className="col-md-5 mt-3">
              <p className="card-text text-secondary">
                <span className="text-white">Cargo Capacity:</span>{" "}
                {descriptionVehicle.cargo_capacity}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Consumables:</span>{" "}
                {descriptionVehicle.consumables}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Vehicle Class:</span>{" "}
                {descriptionVehicle.vehicle_class}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Created:</span>{" "}
                {descriptionVehicle.created}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Edited:</span>{" "}
                {descriptionVehicle.edited}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Url:</span>{" "}
                {descriptionVehicle.url}
              </p>
            </div>
          </div>
          <div className="container row mt-4">
            <ul className="col-md-5 text-white list-unstyled">
              Pilots:
              {descriptionVehicle.pilots.map((pilot) => {
                return (
                  <li className="text-secondary" key={pilot}>
                    {pilot}
                  </li>
                );
              })}
            </ul>
            <ul className="col-md-5 text-white list-unstyled">
              Films:
              {descriptionVehicle.films.map((film) => {
                return (
                  <li key={film} className="text-secondary">
                    {film}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionVehicle;
