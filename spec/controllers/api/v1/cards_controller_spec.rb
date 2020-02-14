require 'rails_helper'

RSpec.describe Api::V1::CardsController, type: :controller do

  let!(:user) { User.create(
    id:1,
    first_name:"Nick",
    last_name:"Kung",
    phone:"9148197129",
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

  describe "POST#create" do
    context 'when a successful request is made with proper params' do
      let!(:new_card) {
        { number:"1234",
          limit:1000,
          fee:50,
          name:"Test Name",
          description:"Test Description",
          date:"12/12",
          supplier:"Visa",
          image:"img",
          user: user
        }
      }

      it "creates a new credit card" do
        sign_in user
        expect{ post :create, params: new_card, format: :json }.to change { Card.count }.from(1).to(2)
      end

      it "returns the new card as JSON" do

        sign_in user
        post :create, params: new_card, format: :json
        response_body = JSON.parse(response.body)

        expect(response_body["card"]["number"]).to eq "1234"
        expect(response_body["card"]["limit"]).to eq 1000
        expect(response_body["card"]["fee"]).to eq 50
        expect(response_body["card"]["name"]).to eq "Test Name"
        expect(response_body["card"]["description"]).to eq "Test Description"
        expect(response_body["card"]["date"]).to eq "12/12"
        expect(response_body["card"]["supplier"]).to eq "Visa"
        expect(response_body["card"]["image"]).to eq "img"
      end
    end

    context 'when a malformed request is made' do
      let!(:bad_card) { { description:"Test Description"} }
      it "does not persist data to database" do
        prev_count = Card.count
        post :create, params: bad_card, format: :json
        new_count = Card.count
        expect(new_count).to eq prev_count
      end
    end
  end

  describe "DELETE#destroy" do
    it "should delete the desired credit card." do
      prev_count = Card.count
      Card.destroy(first_card.id)
      expect(Card.count).to eq(prev_count - 1)
      end
    end

  describe "PATCH#update" do
    let!(:new_card) {
      {card: { number:"1234",
        limit:1000,
        fee:50,
        name:"Test Name",
        description:"Test Description",
        date:"12/12",
        supplier:"Visa",
        image:"img",
        user: user
      },
      id:first_card.id }
    }
    it "should update the info of the credit card" do

      sign_in user
      patch :update, params: new_card, format: :json
      response_body = JSON.parse(response.body)


      expect(response_body["number"]).to eq "1234"
      expect(response_body["limit"]).to eq 1000
      expect(response_body["fee"]).to eq 1500
      expect(response_body["name"]).to eq "Test"
      expect(response_body["description"]).to eq "Test Description"
      expect(response_body["date"]).to eq "May 2020"
      expect(response_body["supplier"]).to eq "Visa"
      expect(response_body["image"]).to eq "https://media.giphy.com/media/pSpmpxFxFwDpC/giphy.gif"

      end
    end
  end
