import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const DescriptionPlanet = () => {
  const params = useParams();
  const { store } = useContext(Context);
  const descriptionPlanet = store.planets.find(
    (item) => item.url.split("/")[5] == params.id
  );
  

  return (
    <div className="container bg-dark mt-3 px-0">
      <div className="row">
        <div className="container col-md-4">
          <img
            src={
              descriptionPlanet.name == "Tatooine"
                ? `https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/4/4b/Tatooine-3.jpg?width=800`
                : `https://starwars-visualguide.com/assets/img/planets/${
                    descriptionPlanet.url.split("/")[5]
                  }.jpg`
            }
            className="container img-fluid"
            alt="..."
          />
        </div>
        <div className="container col-md-8">
          <h3 className="container card-title text-white my-3">
            {descriptionPlanet.name}
          </h3>
          <div className="container row">
            <div className="col-md-5">
              <p className="card-text text-secondary">
                <span className="text-white">Rotation Period:</span>{" "}
                {descriptionPlanet.rotation_period}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Orbital Period:</span>{" "}
                {descriptionPlanet.orbital_period}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Diameter:</span>{" "}
                {descriptionPlanet.diameter}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Climate:</span>{" "}
                {descriptionPlanet.climate}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Gravity:</span>{" "}
                {descriptionPlanet.gravity}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Terrain:</span>{" "}
                {descriptionPlanet.terrain}
              </p>
            </div>
            <div className="col-md-5 mt-3">
              <p className="card-text text-secondary">
                <span className="text-white">Surface Water:</span>{" "}
                {descriptionPlanet.surface_water}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Population:</span>{" "}
                {descriptionPlanet.population}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Created:</span>{" "}
                {descriptionPlanet.created}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Edited:</span>{" "}
                {descriptionPlanet.edited}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Url:</span> {descriptionPlanet.url}
              </p>
            </div>
          </div>
          <div className="container row mt-4">
            {descriptionPlanet.residents != "" && (
              <ul className="col-md-5 text-white list-unstyled">
                Residents:
                {descriptionPlanet.residents.map((resident) => {
                  return (
                    <li className="text-secondary" key={resident}>
                      {resident}
                    </li>
                  );
                })}
              </ul>
            )}

            {descriptionPlanet.films != "" && (
              <ul className="col-md-5 text-white list-unstyled">
                Films:
                {descriptionPlanet.films.map((film) => {
                  return (
                    <li key={film} className="text-secondary">
                      {film}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionPlanet;


