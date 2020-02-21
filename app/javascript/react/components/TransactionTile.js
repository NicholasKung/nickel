import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';



const TransactionTile = (props) => {


const handleDelete = (event) => {
  event.preventDefault()
  props.deleteTransaction(props.transactionData.id)
}

const tileColor = () => {
  if (props.transactionData.category === "Food") {
    return "transaction-tile food"
  }
  else if (props.transactionData.category === "Vehicle") {
    return "transaction-tile vehicle"
  }
  else if (props.transactionData.category === "Home") {
    return "transaction-tile home"
  }
  else {
    return "transaction-tile other"
  }
}

  return(
    <div className = "columns medium-4">
      <div className = {tileColor()}>
        <div>
          <h3>{props.transactionData.name}</h3>
          <h4>${props.transactionData.amount}</h4>
          <h5>{props.transactionData.category}</h5>
          <div className = "button-delete">
            <Button variant="contained" color="primary" type="submit" onClick={handleDelete}>
              X
            </Button>
          </div>
        </div>
        <p>Entered: {props.transactionData.transaction_time}</p>
      </div>
    </div>
  )
}

export default TransactionTile
