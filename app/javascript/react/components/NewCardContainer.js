import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import NewCardForm from './NewCardForm.js'

const NewCardContainer = (props) => {
  const [ cards, setCards ] = useState([])
  const [ redirect, setRedirect ] = useState(false)


  const submitNewCard = (formPayLoad) => {
    fetch('/api/v1/cards.json', {
      credentials: "same-origin",
      method: 'POST',
      body: JSON.stringify(formPayLoad),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => response.json())
    .then(body => {
      setCards([
        ...cards,
        body])
      setRedirect(true)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

if(redirect) {
  let cardId = cards[0].card.id
  return <Redirect to ={`/cards/${cardId}`} />
}

  return (
    <div>
      <h3>Add a new card</h3>
      <NewCardForm
        onSubmit = {submitNewCard}
      />
    </div>
  )
}

export default NewCardContainer
