import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const DescriptionPlanet = () => {
  const params = useParams();
  const { store } = useContext(Context);
  const descriptionPlanet = store.planets.find(
    (item) => item.url.split("/")[5] == params.id
  );
  console.log(descriptionPlanet);

  return (
    <div className="container bg-dark mt-3 px-0">
      <div className="row">
        <div className="container col-md-4">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${
              descriptionPlanet.url.split("/")[5]
            }.jpg`}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionPlanet;

/**
 * {
      "name": "Tatooine",
      "rotation_period": "23",
      "orbital_period": "304",
      "diameter": "10465",
      "climate": "arid",
      "gravity": "1 standard",
      "terrain": "desert",
      "surface_water": "1",
      "population": "200000",
      "residents": [
        "https://swapi.dev/api/people/1/",
        "https://swapi.dev/api/people/2/",
        "https://swapi.dev/api/people/4/",
        "https://swapi.dev/api/people/6/",
        "https://swapi.dev/api/people/7/",
        "https://swapi.dev/api/people/8/",
        "https://swapi.dev/api/people/9/",
        "https://swapi.dev/api/people/11/",
        "https://swapi.dev/api/people/43/",
        "https://swapi.dev/api/people/62/"
      ],
      "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/"
      ],
      "created": "2014-12-09T13:50:49.641000Z",
      "edited": "2014-12-20T20:58:18.411000Z",
      "url": "https://swapi.dev/api/planets/1/"
    },
 */
