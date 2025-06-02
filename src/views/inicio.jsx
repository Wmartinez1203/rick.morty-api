import React, { useEffect, useState} from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.jsx";

const CharacterView = () => {
    const [character, setcharacter]=useState(null);
    useEffect(()=> {
        axios
        .get("https://rickandmortyapi.com/api/character/37")
        .then((res) => setcharacter(res.data))
        .catch((err) => console.error("Error cargando personaje", err));

    }
    )
  return (
  <div>
    <h1>Detalle del personaje Rick y Morty</h1>
    {character ? (
      <CharacterCard character={character} />
    ) : (
      <p>Cargando personaje...</p>
    )}
  </div>
);

};

export default CharacterView;