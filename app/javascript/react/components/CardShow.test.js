import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from "react-router-dom"
Enzyme.configure({ adapter: new Adapter() })

import CardShow from "./CardShow"

describe("CardShow", () => {
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
        <CardShow
          cardData={cardData}
        />
        </BrowserRouter>
      )
    })

  it("should render an img tag containing the img received via props", () => {
     expect(wrapper.find('img').props()).toEqual({
       src: "https://www.mastercard.us/en-us/consumers/find-card-products/credit-cards/mastercard/_jcr_content/contentpar/herolight_1/image.adaptive.319.low.jpg/1487872342914.jpg"})
  });

  it("should render a p tag containing the text received via props", () =>{
     expect(wrapper.find('p').text()).toBe("Expiration Date: August 2024 Limit: $3000 Annual Fee: $100")
  });

  it("should render a h3 tag containing the text received via props", () =>{
    expect(wrapper.find('h3').text()).toBe("Test Description")
  });

  it("should render a h1 tag containing the text received via props", () =>{
    expect(wrapper.find('h1').text()).toBe("Test Credit Card")
  });
})
