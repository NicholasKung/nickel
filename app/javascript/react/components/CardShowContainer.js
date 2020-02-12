import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import CardShow from './CardShow'

const CardShowContainer = (props) => {
  const [ card, setCard ] = useState({})
  const [ redirect, setRedirect] = useState(false)

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

  const deleteCard = (cardId) => {
    debugger
    fetch(`/api/v1/cards/${cardId}`, {
      credentials: "same-origin",
      method: 'DELETE',
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
        debugger
        setRedirect(true)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  if(redirect) {
    return <Redirect to={"/"} />
  }

  return(
    <div>
      <CardShow
        cardData={card}
        deleteCard={deleteCard}
      />
    </div>
  )
}


export default CardShowContainer
