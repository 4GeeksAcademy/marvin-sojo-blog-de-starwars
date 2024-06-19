import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardVehicle = () => {
  const { store } = useContext(Context);
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  console.log(store.vehicles);
  return (
    <div className="container align-items-center bg-success">
      <div className="bg-light">
      <Slider {...settings}>
        {store.vehicles.map((vehicle) => {
          return (
            <div key={vehicle.url} className="card bg-warning text-white">
              <img
                src={`https://starwars-visualguide.com/assets/img/vehicles/${
                  vehicle.url.split("/")[5]
                }.jpg`}
                className="card-img-top"
              />
              <div className="container">
                <h5 className="my-2">{vehicle.name}</h5>
                <p className="m-0 p-0">Model: {vehicle.model}</p>
                <p className="m-0 p-0">Manufacturer: {vehicle.manufacturer}</p>
              </div>
            </div>
          );
        })}
      </Slider>
      </div>
    </div>
  );
};

export default CardVehicle;
