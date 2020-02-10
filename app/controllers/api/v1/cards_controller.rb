class Api::V1::CardsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Card.all
  end
end