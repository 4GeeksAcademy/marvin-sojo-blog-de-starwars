import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const DescriptionCharacter = () => {
  const params = useParams();
  const { store } = useContext(Context);
  const description = store.characters.find(
    (item) => item.url.split("/")[5] == params.id
  );

  return <div className="text-white">{description.name}</div>;
};

export default DescriptionCharacter;
