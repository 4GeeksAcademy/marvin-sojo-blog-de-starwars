import React from "react";

import "../../styles/home.css";
import CardCharacter from "../component/CardCharacter.jsx";
import CardVehicle from "../component/CardVehicle.jsx";
import CardPlanet from "../component/CardPlanet.jsx";

export const Home = () => (
  <div className="container">
    <div className="mt-0">
      <h3 className="text-warning my-2">Characters</h3>
      <CardCharacter />
    </div>
    <h3 className="text-white mt-2 mb-1">Planets</h3>
    <div className="d-flex">
      <CardPlanet />
    </div>
    <h3 className="text-white mt-2 mb-1">vehicles</h3>
    <div className="d-flex">
      <CardVehicle />
    </div>
  </div>
);
