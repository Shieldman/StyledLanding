import React, { useEffect, useState } from "react";
import { UiPokeCard } from "../styles/components/UiPokeCard";

const POKEMON_URL = `https://pokeapi.co/api/v2/pokemon/`;

const PokeAPI = ({pokeid}) => {
  const [currentPokemon, setCurrentPokemon] = useState([]);

  const getPokemon = async () => {
    
    try {
      const apiResponse = await fetch(
        `${POKEMON_URL}${pokeid}`
      ).then(response => {
        return response.json()
      })
      .then(data => {
        setCurrentPokemon([...currentPokemon,data])
      })

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getPokemon();
  },[pokeid])

  return (
    <>
    {currentPokemon? currentPokemon.map((poke)=>(<UiPokeCard key={poke.id}>
        <h2>{poke.name}</h2>
        <div>ID: {poke.id} </div>
        <img src={poke.sprites.front_default} alt={poke.name} />
      </UiPokeCard>)) :null}
    </>
  );
};

export default PokeAPI;
