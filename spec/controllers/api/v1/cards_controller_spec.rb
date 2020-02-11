require 'rails_helper'

RSpec.describe Api::V1::CardsController, type: :controller do

  let!(:user) { User.create(
    id:1,
    first_name:"Nick",
    last_name:"Kung",
    email:"email6@email.com",
    password:"123456"
    ) }

  let!(:first_card) { Card.create(
    number: "1234",
    limit: 1000,
    fee: 1500,
    name: "Test",
    description: "Test Description",
    date: "May 2020",
    supplier: "Visa",
    image: "https://media.giphy.com/media/pSpmpxFxFwDpC/giphy.gif",
    user: user
    ) }

  describe "GET#index" do

    it "should return a list of all of the user's credit cards" do
      sign_in user

      get :index

      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq 1

      expect(returned_json[0]["number"]).to eq "1234"
      expect(returned_json[0]["limit"]).to eq 1000
      expect(returned_json[0]["fee"]).to eq 1500
      expect(returned_json[0]["name"]).to eq "Test"
      expect(returned_json[0]["description"]).to eq "Test Description"
      expect(returned_json[0]["date"]).to eq "May 2020"
      expect(returned_json[0]["supplier"]).to eq "Visa"
      expect(returned_json[0]["image"]).to eq "https://media.giphy.com/media/pSpmpxFxFwDpC/giphy.gif"

    end
  end

  describe "GET#show" do

    it "should return individuals credit card information" do
      sign_in user

      get :show, params: {id: first_card.id}

      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq ("application/json")

      expect(returned_json["number"]).to eq "1234"
      expect(returned_json["limit"]).to eq 1000
      expect(returned_json["fee"]).to eq 1500
      expect(returned_json["name"]).to eq "Test"
      expect(returned_json["description"]).to eq "Test Description"
      expect(returned_json["date"]).to eq "May 2020"
      expect(returned_json["supplier"]).to eq "Visa"
      expect(returned_json["image"]).to eq "https://media.giphy.com/media/pSpmpxFxFwDpC/giphy.gif"

    end
  end
end
