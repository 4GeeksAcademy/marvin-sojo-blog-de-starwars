import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";

const CardPlanet = () => {
  const { store } = useContext(Context);

  const placeholderImage = "https://starwars-visualguide.com/assets/img/placeholder.jpg"

  function handleImageError(e){
    e.target.src = placeholderImage
  }

  return (
    <div className="row flex-nowrap overflow-auto gap-1">
      {store.planets.map((planet) => {
        return (
          <div key={planet.url} className="card col-md-3 bg-dark text-secondary p-0">
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${
                planet.url.split("/")[5]
              }.jpg`|| placeholderImage}
              className="card-img-top"
              onError={handleImageError}
            />
            <div className="container">
              <h5 className="my-2 text-white">{planet.name}</h5>
              <p className="m-0 p-0">Population: {planet.population}</p>
              <p className="m-0 p-o">Terrain: {planet.terrain}</p>
            </div>
            <div className="container d-flex justify-content-between my-2">
            <Link to={"/description/planet/" + planet.url.split("/")[5]}>
                <button className="btn btn-outline-secondary">
                  Learn more!
                </button>
              </Link>
              <button className="btn btn-outline-danger">
                <i className="fa-regular fa-heart"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardPlanet;
