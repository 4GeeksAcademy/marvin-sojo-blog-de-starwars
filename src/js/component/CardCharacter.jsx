import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import more from "../../img/more.png";

const CardCharacter = () => {
  const { store, actions } = useContext(Context);
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
        {store.characters.map((character) => {
          return (
            <div key={character.url} className="card bg-dark text-white">
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${
                  character.url.split("/")[5]
                }.jpg`}
                className="card-img-top"
              />
              <div className="container">
                <h5 className="my-2">{character.name}</h5>
                <p className="m-0 p-0">Gender: {character.gender}</p>
                <p className="m-0 p-0">Hair Color: {character.hair_color}</p>
                <p className="m-0 p-0">Eye-Color: {character.eye_color}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CardCharacter;
