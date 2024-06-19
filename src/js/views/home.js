import React from "react";

import "../../styles/home.css";
import CardCharacter from "../component/CardCharacter.jsx";
import CardVehicle from "../component/CardVehicle.jsx";
import CardPlanet from "../component/CardPlanet.jsx";


export const Home = () => (
  <div className="container">
    <h3 className="text-white mt-3 mb-1">Characters</h3>
    <div className="">
      <CardCharacter />
    </div>
    <h3 className="text-white mt-3 mb-1">Planets</h3>
    <div className="d-flex">
      <CardPlanet />
    </div>
    <h3 className="text-white mt-3 mb-1">vehicles</h3>
    <div className="d-flex">
      <CardVehicle />
    </div>
  </div>
);
