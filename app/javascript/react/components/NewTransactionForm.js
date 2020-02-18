import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import _ from "lodash";
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 300,
    },
  },
}));

const sections = [
  {
    value: 'Food',
    label: 'Food',
  },
  {
    value: 'Vehicle',
    label: 'Vehicle',
  },
  {
    value: 'Home',
    label: 'Home',
  },
  {
    value: 'Other',
    label: 'Other',
  },
];

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
      [event.target.name]: event.target.value
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
    <div className = 'transaction'>
      <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">
        <h3>Add a new transaction</h3>
        <TextField
          id="name"
          name="name"
          label="Transaction Name"
          value={newTransaction.name}
          onChange={handleChange}
          variant = "filled"
        />

        <TextField
          id="category"
          select
          name="category"
          label="Transaction Category"
          value={newTransaction.category}
          onChange={handleChange}
          variant = "filled"
        >
          {sections.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>


        <TextField
          id="amount"
          name="amount"
          label="Transaction Amount"
          value={newTransaction.amount}
          onChange={handleChange}
          variant = "filled"
        />

        <Button className = "button-transaction" variant="contained" color="secondary" type="submit">
          Add new transaction
        </Button>
      </form>
    </div>
  )
}

export default NewTransactionForm
