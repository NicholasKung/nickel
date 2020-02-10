import React from 'react'

const CardTile = (props) => {

  return(
    <div className = "card-tile">
      <h1>{props.cardData.name}</h1>
      <img src = {props.cardData.image} />
      <h3>{props.cardData.description}</h3>
      <p>Expiration Date: {props.cardData.date} Limit: ${props.cardData.limit} Annual Fee: ${props.cardData.fee}</p>
    </div>
  )
}

export default CardTile
