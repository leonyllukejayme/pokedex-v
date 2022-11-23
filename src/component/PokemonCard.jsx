import React from 'react'

const PokemonCard = ({id, name, image, type}) => {
  return (
        <div className="container">
            <div className="number">
                <small>#{id}</small>
            </div>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <small>Type: {type}</small>
        </div>
  )
}

export default PokemonCard