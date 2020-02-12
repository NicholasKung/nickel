import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 300,
    },
  },
}));

const NewCardForm = (props) => {

  const [open, setOpen] = React.useState(false);


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const classes = useStyles();
  const [newCard, setNewCard] = useState({
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
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let formPayLoad = newCard
    props.onSubmit(formPayLoad)
    setOpen(true)
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

  return (
    <div>
      <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">

        <TextField
          id="number"
          name="number"
          label="Credit Card Number"
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
          name="supplier"
          label="Credit Card Supplier"
          value={newCard.supplier}
          onChange={handleChange}
        />

        <TextField
          id="image"
          name="image"
          label="Credit Card Image"
          value={newCard.image}
          onChange={handleChange}
        />
        <Button className = "button" variant="contained" color="secondary" type="submit">
          Add new card
        </Button>
      </form>
    </div>

  )
}

export default NewCardForm
