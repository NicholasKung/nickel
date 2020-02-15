require 'rails_helper'

RSpec.describe Api::V1::TransactionsController, type: :controller do

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

  let!(:first_transaction) { Transaction.create(
    name: "Trader Joe's",
    amount: 200,
    category: "Grocieries",
    user: user,
    card: first_card
    ) }

  describe "DELETE#destroy" do
    it "should delete the desired transaction." do
      prev_count = Transaction.count
      Transaction.destroy(first_transaction.id)
      expect(Transaction.count).to eq(prev_count - 1)
    end
  end
end
