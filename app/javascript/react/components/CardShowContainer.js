import React, { useState, useEffect } from 'react'
import CardShow from './CardShow'

const CardShowContainer = (props) => {
  const [ card, setCard ] = useState({})

  let cardId = props.match.params.id

  useEffect (() => {
    fetch(`/api/v1/cards/${cardId}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        const error = new Error(`${response.status}: ${response.statusText}`);
        throw(error)
      }
    })
    .then(body => {
      setCard(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }, [])

  return(
    <CardShow
      cardData = {card}
    />
  )
}


export default CardShowContainer
