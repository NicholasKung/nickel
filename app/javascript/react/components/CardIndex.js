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
        <AppBar color = "secondary" position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Your credit cards
            </Typography>
          </Toolbar>
        </AppBar>
      {cardTiles}
      <Button
        href={`/cards/new`}
        variant="contained"
        color="primary"
        className = "add-button">
          Add a New Credit Card
      </Button>
      <Footer />
    </div>
  )
}

export default CardIndex
