import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';



const TransactionTile = (props) => {


const handleDelete = (event) => {
  event.preventDefault()
  props.deleteTransaction(props.transactionData.id)
}

  return(
    <div className = "transaction-tile">
      <div>
        <div>
          <h3>
          {props.transactionData.name} || {props.transactionData.category} || ${props.transactionData.amount}
          </h3>
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
