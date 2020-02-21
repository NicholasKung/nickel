import React from 'react'
import { Link } from "react-router-dom"


const CardTile = (props) => {

  return(
    <div className = "card-tile-index columns medium-4">
        <h2>{props.cardData.name}</h2>
          <Link to={`/cards/${props.cardData.id}`}>
            <img className = "img-credit" src={props.cardData.image}/>
          </Link>
        <h5>Added on: {props.cardData.card_time}</h5>
    </div>
  )
}

export default CardTile
