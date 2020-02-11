class Api::V1::CardsController < ApplicationController
  before_action :authenticate_user!, only: [:index, :show]
  protect_from_forgery unless: -> { request.format.json? }

  def index
    user_cards = current_user.cards
    render json: user_cards
  end

  def show
    render json: Card.find(params["id"])
  end
end
