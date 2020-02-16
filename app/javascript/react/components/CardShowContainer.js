import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import CardShow from './CardShow'
import TransactionTile from './TransactionTile'
import Footer from './Footer'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import NewTransactionForm from './NewTransactionForm';


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));


const CardShowContainer = (props) => {
  const [ card, setCard ] = useState({})
  const [ redirect, setRedirect] = useState(false)
  const [ transactions, setTransactions] = useState([])

  const classes = useStyles();

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
      setTransactions(body.transactions)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }, [])

  const deleteCard = (cardId) => {
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
        setRedirect(true)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }



  const submitNewTransaction = (formPayLoad) => {
    fetch(`/api/v1/cards/${cardId}/transactions`, {
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
      setTransactions([
        ...transactions, body
      ])
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  const deleteTransaction = (transactionId) => {
    fetch(`/api/v1/cards/${cardId}/transactions/${transactionId}`, {
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
      window.location.reload()
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  const transactionTiles = transactions.map((transaction) => {
    return(
      <div>
        <TransactionTile
          transactionData = {transaction}
          deleteTransaction={deleteTransaction}
        />
      </div>
    )
  })

  const remainingBalance = (num) => {
    for (let i = 0; i < transactions.length; i++) {
      if (num - transactions[i].amount >= 0) {
        num = num - transactions[i].amount
      }
      else
        return "You are broke by"
    }
    return num
  }

  if (redirect) {
    return <Redirect to={"/cards"} />
  }


  return(
    <div>
      <div className = "row">
        <div className = "columns medium-6">
          <CardShow
            cardData={card}
            deleteCard={deleteCard}
          />
          <Button className = {classes.margin} variant="contained" color="secondary" type="submit" href={`/cards`}>
            Back to List of Credit Cards
          </Button>
        </div>
        <div className = "columns medium-6 transaction-side">
          <h4>Transactions on this card</h4>
          <h3>Limit:${card.limit}</h3>
          <h3>Credit Remaining:${remainingBalance(card.limit)}</h3>
          <div>
            <h4>Description || Category || Amount</h4>
          </div>
          {transactionTiles}
          <NewTransactionForm
            onSubmit = {submitNewTransaction}
          />
        </div>
      </div>
      <Footer
      />
    </div>
  )
}


export default CardShowContainer
