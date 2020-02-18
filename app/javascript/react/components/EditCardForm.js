import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
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

const EditCardForm = (props) => {
  const classes = useStyles();
  let cardId = props.match.params.id
  const [ redirect, setRedirect ] = useState(false)
  const [ errors, setErrors ] = useState({})
  const [ editCard, setEditCard ] = useState({
    number: "",
    limit: "",
    fee: "",
    name: "",
    description: "",
    date: "",
    supplier: "",
    image: ""
  })

  const handleChange = event => {
    setEditCard({
      ...editCard,
      [event.target.name]: event.target.value
    })
  }

  const handleEdit = (event) => {
    event.preventDefault()
    let formPayLoad = editCard;
    if(validFormSubmission()){
      editFetch(formPayLoad)
      setEditCard({
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

  const validFormSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["number", "limit", "fee", "name", "description", "date", "supplier"]
    requiredFields.forEach((field) => {
      if(editCard[field].trim() === ""){
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const editFetch = (formPayLoad) => {
    fetch(`/api/v1/cards/${cardId}`, {
      credentials: "same-origin",
      method: 'PATCH',
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
      setEditCard(body)
      setRedirect(true)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

if(redirect) {
  return <Redirect to ={`/cards/${cardId}`} />
}

  return (
    <div>
      <h3>Edit Credit Card Info</h3>
      <form className={classes.root} onSubmit={handleEdit} noValidate autoComplete="off">
      <ErrorsList errors={errors} />
        <TextField
          id="number"
          name="number"
          label="Credit Card Number"
          value={editCard.number}
          onChange={handleChange}
        />

        <TextField
          id="limit"
          name="limit"
          label="Credit Card Limit"
          value={editCard.limit}
          onChange={handleChange}
        />

        <TextField
          id="fee"
          name="fee"
          label="Credit Card Fee"
          value={editCard.fee}
          onChange={handleChange}
        />

        <TextField
          id="name"
          name="name"
          label="Credit Card Name"
          value={editCard.name}
          onChange={handleChange}
        />

        <TextField
          id="description"
          name="description"
          label="Credit Card Description"
          value={editCard.description}
          onChange={handleChange}
        />

        <TextField
          id="date"
          name="date"
          label="Credit Card Date"
          value={editCard.date}
          onChange={handleChange}
        />

        <TextField
          id="supplier"
          select
          name="supplier"
          label="Credit Card Supplier"
          value={editCard.supplier}
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
          value={editCard.image}
          onChange={handleChange}
        />
        <Button className = "button" variant="contained" color="secondary" type="submit">
          Edit Credit Card
        </Button>
      </form>
    </div>
  )
}

export default EditCardForm
