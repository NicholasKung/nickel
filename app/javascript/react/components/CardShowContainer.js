import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import CardShow from './CardShow'
import TransactionTile from './TransactionTile'
import Footer from './Footer'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import NewTransactionForm from './NewTransactionForm';
import ChartCategoryPercentage from './ChartCategoryPercentage'
import ChartPerCategory from './ChartPerCategory'
import ChartPercentLeft from './ChartPercentLeft'
import ChartHistogram from './ChartHistogram'
import Tooltip from '@material-ui/core/Tooltip';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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

  const handleDeleteAll = (event) => {
    event.preventDefault()
    transactions.forEach((transaction)=> {
      if(transaction.card_id == cardId) {
        deleteTransaction(transaction.id)
      }
    })
  }

  let categoryHash = {
    food:0,
    vehicle:0,
    home:0,
    other:0,
   }

  let typeHash = {
    food:0,
    vehicle:0,
    home:0,
    other:0,
  }

  let transactionHistogramData = []
  const histogram = transactions.forEach((transaction) => {
      let transactionData = [transaction.name, transaction.amount]
      transactionHistogramData.push(transactionData)
      return transactionHistogramData
  }
)

  const transactionChartData = transactions.forEach((transaction) => {
      if (transaction.category === "Food") {
        categoryHash.food += transaction.amount
        typeHash.food += 1
      } else if (transaction.category === "Vehicle") {
        categoryHash.vehicle += transaction.amount
        typeHash.vehicle += 1
      } else if (transaction.category === "Home") {
        categoryHash.home += transaction.amount
        typeHash.home += 1
      } else {
        categoryHash.other += transaction.amount
        typeHash.other += 1
      }
  })

  const remainingBalance = (num) => {
    for (let i = 0; i < transactions.length; i++) {
      if (num - transactions[i].amount >= 0) {
        num = num - transactions[i].amount
      }
      else
        return "Beyond your credit limit!"
    }
    return num
  }

  if (redirect) {
    return <Redirect to={"/cards"} />
  }

  const barPhrase = () => {
    return `${card.name} Summary`
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
      <div className = "button-add">
        <Button className = {classes.margin} variant="contained" color="primary" type="submit" href={`/cards`}>
          Back to List of Credit Cards
        </Button>
      </div>

      <div className = 'rows'>
          <div className = "columns medium-4">
            <CardShow
              cardData={card}
              deleteCard={deleteCard}
              submitNewTransaction = {submitNewTransaction}
            />
          </div>
          <div className = 'columns medium-8 chart-side'>
            <h3 className = "chart">Spending Report</h3>
              <div className = 'chart row'>
                <div className = 'chart columns medium-6'>
                  <ChartCategoryPercentage
                    chartData = {categoryHash}
                  />
                </div>
                <div className = 'columns medium-6'>
                  <ChartPercentLeft
                    card = {card}
                    left = {remainingBalance(card.limit)}
                  />
                </div>
              </div>
            <ChartPerCategory
              chartData = {typeHash}
            />
            <ChartHistogram
              chartData = {transactionHistogramData}
            />
          </div>
          <div className = 'row'>
            <div className = "columns medium-12">
              <h4>Transactions on {card.name}</h4>
              <h3>Credit Remaining: ${remainingBalance(card.limit)}</h3>
              {transactionTiles}
            </div>
            <div className = "button-delete-all">
              <Tooltip title="Warning - Will Delete All Transactions" placement="top">
                <Button className = 'button-delete-all' variant="contained" color="secondary" type="submit" onClick={handleDeleteAll}>
                  Credit Card Paid
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
    <Footer
    />
  </div>
  )
}


export default CardShowContainer
