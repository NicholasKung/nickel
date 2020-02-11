import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter, Link } from "react-router-dom"
Enzyme.configure({ adapter: new Adapter() })

import CardTile from "./CardTile"

describe("CardTile", () => {
  let wrapper
  let cardData

  beforeEach(() => {
    cardData = {
      id: 1,
      number: "1234",
      limit: 3000,
      fee: 100,
      name: "Test Credit Card",
      description: "Test Description",
      date: "August 2024",
      supplier: "MasterCard",
      image: "https://www.mastercard.us/en-us/consumers/find-card-products/credit-cards/mastercard/_jcr_content/contentpar/herolight_1/image.adaptive.319.low.jpg/1487872342914.jpg"
    }

    wrapper = mount(
      <BrowserRouter>
        <CardTile
          cardData={cardData}
        />
        </BrowserRouter>
      )
    })

  it("should render an img tag containing the img received via props", () => {
     expect(wrapper.find('img').props()).toEqual({
       src: "https://www.mastercard.us/en-us/consumers/find-card-products/credit-cards/mastercard/_jcr_content/contentpar/herolight_1/image.adaptive.319.low.jpg/1487872342914.jpg"})
  });

  it("should contain a link that wraps the img tab to take User to show page", () => {
   expect(wrapper.find(Link).props().to).toBe("/cards/1")
 })

  it("should render a h1 tag containing the text received via props", () =>{
    expect(wrapper.find('h1').text()).toBe("Test Credit Card")
  });
})
