import React from 'react'

const TransactionTile = (props) => {

  return(
    <div className = "transaction-tile">
      <div>
        <h3>{props.transactionData.name} || {props.transactionData.category} || ${props.transactionData.amount}</h3>
      </div>
    </div>
  )
}

export default TransactionTile
