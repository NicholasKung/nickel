import React from 'react'
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));


const CardShow = (props) => {

  const classes = useStyles();

  const handleDelete = (event) => {
    event.preventDefault()
    props.deleteCard(props.cardData.id)
  }

  return(
    <div className = "card-tile">
      <h1>{props.cardData.name}</h1>
      <img src = {props.cardData.image} />
      <h3>{props.cardData.description}</h3>
      <p>Expiration Date: {props.cardData.date} Limit: ${props.cardData.limit} Annual Fee: ${props.cardData.fee}</p>
      <Button className = {classes.margin} variant="contained" color="secondary" type="submit" onClick={handleDelete}>
        Delete Card
      </Button>
      <Button className = {classes.margin} variant="contained" color="secondary" type="submit" href={`/cards/${props.cardData.id}/edit`}>
        Edit Card
      </Button>
    </div>
  )
}

export default CardShow
