class Api::V1::CardsController < ApplicationController
  before_action :authenticate_user!, only: [:index, :show, :create, :destroy]
  protect_from_forgery unless: -> { request.format.json? }

  def index
    user_cards = current_user.cards
    render json: user_cards
  end

  def show
    render json: Card.find(params["id"])
  end

  def create
    card = Card.new(card_params)
    card.user = current_user
    if card.save
      render json: { card: card }
    else
      render json: { error: card.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    card = Card.find(params[:id])

    if current_user == card.user
      card.destroy
      render json: { message: "Delete Successful." }
    else
      render json: { message: "Could not delete." }
    end
  end


  private

  def card_params
    params.permit(:number, :limit, :fee, :name, :description, :date, :supplier, :image)
  end
end
