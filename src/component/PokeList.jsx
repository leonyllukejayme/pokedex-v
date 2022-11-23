import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'

const PokeList = () => {
  const[allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=100')

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(results) {
      results.forEach(async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        setAllPokemons(currentList => [...currentList, data])
        await allPokemons.sort((a,b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)
    console.log(data)
  }



  
  useEffect(() => {
    getAllPokemons()
 }, [])
    

  return (
    <div className="app-container">
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map((pokemon, index) => 
              <PokemonCard
              id={pokemon.id}
              name={pokemon.name[0].toUpperCase()+pokemon.name.slice(1)}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              key={index} 
              />
          )}
        </div>
      </div>
    </div>
  )
}

export default PokeList