import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import _ from "lodash";

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 300,
    },
  },
}));

const NewTransactionForm = (props) => {
  const classes = useStyles();
  const [ newTransaction, setNewTransaction ] = useState({
    name: "",
    amount: "",
    category: ""
  })

  const handleChange = (event) => {
    setNewTransaction({
      ...newTransaction,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let formPayLoad = newTransaction
    props.onSubmit(formPayLoad)
    setNewTransaction({
      name: "",
      amount: "",
      category: ""
    })
  }

  return(
    <div>
      <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">

        <TextField
          id="name"
          name="name"
          label="Transaction Name"
          value={newTransaction.name}
          onChange={handleChange}
        />

        <TextField
          id="category"
          name="category"
          label="Transaction Category"
          value={newTransaction.category}
          onChange={handleChange}
        />

        <TextField
          id="amount"
          name="amount"
          label="Transaction Amount"
          value={newTransaction.amount}
          onChange={handleChange}
        />

        <Button className = "button" variant="contained" color="secondary" type="submit">
          Add new transaction
        </Button>
      </form>
    </div>
  )
}

export default NewTransactionForm
