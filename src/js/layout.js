import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import DescriptionCharacter from "./views/DescriptionCharacter.jsx";
import DescriptionPlanet from "./views/DescriptionPlanet.jsx";
import DescriptionVehicle from "./views/DescriptionVehicle.jsx";



//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/description/character/:id" element={<DescriptionCharacter />} />
            <Route path="/description/planet/:id" element={<DescriptionPlanet />} />
            <Route path="/description/vehicle/:id" element={<DescriptionVehicle />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
