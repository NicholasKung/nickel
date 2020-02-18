import React from 'react'
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button';
import NewTransactionForm from './NewTransactionForm'

const CardShow = (props) => {

  const handleDelete = (event) => {
    event.preventDefault()
    props.deleteCard(props.cardData.id)
  }

  return(
    <div>
      <div className = "columns medium-12 card-tile">
        <div className = "rows">
          <h1>{props.cardData.name}</h1>
          <img src = {props.cardData.image} />
          <h3>{props.cardData.description}</h3>
          <p>Expiration Date: {props.cardData.date} Limit: ${props.cardData.limit} Annual Fee: ${props.cardData.fee}</p>
          <Button variant="contained" color="primary" type="submit" onClick={handleDelete}>
            Delete Card
          </Button>
          <Button variant="contained" color="primary" type="submit" href={`/cards/${props.cardData.id}/edit`}>
            Edit Card
          </Button>
        </div>
        <div className = 'rows'>
          <NewTransactionForm
            onSubmit = {props.submitNewTransaction}
          />
        </div>
      </div>
    </div>
  )
}

export default CardShow
