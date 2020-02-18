import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import _ from "lodash"
import ErrorsList from "./ErrorsList"
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
    value: 'Visa',
    label: 'Visa',
  },
  {
    value: 'MasterCard',
    label: 'MasterCard',
  },
  {
    value: 'Discover',
    label: 'Discover',
  },
  {
    value: 'Other',
    label: 'Other',
  },
];

const NewCardForm = (props) => {
  const classes = useStyles();
  const [ errors, setErrors ] = useState({})
  const [ newCard, setNewCard ] = useState({
    number: "",
    limit: "",
    fee: "",
    name: "",
    description: "",
    date: "",
    supplier: "",
    image: ""
  })

  const handleChange = (event) => {
    setNewCard({
      ...newCard,
      [event.target.name]: event.target.value
    })
  }

  const validFormSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["number", "limit", "fee", "name", "description", "date", "supplier"]
    requiredFields.forEach((field) => {
      if(newCard[field].trim() === ""){
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let formPayLoad = newCard;
    if(validFormSubmission()){
      props.onSubmit(formPayLoad)
      setNewCard({
        number: "",
        limit: "",
        fee: "",
        name: "",
        description: "",
        date: "",
        supplier: "",
        image: ""
      })
    }
  }

  return (
    <div>
      <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">
      <ErrorsList errors={errors} />
        <div className = 'columns large-6'>
          <TextField
            id="number"
            name="number"
            label="Credit Card Number (Last 4 only)"
            value={newCard.number}
            onChange={handleChange}
          />

          <TextField
            id="limit"
            name="limit"
            label="Credit Card Limit"
            value={newCard.limit}
            onChange={handleChange}
          />

          <TextField
            id="fee"
            name="fee"
            label="Credit Card Fee"
            value={newCard.fee}
            onChange={handleChange}
          />

          <TextField
            id="name"
            name="name"
            label="Credit Card Name"
            value={newCard.name}
            onChange={handleChange}
          />
      </div>

      <div className ='columns large-6'>
        <TextField
          id="description"
          name="description"
          label="Credit Card Description"
          value={newCard.description}
          onChange={handleChange}
        />

        <TextField
          id="date"
          name="date"
          label="Credit Card Date"
          value={newCard.date}
          onChange={handleChange}
        />

        <TextField
          id="supplier"
          select
          name="supplier"
          label="Credit Card Supplier"
          value={newCard.supplier}
          onChange={handleChange}
        >
        {sections.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
        </TextField>

        <TextField
          id="image"
          name="image"
          label="Credit Card Image"
          value={newCard.image}
          onChange={handleChange}
        />
        </div>
        <div className = 'add-button'>
          <Button className = "add-button" variant="contained" color="secondary" type="submit">
            Add new card
          </Button>
        </div>
      </form>
    </div>

  )
}

export default NewCardForm
