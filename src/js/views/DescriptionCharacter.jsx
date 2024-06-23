import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const DescriptionCharacter = () => {
  const params = useParams();
  const { store } = useContext(Context);
  const descriptionCharacter = store.characters.find(
    (item) => item.url.split("/")[5] == params.id
  );

  return (
    <div className="container bg-dark mt-3 px-0">
      <div className="row">
        <div className="container col-md-4">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${
              descriptionCharacter.url.split("/")[5]
            }.jpg`}
            className="container img-fluid"
            alt="..."
          />
        </div>
        <div className="container col-md-8">
          <h3 className="container card-title text-white my-3">
            {descriptionCharacter.name}
          </h3>
          <div className="container row">
            <div className="col-md-5">
              <p className="card-text text-secondary">
                <span className="text-white">Height:</span>{" "}
                {descriptionCharacter.height}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Mass:</span>{" "}
                {descriptionCharacter.mass}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Hair-Color:</span>{" "}
                {descriptionCharacter.hair_color}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Skin-Color:</span>{" "}
                {descriptionCharacter.skin_color}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Eye-Color:</span>{" "}
                {descriptionCharacter.eye_color}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Birth-Year:</span>{" "}
                {descriptionCharacter.birth_year}
              </p>
            </div>
            <div className="col-md-5 mt-3">
              <p className="card-text text-secondary">
                <span className="text-white">Gender:</span>{" "}
                {descriptionCharacter.gender}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Homeworld:</span>{" "}
                {descriptionCharacter.homeworld}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Created:</span>{" "}
                {descriptionCharacter.created}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Edited:</span>{" "}
                {descriptionCharacter.edited}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Url:</span>{" "}
                {descriptionCharacter.url}
              </p>
            </div>
          </div>

          <div className="container row mt-4">
            {descriptionCharacter.films != "" && (
              <ul className="container col text-white list-unstyled">
                films:
                {descriptionCharacter.films.map((film) => {
                  return (
                    <li className="text-secondary" key={film}>
                      {film}
                    </li>
                  );
                })}
              </ul>
            )}

            {descriptionCharacter.species != "" && (
              <ul className="container col text-white list-unstyled">
                Species:
                {descriptionCharacter.species.map((specie) => {
                  return (
                    <li className="text-secondary" key={specie}>
                      {specie}
                    </li>
                  );
                })}
              </ul>
            )}

            {descriptionCharacter.vehicles != "" && (
              <ul className="container col text-white list-unstyled">
                Vehicles:
                {descriptionCharacter.vehicles.map((vehicle) => {
                  return (
                    <li className="text-secondary" key={vehicle}>
                      {vehicle}
                    </li>
                  );
                })}
              </ul>
            )}

            {descriptionCharacter.starships != "" && (
              <ul className="container col text-white list-unstyled">
                Starships:
                {descriptionCharacter.starships.map((starship) => {
                  return (
                    <li className="text-secondary" key={starship}>
                      {starship}
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

export default DescriptionCharacter;
