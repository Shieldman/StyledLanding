import React, { useEffect, useState } from 'react'
import { UiBodyContainers } from '../styles/components/UiBodyContainers'
import { UiLeftImagePokeModule } from '../styles/components/Pokemodule/UiLeftImagePokeModule'
import { UiBodyContainersRight } from '../styles/components/UiBodyContainersRight'
import PokeAPI from './PokeAPI'
import { UiPokeBodyContainer } from '../styles/components/UiPokeBodyContainer'

const PokeModule = () => {

  const [id,setId] = useState(Math.floor(Math.random()*1015));

  useEffect(()=>{},[id])

  return (
    <>
    <UiBodyContainers>
        <div>
            <UiLeftImagePokeModule src="/pokeball.png" alt="pokeball" />
        </div>
        <UiBodyContainersRight>
            <h2>Instructions</h2>
            <p>To capture a new pokemon launch the Pokeball!</p>
            <button id='getPokemonButton' onClick={()=>setId(Math.floor(Math.random()*1015))}>Launch Pokeball</button>
        </UiBodyContainersRight>
    </UiBodyContainers>
    <UiPokeBodyContainer>
      <PokeAPI pokeid={id} />
    </UiPokeBodyContainer>
    </>
  )
}

export default PokeModule