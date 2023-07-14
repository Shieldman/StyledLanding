import React, { useEffect, useState } from "react";

const POKEMON_URL = `https://pokeapi.co/api/v2/pokemon/`;

const PokeAPI = ({pokeid}) => {
  const [currentPokemon, setCurrentPokemon] = useState();

  const getPokemon = async () => {
    
    try {
      const apiResponse = await fetch(
        `${POKEMON_URL}${pokeid}`
      ).then(response => {
        return response.json()
      })
      .then(data => {
        setCurrentPokemon(data)
      })

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getPokemon();
  },[pokeid])

  return (
    <>{currentPokemon? <div>
        <h2>{currentPokemon.name}</h2>
        <div>ID: {currentPokemon.id} </div>
        <img src={currentPokemon.sprites.front_default} alt={currentPokemon.name} />
      </div>:null}
      
    </>
  );
};

export default PokeAPI;
