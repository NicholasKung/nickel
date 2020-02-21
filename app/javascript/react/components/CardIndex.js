import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button';
import CardTile from './CardTile.js'
import Footer from './Footer'
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


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
      console.log(`Error fetching cards: ${error.message}`)
    })
  }, [])

  const cardTiles = cards.map((card) => {

    return (
      <div>
        <CardTile
          key={card.id}
          cardData={card}
          />
      </div>
    )
  })

  const barPhrase = () => {
  if (cards !== null && cards.length > 0) {
    return `Credit Card Data for ${cards[0].full_name}`
  } else {
    return `Credit Card Data`
  }
}

  return(
    <div>
      <AppBar color = "primary" position= "relative">
        <Toolbar>
          <Typography variant= "h6" color= "inherit" noWrap>
            {barPhrase()}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className = "row">
        {cardTiles}
      </div>
      <div className = "button-add" >
        <Button
          href={`/cards/new`}
          variant="contained"
          color="primary"
          className = "button-add"
          >
            Add a New Credit Card
        </Button>
      </div>
      <Footer />
    </div>
  )
}

export default CardIndex
