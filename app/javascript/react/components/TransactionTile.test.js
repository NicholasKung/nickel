import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter, Link } from "react-router-dom"
Enzyme.configure({ adapter: new Adapter() })

import TransactionTile from "./TransactionTile"

describe("TransactionTile", () => {
  let wrapper
  let transactionData

  beforeEach(() => {
    transactionData = {
      id: 1,
      name: "Gas",
      amount: 20,
      category: "Vehicle"
    }

    wrapper = mount(
      <BrowserRouter>
        <TransactionTile
          transactionData={transactionData}
        />
        </BrowserRouter>
      )
    })

  it("should render a h3 tag containing the text received via props", () =>{
    expect(wrapper.find('h3').text()).toBe("Gas")
  });
  it("should render a h4 tag containing the text received via props", () =>{
    expect(wrapper.find('h4').text()).toBe("$20")
  });
  it("should render a h5 tag containing the text received via props", () =>{
    expect(wrapper.find('h5').text()).toBe("Vehicle")
  });
})
