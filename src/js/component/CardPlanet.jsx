import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardPlanet = () => {
  const { store } = useContext(Context);
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  
  return (
    <div className="container">
      <Slider {...settings}>
        {store.planets.map((planet) => {
          return (
            <div key={planet.url} className="card bg-dark text-white">
              <img
                src={
                  planet.url === 404
                    ? "Imagen"
                    : `https://starwars-visualguide.com/assets/img/planets/${
                        planet.url.split("/")[5]
                      }.jpg`
                }
                className="card-img-top"
              />
              <div className="container">
                <h5 className="my-2">{planet.name}</h5>
                <p className="m-0 p-0">Population: {planet.population}</p>
                <p className="m-0 p-o">Terrain: {planet.terrain}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CardPlanet;
