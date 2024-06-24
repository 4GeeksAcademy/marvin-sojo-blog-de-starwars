import React from "react";

import "../../styles/home.css";
import CardCharacter from "../component/CardCharacter.jsx";
import CardVehicle from "../component/CardVehicle.jsx";
import CardPlanet from "../component/CardPlanet.jsx";

export const Home = () => (
  <div className="container">
    <div className="mt-2">
      <h3 className="text-white">Characters</h3>
      <CardCharacter />
    </div>

    <div className="mt-5">
      <h3 className="text-white">Planets</h3>
      <CardPlanet />
    </div>

    <div className="mt-5">
      <h3 className="text-white">Vehicles</h3>
      <CardVehicle />
    </div>
  </div>
);
