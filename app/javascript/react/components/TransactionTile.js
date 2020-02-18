import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));

const TransactionTile = (props) => {

const classes = useStyles();

const handleDelete = (event) => {
  event.preventDefault()
  props.deleteTransaction(props.transactionData.id)
}

  return(
    <div className = "transaction-tile">
      <div>
        <h3>{props.transactionData.name} || {props.transactionData.category} || ${props.transactionData.amount}</h3>
        <p>Entered: {props.transactionData.transaction_time}</p>
        <Button className = {classes.margin} variant="contained" color="secondary" type="submit" onClick={handleDelete}>
          X
        </Button>
      </div>
    </div>
  )
}

export default TransactionTile
