require_relative "../../../../app/services/twilio_client.rb"

class Api::V1::TransactionsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :destroy]
  protect_from_forgery unless: -> { request.format.json? }

  def create
    card = Card.find(params["card_id"])
    transaction = Transaction.new(transaction_params)
    transaction.user = current_user
    transaction.card = card

    if transaction.save
      begin
        TwilioClient.new.send_text(current_user, "You have successfully created a new transaction")
      rescue
      ensure
          render json: transaction
      end
    else
      render json: { error: transaction.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    transaction = Transaction.find(params[:id])

    if current_user == transaction.user
      begin
        TwilioClient.new.send_text(current_user, "You have successfully deleted a transaction")
      rescue
      ensure
        transaction.destroy
        render json: { message: "Delete Successful." }
      end
    else
      render json: { message: "Could not delete." }
    end
  end



  private

  def transaction_params
    params.permit(:card_id, :user_id, :name, :category, :amount)
  end

end
