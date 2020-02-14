class Api::V1::TransactionsController < ApplicationController
    before_action :authenticate_user!, only: [:index, :create]
    protect_from_forgery unless: -> { request.format.json? }

    def index
      render json: Transaction.all
    end

    def create
      card = Card.find(params["card_id"])
      transaction = Transaction.new(transaction_params)
      transaction.user = current_user
      transaction.card = card

      if transaction.save
        render json: transaction
      else
        render json: { error: review.errors.full_messages }, status: :unprocessable_entity
      end
    end

    private

    def transaction_params
      params.permit(:card_id, :user_id, :name, :category, :amount)
    end

end
