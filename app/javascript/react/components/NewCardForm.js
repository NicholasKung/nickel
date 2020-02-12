import React, { useState } from 'react'

const NewCardForm = (props) => {

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
    <form onSubmit={handleSubmit}>

      <div className="columns large-6">
        <label>
          Credit Card Number:
          <input
            name="number"
            id="number"
            type="text"
            value={newCard.number}
            onChange={handleChange}
            maxLength="4"
          />
        </label>

        <label>
          Credit Card Limit:
          <input
            name="limit"
            id="limit"
            type="text"
            value={newCard.limit}
            onChange={handleChange}
          />
        </label>

        <label>
          Credit Card Annual Fee:
          <input
            name="fee"
            id="fee"
            type="text"
            value={newCard.fee}
            onChange={handleChange}
          />
        </label>

        <label>
          Credit Card Name:
          <input
            name="name"
            id="name"
            type="text"
            value={newCard.name}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="columns large-6">
        <label>
          Credit Card Description:
          <input
            name="description"
            id="description"
            type="text"
            value={newCard.description}
            onChange={handleChange}
            placeholder="Description"
          />
        </label>

        <label>
          Credit Card Expiration Date:
          <input
            name="date"
            id="date"
            type="tel"
            value={newCard.date}
            onChange={handleChange}
            placeholder="MM/YY"
          />
        </label>

        <label>
          Credit Card Supplier:
          <input
            name="supplier"
            id="supplier"
            type="text"
            value={newCard.supplier}
            onChange={handleChange}
          />
        </label>

        <label>
          Credit Card Image:
          <input
            name="image"
            id="image"
            type="text"
            value={newCard.image}
            onChange={handleChange}
          />
        </label>
      </div>
      
      <div>
        <input className="button" type="submit" value="Add New Card"/>
      </div>
    </form>
  )
}

export default NewCardForm
