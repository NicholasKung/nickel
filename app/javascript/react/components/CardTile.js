import React from 'react'
import { Link } from "react-router-dom"


const CardTile = (props) => {

  return(
    <div className = "card-tile-index">
      <h1>{props.cardData.name}</h1>
      <Link to={`/cards/${props.cardData.id}`}>
        <img className = "img-credit" src={props.cardData.image}/>
      </Link>
      <h3>Added on: {props.cardData.card_time}</h3>
    </div>
  )
}

export default CardTile
