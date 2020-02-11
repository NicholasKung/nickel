import React, {useState, useEffect} from 'react'
import CardTile from './CardTile.js'

const CardIndex = (props) => {
  const [cards, setCards] = useState([])

  useEffect(() =>{
    fetch('/api/v1/cards.json')
    .then(response => {
      if(response.ok) {
        return response
      } else {
        throw new Error(`${response.status}: ${response.statusText}`)
      }
    })
    .then(response => response.json())
    .then(body => {
      setCards(body)
    })
    .catch(error => {
      console.log(`Error fetching albums: ${error.message}`)
    })
  }, [])

  const cardTiles = cards.map((card) => {

    return(
      <div>
        <CardTile
          key={card.key}
          cardData={card}
          />
      </div>
    )
  })

  return(
    <div>
      <h2>Your Credit Cards</h2>
      {cardTiles}
    </div>
  )
}

export default CardIndex
